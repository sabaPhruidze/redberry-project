import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../../../api/hooks/useLogin";
import {
  loginSchema,
  type LoginFormValues,
} from "../schemas/login.schema";

type UseLoginModalFormParams = {
  onSuccess?: () => void;
};

export const useLoginModalForm = ({ onSuccess }: UseLoginModalFormParams) => {
  const loginMutation = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginErrorText = (() => {
    if (!loginMutation.isError) {
      return undefined;
    }

    if (axios.isAxiosError<{ message?: string }>(loginMutation.error)) {
      return (
        loginMutation.error.response?.data?.message ??
        "Login failed. Please try again."
      );
    }

    return "Login failed. Please try again.";
  })();

  const resetLoginError = () => {
    if (loginMutation.isError) {
      loginMutation.reset();
    }
  };

  const onSubmit = handleSubmit(async (values) => {
    if (loginMutation.isPending) {
      return;
    }

    try {
      const response = await loginMutation.mutateAsync(values);
      localStorage.setItem("access_token", response.token);
      localStorage.setItem("auth_user", JSON.stringify(response.user));
      onSuccess?.();
    } catch {
      return;
    }
  });

  return {
    control,
    errors,
    isPending: loginMutation.isPending,
    loginErrorText,
    resetLoginError,
    onSubmit,
  };
};

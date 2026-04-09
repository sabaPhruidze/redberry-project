import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegister from "../../../api/hooks/useRegister";
import {
  registerSchema,
  type RegisterFormValues,
} from "../schemas/register.schema";

type UseRegisterModalFormParams = {
  onSuccess: () => void;
  goToStepTwo: () => void;
  goToStepThree: () => void;
};

export const useRegisterModalForm = ({
  onSuccess,
  goToStepTwo,
  goToStepThree,
}: UseRegisterModalFormParams) => {
  const registerMutation = useRegister();
  const {
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      avatar: null,
    },
  });

  const signUpErrorText = (() => {
    if (!registerMutation.isError) {
      return undefined;
    }

    if (axios.isAxiosError<{ message?: string }>(registerMutation.error)) {
      return (
        registerMutation.error.response?.data?.message ??
        "Registration failed. Please try again."
      );
    }

    return "Registration failed. Please try again.";
  })();

  const updateFormField = (
    field: keyof RegisterFormValues,
    value: RegisterFormValues[keyof RegisterFormValues],
  ) => {
    if (registerMutation.isError) {
      registerMutation.reset();
    }

    setValue(field, value as never, { shouldDirty: true, shouldValidate: false });
  };

  const goToNextStepFromOne = async () => {
    const isEmailValid = await trigger("email");
    if (isEmailValid) {
      goToStepTwo();
    }
  };

  const goToNextStepFromTwo = async () => {
    const isStepValid = await trigger(["password", "confirmPassword"]);
    if (isStepValid) {
      goToStepThree();
    }
  };

  const handleSignUp = handleSubmit(async (values) => {
    if (registerMutation.isPending) {
      return;
    }

    try {
      const response = await registerMutation.mutateAsync({
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        avatar: values.avatar ?? null,
      });
      localStorage.setItem("access_token", response.token);
      localStorage.setItem("auth_user", JSON.stringify(response.user));
      onSuccess();
    } catch {
      return;
    }
  });

  return {
    values: {
      email: watch("email"),
      password: watch("password"),
      confirmPassword: watch("confirmPassword"),
      username: watch("username"),
    },
    errors,
    isSigningUp: registerMutation.isPending,
    signUpErrorText,
    updateFormField,
    goToNextStepFromOne,
    goToNextStepFromTwo,
    handleSignUp,
  };
};

import { useMutation } from "@tanstack/react-query";
import { login } from "../../endpoints/auth";
import type { LoginPayload } from "../../../features/auth/types/signup";

const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
  });
};

export default useLogin;

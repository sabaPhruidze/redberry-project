import { useMutation } from "@tanstack/react-query";
import { register } from "../../endpoints/auth";
import type { RegisterPayload } from "../../../features/auth/types/signup";

const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
  });
};

export default useRegister;

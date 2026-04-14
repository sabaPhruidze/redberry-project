import type { BaseSyntheticEvent } from "react";
import { Controller, type Control, type FieldErrors } from "react-hook-form";
import AuthEmailInputField from "../form-fields/AuthEmailInputField";
import AuthPasswordInputField from "../form-fields/AuthPasswordInputField";
import AuthModalFooter from "../modal-layout/AuthModalFooter";
import EYE_OPENED_ICON from "../../../../assets/icons/authentification/Eye_opened.svg?react";
import EYE_CLOSED_ICON from "../../../../assets/icons/authentification/Eye_closed.svg?react";
import type { LoginFormValues } from "../../schemas/login.schema";

type LoginModalFormContentProps = {
  control: Control<LoginFormValues>;
  errors: FieldErrors<LoginFormValues>;
  isPending: boolean;
  loginErrorText?: string;
  onSubmit: (event?: BaseSyntheticEvent) => Promise<void>;
  onResetError: () => void;
  onSwitchToRegister: () => void;
  showPassword: boolean;
  onTogglePassword: () => void;
};

const LoginModalFormContent = ({
  control,
  errors,
  isPending,
  loginErrorText,
  onSubmit,
  onResetError,
  onSwitchToRegister,
  showPassword,
  onTogglePassword,
}: LoginModalFormContentProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="w-[360px]"
      style={{ fontFamily: "Inter, sans-serif" }}
      noValidate
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <AuthEmailInputField
            id="login-email"
            label="Email*"
            value={field.value}
            placeholder="you@example.com"
            autoComplete="email"
            error={errors.email?.message}
            onChange={(value) => {
              onResetError();
              field.onChange(value);
            }}
            onBlur={field.onBlur}
            name={field.name}
            inputRef={field.ref}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <AuthPasswordInputField
            id="login-password"
            label="Password*"
            value={field.value}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="current-password"
            icon={showPassword ? EYE_OPENED_ICON : EYE_CLOSED_ICON}
            ariaLabel="Toggle password visibility"
            showTopSpacing
            labelColor="#3D3D3D"
            error={errors.password?.message}
            onChange={(value) => {
              onResetError();
              field.onChange(value);
            }}
            onToggleVisibility={onTogglePassword}
          />
        )}
      />
      <button
        type="submit"
        disabled={isPending}
        className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white"
        style={{ fontWeight: 500 }}
      >
        {isPending ? "Logging In..." : "Log In"}
      </button>
      {loginErrorText ? (
        <p
          className="mt-[8px] text-[12px] leading-[100%] text-[#F4161A]"
          style={{ fontWeight: 400 }}
        >
          {loginErrorText}
        </p>
      ) : null}
      <AuthModalFooter
        questionText="Don't have an account?"
        actionText="Sign Up"
        onActionClick={onSwitchToRegister}
      />
    </form>
  );
};

export default LoginModalFormContent;

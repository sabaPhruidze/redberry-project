import { Controller, type Control } from "react-hook-form";
import type { ProfileFormInputValues } from "../../helpers/profileModalForm";
import type { ProfileFormValues } from "../../schemas/profile.schema";
import ProfileSingleField from "./ProfileSingleField";

type ProfileControlledFieldProps = {
  control: Control<ProfileFormInputValues, unknown, ProfileFormValues>;
  name: keyof ProfileFormInputValues;
  id: string;
  label: string;
  type?: "text" | "number" | "email";
  placeholder: string;
  autoComplete?: string;
  readOnly?: boolean;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  trailingIconType?: "pencil" | "check" | "arrow";
  wrapperClassName?: string;
  labelClassName?: string;
  inputBoxClassName?: string;
  labelInputGapClassName?: string;
  trailingIconContainerClassName?: string;
  fieldBackgroundColor?: string;
  fieldBorderColor?: string;
};

const ProfileControlledField = ({
  control,
  name,
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  readOnly,
  disabled,
  error,
  success,
  trailingIconType,
  wrapperClassName,
  labelClassName,
  inputBoxClassName,
  labelInputGapClassName,
  trailingIconContainerClassName,
  fieldBackgroundColor,
  fieldBorderColor,
}: ProfileControlledFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ProfileSingleField
          id={id}
          label={label}
          name={field.name}
          type={type}
          placeholder={placeholder}
          value={String(field.value ?? "")}
          autoComplete={autoComplete}
          onChange={field.onChange}
          onBlur={field.onBlur}
          inputRef={field.ref}
          readOnly={readOnly}
          disabled={disabled}
          error={error}
          success={success}
          trailingIconType={trailingIconType}
          wrapperClassName={wrapperClassName}
          labelClassName={labelClassName}
          inputBoxClassName={inputBoxClassName}
          labelInputGapClassName={labelInputGapClassName}
          trailingIconContainerClassName={trailingIconContainerClassName}
          fieldBackgroundColor={fieldBackgroundColor}
          fieldBorderColor={fieldBorderColor}
        />
      )}
    />
  );
};

export default ProfileControlledField;

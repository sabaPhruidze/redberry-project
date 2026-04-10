import AuthFormField from "./AuthFormField";
import PENCIL_SIMPLE_ICON from "../../../assets/icons/profile/Icon Set=PencilSimple.svg";
import CHECK_ICON from "../../../assets/icons/profile/Icon Set=Check.svg";

type ProfileSingleFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  trailingIconType?: "pencil" | "check";
};

const ProfileSingleField = ({
  id,
  label,
  placeholder,
  trailingIconType,
}: ProfileSingleFieldProps) => {
  const trailingIconSrc = trailingIconType === "pencil"
    ? PENCIL_SIMPLE_ICON
    : trailingIconType === "check"
      ? CHECK_ICON
      : undefined;
  const trailingIcon = trailingIconSrc ? (
    <img src={trailingIconSrc} alt="" className="h-[22px] w-[22px]" />
  ) : undefined;

  return (
    <AuthFormField
      id={id}
      label={label}
      value=""
      placeholder={placeholder}
      labelColor="#3D3D3D"
      labelInputGapClassName="mt-[5px]"
      containerClassName="h-[73px]"
      readOnly
      trailingIcon={trailingIcon}
    />
  );
};

export default ProfileSingleField;

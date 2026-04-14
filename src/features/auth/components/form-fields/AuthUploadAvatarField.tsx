import ProfileAvatar from "../profile/avatar/ProfileAvatar";

type AuthUploadAvatarFieldProps = {
  onFileSelect?: (file: File | null) => void;
  showTopSpacing?: boolean;
  disabled?: boolean;
};

const AuthUploadAvatarField = ({
  onFileSelect,
  showTopSpacing = false,
  disabled = false,
}: AuthUploadAvatarFieldProps) => {
  return (
    <div className={showTopSpacing ? "mt-[24px]" : undefined}>
      <ProfileAvatar onAvatarChange={(file) => onFileSelect?.(file)} disabled={disabled} />
    </div>
  );
};

export default AuthUploadAvatarField;

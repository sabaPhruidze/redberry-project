import { useRef, type ChangeEvent } from "react";
import AuthFieldLabel from "../form-fields/AuthFieldLabel";
import ProfileAvatarUploadPrompt from "./ProfileAvatarUploadPrompt";
import ProfileAvatarUploadedCard from "./ProfileAvatarUploadedCard";
import { ALLOWED_AVATAR_ACCEPT } from "./profileAvatar.constants";
import { isAllowedAvatarFile } from "./profileAvatar.utils";
import useProfileAvatarPreview from "./useProfileAvatarPreview";

type ProfileAvatarProps = {
  onAvatarChange: (avatar: File | null) => void;
  disabled?: boolean;
};

const ProfileAvatar = ({
  onAvatarChange,
  disabled = false,
}: ProfileAvatarProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { avatarPreview, setAvatarFile, syncEmptySelection } =
    useProfileAvatarPreview({ onAvatarChange });

  const openFilePicker = () => {
    if (disabled) return;
    if (fileInputRef.current) fileInputRef.current.value = "";
    fileInputRef.current?.click();
  };

  const selectAvatarFile = (files: FileList | null | undefined) => {
    if (!files?.length) {
      syncEmptySelection();
      return;
    }

    const firstFile = files[0];
    if (!isAllowedAvatarFile(firstFile)) return;

    setAvatarFile(firstFile);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    selectAvatarFile(event.target.files);
  };

  return (
    <div className="flex w-[360px] flex-col gap-[12px]">
      <AuthFieldLabel
        label="Upload Avatar"
        className="w-[360px]"
        color="#3D3D3D"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept={ALLOWED_AVATAR_ACCEPT}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
      {avatarPreview ? (
        <ProfileAvatarUploadedCard
          file={avatarPreview.file}
          previewUrl={avatarPreview.previewUrl}
          disabled={disabled}
          onChangeClick={openFilePicker}
        />
      ) : (
        <ProfileAvatarUploadPrompt
          disabled={disabled}
          onOpenFilePicker={openFilePicker}
          onFilesDrop={selectAvatarFile}
        />
      )}
    </div>
  );
};

export default ProfileAvatar;

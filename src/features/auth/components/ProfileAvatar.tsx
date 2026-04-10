import { useRef, type ChangeEvent, type DragEvent } from "react";
import AuthFieldLabel from "./AuthFieldLabel";
import DOWNLOAD_ICON from "../../../assets/icons/authentification/donwload_icon.svg";

type ProfileAvatarProps = {
  onAvatarChange: (avatar: File | null) => void;
  disabled?: boolean;
};

const ALLOWED_AVATAR_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);
const ALLOWED_AVATAR_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const ProfileAvatar = ({
  onAvatarChange,
  disabled = false,
}: ProfileAvatarProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const openFilePicker = () => fileInputRef.current?.click();

  const isAllowedAvatarFile = (file: File) => {
    const mimeType = file.type.toLowerCase();
    if (ALLOWED_AVATAR_MIME_TYPES.has(mimeType)) return true;

    const lowerCaseName = file.name.toLowerCase();
    return ALLOWED_AVATAR_EXTENSIONS.some((extension) =>
      lowerCaseName.endsWith(extension),
    );
  };

  const selectAvatarFile = (files: FileList | null | undefined) => {
    if (!files?.length) {
      onAvatarChange(null);
      return;
    }

    const firstFile = files[0];
    if (!isAllowedAvatarFile(firstFile)) return;

    onAvatarChange(firstFile);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    selectAvatarFile(event.target.files);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (disabled) return;
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (disabled) return;
    selectAvatarFile(event.dataTransfer.files);
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
        accept=".jpg,.jpeg,.png,.webp"
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
      <div
        id="profile-upload-avatar-box"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="mb-[4px] flex w-[360px] flex-col items-center gap-[8px] rounded-[8px] border-[1.5px] border-[#D1D1D1] bg-[#FFFFFF] pt-[30px] pb-[30px]"
      >
        <img
          src={DOWNLOAD_ICON}
          alt=""
          aria-hidden="true"
          className="h-[34px] w-[34px]"
        />
        <div className="flex h-[40px] w-[360px] flex-col gap-[8px]">
          <p
            className="h-[17px] w-[360px] text-center text-[14px] leading-[100%] tracking-[0px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            <span className="text-[#666666]">Drag and drop or </span>
            <button
              type="button"
              onClick={openFilePicker}
              disabled={disabled}
              className="text-[#281ED2] underline disabled:opacity-60 cursor-pointer"
            >
              Upload file
            </button>
          </p>
          <p
            className="h-[15px] w-[360px] text-center text-[12px] leading-[100%] tracking-[0px] text-[#ADADAD]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            JPG, PNG or W ebP
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;

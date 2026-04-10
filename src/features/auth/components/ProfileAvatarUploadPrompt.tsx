import type { DragEvent } from "react";
import DOWNLOAD_ICON from "../../../assets/icons/authentification/donwload_icon.svg";

type ProfileAvatarUploadPromptProps = {
  disabled: boolean;
  onOpenFilePicker: () => void;
  onFilesDrop: (files: FileList | null | undefined) => void;
};

const ProfileAvatarUploadPrompt = ({
  disabled,
  onOpenFilePicker,
  onFilesDrop,
}: ProfileAvatarUploadPromptProps) => {
  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (disabled) return;
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (disabled) return;
    onFilesDrop(event.dataTransfer.files);
  };

  return (
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
            onClick={onOpenFilePicker}
            disabled={disabled}
            className="cursor-pointer text-[#281ED2] underline disabled:cursor-not-allowed disabled:opacity-60"
          >
            Upload file
          </button>
        </p>
        <p
          className="h-[15px] w-[360px] text-center text-[12px] leading-[100%] tracking-[0px] text-[#ADADAD]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
        >
          JPG, PNG or WebP
        </p>
      </div>
    </div>
  );
};

export default ProfileAvatarUploadPrompt;

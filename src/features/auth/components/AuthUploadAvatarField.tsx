import { useRef } from "react";
import DOWNLOAD_ICON from "../../../assets/icons/authentification/donwload_icon.svg";

type AuthUploadAvatarFieldProps = {
  onFileSelect?: (file: File | null) => void;
  showTopSpacing?: boolean;
};

const AuthUploadAvatarField = ({
  onFileSelect,
  showTopSpacing = false,
}: AuthUploadAvatarFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => inputRef.current?.click();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    onFileSelect?.(file);
  };

  return (
    <div className={`${showTopSpacing ? "mt-[24px]" : ""} flex w-[360px] flex-col gap-[12px]`}>
      <label
        htmlFor="signup-avatar-upload"
        className="h-[17px] w-[360px] text-[14px] leading-[100%] text-[#3D3D3D]"
        style={{ fontWeight: 500 }}
      >
        Upload Avatar
      </label>
      <div className="flex h-[140px] w-[360px] items-center justify-center rounded-[8px] border-[1.5px] border-[#D1D1D1] bg-white px-[16px]">
        <div className="flex flex-col items-center gap-[8px] text-center">
          <img src={DOWNLOAD_ICON} alt="" aria-hidden="true" className="h-[34px] w-[34px]" />
          <div className="flex h-[38px] flex-col items-center gap-[6px]">
            <p className="h-[17px] text-center text-[14px] leading-[100%] text-[#666666]" style={{ fontWeight: 500 }}>
              Drag and drop or{" "}
              <button type="button" onClick={handleUploadClick} className="text-[14px] leading-[100%] text-[#281ED2] underline">
                Upload file
              </button>
            </p>
            <p className="h-[15px] text-center text-[12px] leading-[100%] text-[#ADADAD]" style={{ fontWeight: 400 }}>
              JPG, PNG or WebP
            </p>
          </div>
        </div>
      </div>
      <input
        id="signup-avatar-upload"
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AuthUploadAvatarField;

import { formatAvatarFileSize } from "./profileAvatar.utils";

type ProfileAvatarUploadedCardProps = {
  file: File;
  previewUrl: string;
  disabled: boolean;
  onChangeClick: () => void;
};

const ProfileAvatarUploadedCard = ({
  file,
  previewUrl,
  disabled,
  onChangeClick,
}: ProfileAvatarUploadedCardProps) => {
  return (
    <div className="mb-[4px] flex h-[142px] w-[360px] items-center gap-[8px] rounded-[8px] border-[1.5px] border-[#DDDBFA] bg-[#EEEDFC] px-[40px] py-[30px]">
      <div className="flex w-full items-center gap-[10px]">
        <img
          src={previewUrl}
          alt="Avatar preview"
          className="h-[54px] w-[54px] shrink-0 rounded-[40px] object-cover"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-[2px]">
          <p
            title={file.name}
            className="truncate text-[12px] leading-[100%] tracking-[0px] text-[#666666]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            {file.name}
          </p>
          <p
            className="text-[10px] leading-[100%] tracking-[0px] text-[#ADADAD]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            {formatAvatarFileSize(file.size)}
          </p>
          <button
            type="button"
            onClick={onChangeClick}
            disabled={disabled}
            className="w-fit cursor-pointer text-[10px] leading-[100%] tracking-[0px] text-[#4F46E5] underline disabled:cursor-not-allowed disabled:opacity-60"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatarUploadedCard;

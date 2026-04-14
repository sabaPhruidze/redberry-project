import {
  getProfileStatusText,
  getProfileStatusTextClassName,
  type ProfileStatus,
} from "../../../helpers/profileStatus";

type ProfileNameStatusProps = {
  username: string;
  status: ProfileStatus;
};

const ProfileNameStatus = ({
  username,
  status,
}: ProfileNameStatusProps) => {
  const statusText = getProfileStatusText(status);
  const statusClassName = getProfileStatusTextClassName(status);

  return (
    <div className="flex h-[40.3px] w-[292px] flex-col justify-center gap-[4px]">
      <p
        className="h-[24.3px] w-[292px] text-[20px] font-semibold leading-[24px] tracking-[0px] text-[#0A0A0A]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {username}
      </p>
      <p
        className={`text-[10px] font-normal leading-[100%] tracking-[0px] ${statusClassName}`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {statusText}
      </p>
    </div>
  );
};

export default ProfileNameStatus;

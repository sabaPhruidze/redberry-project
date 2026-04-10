import AVATAR_ICON from "../../../assets/icons/header/Avatar.svg";
import STATUS_GREEN_ICON from "../../../assets/icons/profile/Property 1=Green.svg";
import STATUS_ORANGE_ICON from "../../../assets/icons/profile/Property 1=Orange.svg";
import STATUS_RED_ICON from "../../../assets/icons/profile/Property 1=Red.svg";
import type { ProfileStatus } from "../helpers/profileStatus";

type UserAvatarProps = {
  avatarUrl?: string;
  username: string;
  status: ProfileStatus;
};

const getStatusIcon = (status: ProfileStatus) => {
  if (status === "complete") return STATUS_GREEN_ICON;
  if (status === "error") return STATUS_RED_ICON;
  return STATUS_ORANGE_ICON;
};

const UserAvatar = ({ avatarUrl, username, status }: UserAvatarProps) => {
  const avatarSource = avatarUrl?.trim() ? avatarUrl : AVATAR_ICON;
  const statusIcon = getStatusIcon(status);

  return (
    <div className="relative h-[56px] w-[56px]">
      <div className="h-[56px] w-[56px] overflow-hidden rounded-full bg-[#EEEDFC]">
        <img
          src={avatarSource}
          alt={`${username} avatar`}
          className="h-full w-full object-cover"
        />
      </div>
      <img
        src={statusIcon}
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 h-[18px] w-[18px]"
      />
    </div>
  );
};

export default UserAvatar;

import AVATAR_ICON from "../../../assets/icons/header/Avatar.svg";

type UserAvatarProps = {
  avatarUrl?: string;
  username: string;
};

const UserAvatar = ({ avatarUrl, username }: UserAvatarProps) => {
  const avatarSource = avatarUrl?.trim() ? avatarUrl : AVATAR_ICON;

  return (
    <div className="h-[56px] w-[56px] overflow-hidden rounded-full bg-[#EEEDFC]">
      <img
        src={avatarSource}
        alt={`${username} avatar`}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default UserAvatar;

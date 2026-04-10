import UserAvatar from "./UserAvatar";
import ProfileNameStatus from "./ProfileNameStatus";

type ProfileIdentityBlockProps = {
  username: string;
  avatarUrl?: string;
};

const ProfileIdentityBlock = ({
  username,
  avatarUrl,
}: ProfileIdentityBlockProps) => {
  return (
    <div className="flex w-[360px] flex-col gap-[8px]">
      <div className="flex h-[56px] w-[360px] items-center gap-[8px]">
        <UserAvatar avatarUrl={avatarUrl} username={username} />
        <ProfileNameStatus username={username} />
      </div>
    </div>
  );
};

export default ProfileIdentityBlock;

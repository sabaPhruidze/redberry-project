import UserAvatar from "./UserAvatar";
import ProfileNameStatus from "./ProfileNameStatus";
import type { ProfileStatus } from "../helpers/profileStatus";

type ProfileIdentityBlockProps = {
  username: string;
  avatarUrl?: string;
  status: ProfileStatus;
};

const ProfileIdentityBlock = ({
  username,
  avatarUrl,
  status,
}: ProfileIdentityBlockProps) => {
  return (
    <div className="flex w-[360px] flex-col gap-[8px] mb-[24px]">
      <div className="flex h-[56px] w-[360px] items-center gap-[8px]">
        <UserAvatar avatarUrl={avatarUrl} username={username} status={status} />
        <ProfileNameStatus username={username} status={status} />
      </div>
    </div>
  );
};

export default ProfileIdentityBlock;

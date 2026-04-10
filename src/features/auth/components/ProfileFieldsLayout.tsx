import ProfileFieldRow from "./ProfileFieldRow";
import ProfileSingleField from "./ProfileSingleField";

const ProfileFieldsLayout = () => {
  return (
    <div className="flex w-[360px] flex-col gap-[12px]">
      <ProfileSingleField
        id="profile-full-name"
        label="Full Name"
        placeholder="Username"
        trailingIconType="pencil"
      />
      <ProfileSingleField
        id="profile-email"
        label="Email"
        placeholder="Email@gmail.com"
        trailingIconType="check"
      />
      <ProfileFieldRow />
    </div>
  );
};

export default ProfileFieldsLayout;

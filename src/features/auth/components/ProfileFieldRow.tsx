import ProfileSingleField from "./ProfileSingleField";

const ProfileFieldRow = () => {
  return (
    <div className="flex w-[360px] items-start gap-[8px]">
      <div className="flex-1">
        <ProfileSingleField
          id="profile-mobile-number"
          label="Mobile Number"
          placeholder="+995 599209820"
        />
      </div>
      <div className="w-[108px]">
        <ProfileSingleField
          id="profile-age"
          label="Age"
          placeholder="29"
        />
      </div>
    </div>
  );
};

export default ProfileFieldRow;

import AuthPasswordInputField from "./AuthPasswordInputField";
import ProfileFieldRow from "./ProfileFieldRow";

const ProfileFieldsLayout = () => {
  return (
    <div className="flex w-[360px] flex-col gap-[12px]">
      <AuthPasswordInputField
        id="profile-full-name"
        label="Full Name"
        value=""
        placeholder="Username"
        labelColor="#3D3D3D"
        labelInputGapClassName="mt-[5px]"
        onChange={() => undefined}
      />
      <AuthPasswordInputField
        id="profile-email"
        label="Email"
        value=""
        placeholder="Email@gmail.com"
        labelColor="#3D3D3D"
        labelInputGapClassName="mt-[5px]"
        onChange={() => undefined}
      />
      <ProfileFieldRow />
    </div>
  );
};

export default ProfileFieldsLayout;

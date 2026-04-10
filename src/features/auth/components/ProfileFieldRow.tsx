import AuthPasswordInputField from "./AuthPasswordInputField";

const ProfileFieldRow = () => {
  return (
    <div className="flex w-[360px] items-start gap-[12px]">
      <div className="flex-1">
        <AuthPasswordInputField
          id="profile-mobile-number"
          label="Mobile Number"
          value=""
          placeholder="+995 599209820"
          labelColor="#3D3D3D"
          labelInputGapClassName="mt-[5px]"
          onChange={() => undefined}
        />
      </div>
      <div className="w-[108px]">
        <AuthPasswordInputField
          id="profile-age"
          label="Age"
          value=""
          placeholder="29"
          labelColor="#3D3D3D"
          labelInputGapClassName="mt-[5px]"
          onChange={() => undefined}
        />
      </div>
    </div>
  );
};

export default ProfileFieldRow;

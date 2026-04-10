type ProfileNameStatusProps = {
  username: string;
};

const ProfileNameStatus = ({ username }: ProfileNameStatusProps) => {
  return (
    <div className="flex h-[56px] w-[292px] flex-col justify-center gap-[4px]">
      <p
        className="h-[24.3px] w-[292px] text-[20px] font-semibold leading-[24px] tracking-[0px] text-[#000000]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {username}
      </p>
      <p
        className="h-[12px] w-[89px] text-[10px] font-normal leading-[100%] tracking-[0px] text-[#1DC31D]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Profile is Complete
      </p>
    </div>
  );
};

export default ProfileNameStatus;

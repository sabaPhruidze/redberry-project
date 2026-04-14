import AuthFieldLabel from "../form-fields/AuthFieldLabel";
import DOWNLOAD_ICON from "../../../../assets/icons/authentification/donwload_icon.svg";

const ProfileUploadAvatarBlock = () => {
  return (
    <div className="flex w-[360px] flex-col gap-[12px]">
      <AuthFieldLabel
        label="Upload Avatar"
        className="w-[360px]"
        color="#3D3D3D"
      />
      <div
        id="profile-upload-avatar-box"
        className="mb-[4px] flex w-[360px] flex-col items-center gap-[8px] rounded-[8px] border-[1.5px] border-[#D1D1D1] bg-[#FFFFFF] pt-[30px] pb-[30px]"
      >
        <img
          src={DOWNLOAD_ICON}
          alt=""
          aria-hidden="true"
          className="h-[34px] w-[34px]"
        />
        <div className="flex h-[40px] w-[360px] flex-col gap-[8px]">
          <p
            className="h-[17px] w-[360px] text-center text-[14px] leading-[100%] tracking-[0px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            <span className="text-[#666666]">Drag and drop or </span>
            <span
              className="text-[#281ED2] underline cursor-pointer"
              style={{
                textDecorationStyle: "solid",
                textUnderlineOffset: "25%",
                textDecorationThickness: "0%",
                textDecorationSkipInk: "auto",
              }}
            >
              Upload file
            </span>
          </p>
          <p
            className="h-[15px] w-[360px] text-center text-[12px] leading-[100%] tracking-[0px] text-[#ADADAD]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            JPG, PNG or W ebP
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileUploadAvatarBlock;

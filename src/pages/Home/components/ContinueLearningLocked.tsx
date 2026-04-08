import LOCK from "../../../assets/icons/home/Lock.svg";
import Button from "../../../components/ui/Button";
import { useAuthModal } from "../../../features/auth/hooks/useAuthModal";

const ContinueLearningLocked = () => {
  const { openLoginModal } = useAuthModal();

  return (
    <div className="px-[56px] py-[27px]  rounded-[12px] border border-[#ADADAD] absolute z-2 top-[-7px] left-[547px] w-[418px] h-[233px]  bg-white">
      <div className="w-[306px] h-[179px] flex flex-col items-center">
        <img
          src={LOCK}
          alt="lock icon"
          className="w-[74px] h-[77px] mb-[12px]"
        />
        <p className="mb-[24px] font-[500] text-[16px] leading-[24px] text-[#0A0836]">
          Sign in to track your learning progress
        </p>
        <Button
          text="Log In"
          classname="leading-[24px] text-[16px] p-0 w-[83px] h-[42px]"
          onClick={openLoginModal}
        />
      </div>
    </div>
  );
};

export default ContinueLearningLocked;

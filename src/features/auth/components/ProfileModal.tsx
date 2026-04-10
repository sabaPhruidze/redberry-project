import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import AuthModalShell from "./AuthModalShell";

type ProfileModalProps = {
  onClose?: () => void;
};

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  useLockBodyScroll(true);

  return (
    <AuthModalShell
      onClose={onClose}
      closeAriaLabel="Close profile panel"
      panelClassName="h-[730px]"
      contentClassName="gap-[16px]"
      closeButtonClassName="top-[21px] right-[12px]"
      enableCloseActions={false}
    >
      <header className="flex w-full items-center justify-center">
        <h2
          className="h-[39px] w-[360px] text-center text-[32px] font-semibold leading-[100%] tracking-[0px] text-[#141414]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Profile
        </h2>
      </header>
      <div className="flex w-full flex-col gap-[16px]" />
    </AuthModalShell>
  );
};

export default ProfileModal;

import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import type { RegisteredUser } from "../types/signup";
import AuthModalShell from "./AuthModalShell";
import ProfileIdentityBlock from "./ProfileIdentityBlock";
import ProfileFieldsLayout from "./ProfileFieldsLayout";

type ProfileModalProps = {
  onClose?: () => void;
};

const getStoredAuthUser = (): RegisteredUser | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const rawUser = localStorage.getItem("auth_user");
  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser) as RegisteredUser;
  } catch {
    return null;
  }
};

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  useLockBodyScroll(true);
  const authUser = getStoredAuthUser();
  const username = authUser?.username?.trim() || "Username";
  const avatarUrl = authUser?.avatar?.trim();

  return (
    <AuthModalShell
      onClose={onClose}
      closeAriaLabel="Close profile panel"
      panelClassName="h-[730px]"
      contentClassName="gap-[16px]"
      closeButtonClassName="top-[21px] right-[12px]"
      enableCloseActions={false}
    >
      <header className="flex h-[39px] w-[360px] items-center justify-center">
        <h2
          className="h-[39px] w-[360px] text-center text-[32px] font-semibold leading-[100%] tracking-[0px] text-[#141414]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Profile
        </h2>
      </header>
      <ProfileIdentityBlock username={username} avatarUrl={avatarUrl} />
      <ProfileFieldsLayout />
    </AuthModalShell>
  );
};

export default ProfileModal;

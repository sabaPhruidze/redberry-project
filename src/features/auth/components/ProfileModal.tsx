import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import AuthModalHeader from "./AuthModalHeader";
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
      closeOnOverlayClick
    >
      <AuthModalHeader title="Profile" subtitle="Manage your account" />
    </AuthModalShell>
  );
};

export default ProfileModal;

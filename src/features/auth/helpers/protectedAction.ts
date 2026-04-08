type ProtectedActionParams = {
  isAuthenticated: boolean;
  openLoginModal: () => void;
  action?: () => void;
};

export const runProtectedAction = ({
  isAuthenticated,
  openLoginModal,
  action,
}: ProtectedActionParams) => {
  if (!isAuthenticated) {
    openLoginModal();
    return;
  }

  action?.();
};

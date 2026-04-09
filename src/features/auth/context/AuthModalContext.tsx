import { createContext, useState, type ReactNode } from "react";

type AuthModalContextType = {
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  openLoginModal: () => void;
  openRegisterModal: () => void;
  closeLoginModal: () => void;
  closeRegisterModal: () => void;
  switchToLoginModal: () => void;
  switchToRegisterModal: () => void;
};

const AuthModalContext = createContext<AuthModalContextType | null>(null);

type AuthModalProviderProps = {
  children: ReactNode;
};

export const AuthModalProvider = ({ children }: AuthModalProviderProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const switchToLoginModal = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const switchToRegisterModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <AuthModalContext.Provider
      value={{
        isLoginModalOpen,
        isRegisterModalOpen,
        openLoginModal,
        openRegisterModal,
        closeLoginModal,
        closeRegisterModal,
        switchToLoginModal,
        switchToRegisterModal,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalContext;

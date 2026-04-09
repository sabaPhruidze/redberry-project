import { createContext, useState, type ReactNode } from "react";

type AuthModalContextType = {
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  isEnrolledCoursesModalOpen: boolean;
  isProfileModalOpen: boolean;
  openLoginModal: () => void;
  openRegisterModal: () => void;
  openEnrolledCoursesModal: () => void;
  openProfileModal: () => void;
  closeLoginModal: () => void;
  closeRegisterModal: () => void;
  closeEnrolledCoursesModal: () => void;
  closeProfileModal: () => void;
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
  const [isEnrolledCoursesModalOpen, setIsEnrolledCoursesModalOpen] =
    useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsEnrolledCoursesModalOpen(false);
    setIsProfileModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const openRegisterModal = () => {
    setIsEnrolledCoursesModalOpen(false);
    setIsProfileModalOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const openEnrolledCoursesModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsProfileModalOpen(false);
    setIsEnrolledCoursesModalOpen(true);
  };

  const openProfileModal = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsEnrolledCoursesModalOpen(false);
    setIsProfileModalOpen(true);
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const closeEnrolledCoursesModal = () => setIsEnrolledCoursesModalOpen(false);
  const closeProfileModal = () => setIsProfileModalOpen(false);
  const switchToLoginModal = () => {
    setIsEnrolledCoursesModalOpen(false);
    setIsProfileModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const switchToRegisterModal = () => {
    setIsEnrolledCoursesModalOpen(false);
    setIsProfileModalOpen(false);
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <AuthModalContext.Provider
      value={{
        isLoginModalOpen,
        isRegisterModalOpen,
        isEnrolledCoursesModalOpen,
        isProfileModalOpen,
        openLoginModal,
        openRegisterModal,
        openEnrolledCoursesModal,
        openProfileModal,
        closeLoginModal,
        closeRegisterModal,
        closeEnrolledCoursesModal,
        closeProfileModal,
        switchToLoginModal,
        switchToRegisterModal,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalContext;

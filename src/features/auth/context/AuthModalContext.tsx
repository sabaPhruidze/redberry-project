import { createContext, useState, type ReactNode } from "react";

type AuthModalContextType = {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
};

const AuthModalContext = createContext<AuthModalContextType | null>(null);

type AuthModalProviderProps = {
  children: ReactNode;
};

export const AuthModalProvider = ({ children }: AuthModalProviderProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthModalContext.Provider
      value={{ isLoginModalOpen, openLoginModal, closeLoginModal }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalContext;

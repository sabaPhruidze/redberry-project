import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

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

type AuthModalKey = "login" | "register" | "enrolledCourses" | "profile";

type AuthModalState = {
  activeModal: AuthModalKey | null;
};

type AuthModalAction =
  | {
      type: "OPEN_MODAL";
      modal: AuthModalKey;
    }
  | {
      type: "CLOSE_MODAL";
      modal: AuthModalKey;
    };

const initialAuthModalState: AuthModalState = {
  activeModal: null,
};

const authModalReducer = (
  state: AuthModalState,
  action: AuthModalAction,
): AuthModalState => {
  if (action.type === "OPEN_MODAL") {
    if (state.activeModal === action.modal) {
      return state;
    }

    return { activeModal: action.modal };
  }

  if (state.activeModal !== action.modal) {
    return state;
  }

  return { activeModal: null };
};

export const AuthModalProvider = ({ children }: AuthModalProviderProps) => {
  const [state, dispatch] = useReducer(authModalReducer, initialAuthModalState);

  const openModal = useCallback((modal: AuthModalKey) => {
    dispatch({ type: "OPEN_MODAL", modal });
  }, []);

  const closeModal = useCallback((modal: AuthModalKey) => {
    dispatch({ type: "CLOSE_MODAL", modal });
  }, []);

  const openLoginModal = useCallback(() => openModal("login"), [openModal]);
  const openRegisterModal = useCallback(
    () => openModal("register"),
    [openModal],
  );
  const openEnrolledCoursesModal = useCallback(
    () => openModal("enrolledCourses"),
    [openModal],
  );
  const openProfileModal = useCallback(() => openModal("profile"), [openModal]);

  const closeLoginModal = useCallback(
    () => closeModal("login"),
    [closeModal],
  );
  const closeRegisterModal = useCallback(
    () => closeModal("register"),
    [closeModal],
  );
  const closeEnrolledCoursesModal = useCallback(
    () => closeModal("enrolledCourses"),
    [closeModal],
  );
  const closeProfileModal = useCallback(
    () => closeModal("profile"),
    [closeModal],
  );

  const switchToLoginModal = openLoginModal;
  const switchToRegisterModal = openRegisterModal;

  const isLoginModalOpen = state.activeModal === "login";
  const isRegisterModalOpen = state.activeModal === "register";
  const isEnrolledCoursesModalOpen = state.activeModal === "enrolledCourses";
  const isProfileModalOpen = state.activeModal === "profile";

  const contextValue = useMemo<AuthModalContextType>(
    () => ({
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
    }),
    [
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
    ],
  );

  return (
    <AuthModalContext.Provider value={contextValue}>
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalContext;

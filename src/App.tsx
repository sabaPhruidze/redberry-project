import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/shared/Loader";
import LoginModal from "./features/auth/components/LoginModal";
import RegisterModal from "./features/auth/components/RegisterModal";
import EnrolledCoursesModal from "./features/auth/components/EnrolledCoursesModal";
import ProfileModal from "./features/auth/components/ProfileModal";
import { AuthModalProvider } from "./features/auth/context/AuthModalContext";
import { useAuthModal } from "./features/auth/hooks/useAuthModal";

const HomePage = lazy(() => import("./pages/Home/HomePage"));

const AppContent = () => {
  const {
    isLoginModalOpen,
    isRegisterModalOpen,
    isEnrolledCoursesModalOpen,
    isProfileModalOpen,
    closeLoginModal,
    closeRegisterModal,
    closeEnrolledCoursesModal,
    closeProfileModal,
  } = useAuthModal();

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses/catalog" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      {isEnrolledCoursesModalOpen && (
        <EnrolledCoursesModal onClose={closeEnrolledCoursesModal} />
      )}
      {isProfileModalOpen && <ProfileModal onClose={closeProfileModal} />}
    </>
  );
};

function App() {
  return (
    <AuthModalProvider>
      <AppContent />
    </AuthModalProvider>
  );
}

export default App;

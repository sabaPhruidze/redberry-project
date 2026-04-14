import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/shared/Loader";
import LoginModal from "./features/auth/components/LoginModal";
import RegisterModal from "./features/auth/components/RegisterModal";
import EnrolledCoursesModal from "./features/auth/components/EnrolledCoursesModal";
import ProfileModal from "./features/auth/components/ProfileModal";
import { AuthModalProvider } from "./features/auth/context/AuthModalContext";
import { useAuthModal } from "./features/auth/hooks/useAuthModal";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CoursesCatalogPage = lazy(
  () => import("./pages/Courses/CoursesCatalogPage"),
);
const CourseDetailPage = lazy(() => import("./pages/Courses/CourseDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const AppContent = () => {
  // Keeps auth modal open/close triggers intact while enabling enrolled sidebar exit animation.
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
            <Route path="/courses/catalog" element={<CoursesCatalogPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      <AnimatePresence>
        {isEnrolledCoursesModalOpen ? (
          <EnrolledCoursesModal onClose={closeEnrolledCoursesModal} />
        ) : null}
      </AnimatePresence>
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

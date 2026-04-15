import { useNavigate } from "react-router-dom";
import { useProtectedAction } from "../../../features/auth/hooks/useProtectedAction";
import { useAuthModal } from "../../../features/auth/hooks/useAuthModal";
import FooterBottomBar from "./FooterBottomBar";
import FooterBrand from "./FooterBrand";
import FooterLinksColumns from "./FooterLinksColumns";

const Footer = () => {
  const navigate = useNavigate();
  const { handleProtectedAction } = useProtectedAction();
  const { openEnrolledCoursesModal, openProfileModal } = useAuthModal();

  const handleFooterLinkClick = (link: string) => {
    if (link === "Browse Courses") {
      navigate("/courses/catalog");
      return;
    }

    if (link === "Enrolled Courses") {
      handleProtectedAction(openEnrolledCoursesModal);
      return;
    }

    if (link === "My Profile") {
      handleProtectedAction(openProfileModal);
    }
  };

  return (
    <footer className="w-full h-[334px] border-t border-t-redberry-border-gray">
      <div className="w-full h-full px-[167px]">
        <div className="mb-[74px] flex h-[218px] w-full flex-row justify-between pt-[80px]">
          <FooterBrand />
          <FooterLinksColumns onLinkClick={handleFooterLinkClick} />
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
};

export default Footer;

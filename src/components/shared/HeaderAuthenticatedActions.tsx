import { Link } from "react-router-dom";
import STAR3 from "../../assets/icons/header/three_star.svg";
import OPENED_BOOK from "../../assets/icons/header/opened_book.svg";
import AVATAR_ICON from "../../assets/icons/header/Avatar.svg";
import ProfileCompletionIndicator from "../../features/profile/components/ProfileCompletionIndicator";

type HeaderAuthenticatedActionsProps = {
  isProfileComplete: boolean;
  onProfileClick: () => void;
  onEnrolledCoursesClick: () => void;
};

const HeaderAuthenticatedActions = ({
  isProfileComplete,
  onProfileClick,
  onEnrolledCoursesClick,
}: HeaderAuthenticatedActionsProps) => {
  return (
    <div className="flex w-[547px] h-[56px] items-center gap-[36px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex w-[447px] h-[56px] items-center gap-[8px]">
        <Link to="/courses/catalog" className="flex h-[56px] w-[220px] items-center gap-[8px] rounded-[8px] p-[15px]">
          <span className="flex h-[26px] w-[190px] items-center gap-[8px]">
            <img src={STAR3} alt="3 stars" className="w-[26px] h-[26px]" />
            <p className="h-[24px] w-[156px] font-[500] text-[20px] leading-[100%] text-redberry-text-gray-light">
              Browse Courses
            </p>
          </span>
        </Link>
        <button
          type="button"
          onClick={onEnrolledCoursesClick}
          className="flex h-[56px] w-[227px] items-center gap-[8px] rounded-[8px] p-[15px]"
        >
          <span className="flex h-[26px] w-[197px] items-center gap-[8px]">
            <img src={OPENED_BOOK} alt="opened book" className="h-[26px] w-[26px]" />
            <span className="h-[24px] w-[163px] text-left font-[500] text-[20px] leading-[100%] text-redberry-text-gray-light">
              Enrolled Courses
            </span>
          </span>
        </button>
      </div>
      <button type="button" onClick={onProfileClick} className="relative h-[56px] w-[56px] rounded-full bg-[#EEEDFC]">
        <img src={AVATAR_ICON} alt="avatar icon" className="h-[56px] w-[56px]" />
        <ProfileCompletionIndicator isComplete={isProfileComplete} />
      </button>
    </div>
  );
};

export default HeaderAuthenticatedActions;

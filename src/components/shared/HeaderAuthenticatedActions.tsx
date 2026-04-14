import { Link, useLocation } from "react-router-dom";
import STAR3 from "../../assets/icons/header/three_star.svg?react";
import OPENED_BOOK from "../../assets/icons/header/opened_book.svg";
import UserAvatar from "../../features/auth/components/profile/avatar/UserAvatar";
import type { ProfileStatus } from "../../features/auth/helpers/profileStatus";

type HeaderAuthenticatedActionsProps = {
  isProfileComplete: boolean;
  username: string;
  avatarUrl?: string;
  onProfileClick: () => void;
  onEnrolledCoursesClick: () => void;
};

const HeaderAuthenticatedActions = ({
  isProfileComplete,
  username,
  avatarUrl,
  onProfileClick,
  onEnrolledCoursesClick,
}: HeaderAuthenticatedActionsProps) => {
  const { pathname } = useLocation();
  const isCatalogPage = pathname === "/courses/catalog";
  const profileStatus: ProfileStatus = isProfileComplete
    ? "complete"
    : "incomplete";

  return (
    <div className="flex w-[547px] h-[56px] items-center gap-[36px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex w-[447px] h-[56px] items-center gap-[8px]">
        <Link to="/courses/catalog" className="flex h-[56px] w-[220px] items-center gap-[8px] rounded-[8px] p-[15px]">
          <span className="flex h-[26px] w-[190px] items-center gap-[8px]">
            <STAR3
              aria-hidden
              className={`w-[26px] h-[26px] [&_path]:stroke-current ${
                isCatalogPage ? "text-[#4F46E5]" : "text-[#525252]"
              }`}
            />
            <p
              className={`h-[24px] w-[156px] font-[500] text-[20px] leading-[100%] ${
                isCatalogPage ? "text-[#4F46E5]" : "text-redberry-text-gray-light"
              }`}
            >
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
      <button type="button" onClick={onProfileClick} className="h-[56px] w-[56px]">
        <UserAvatar
          avatarUrl={avatarUrl}
          username={username}
          status={profileStatus}
        />
      </button>
    </div>
  );
};

export default HeaderAuthenticatedActions;

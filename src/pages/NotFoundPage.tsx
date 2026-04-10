import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] py-[80px]">
        <div className="max-w-[780px] rounded-[12px] border border-[#E7E7E7] bg-white p-[24px]">
          <h1 className="text-[32px] font-semibold text-[#141414]">Page not found</h1>
          <p className="mt-[10px] text-[16px] text-[#666666]">
            The page you are looking for does not exist.
          </p>
          <Link
            to="/courses/catalog"
            className="mt-[16px] inline-block text-[16px] text-[#4F46E5] underline"
          >
            Go to courses catalog
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;

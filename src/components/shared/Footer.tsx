import { useProtectedAction } from "../../features/auth/hooks/useProtectedAction";
import FooterBottomBar from "./FooterBottomBar";
import FooterBrand from "./FooterBrand";
import FooterLinksColumns from "./FooterLinksColumns";

const Footer = () => {
  const { handleProtectedAction } = useProtectedAction();

  return (
    <footer className="w-full h-[334px] border-t border-t-redberry-border-gray">
      <div className="w-full px-[167px] h-full">
        <div className="w-full pt-[80px] h-[218px] flex flex-row justify-between mb-[74px]">
          <FooterBrand />
          <FooterLinksColumns
            onProtectedAction={() => handleProtectedAction()}
          />
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
};

export default Footer;

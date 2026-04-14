import { FOOTER_SECTIONS } from "./footer.data";

type FooterLinksColumnsProps = {
  onProtectedAction: () => void;
};

const isProtectedFooterLink = (link: string) =>
  link === "Enrolled Courses" || link === "My Profile";

const FooterLinksColumns = ({ onProtectedAction }: FooterLinksColumnsProps) => {
  return (
    <div className="w-[700px] h-[130px] flex flex-row justify-between">
      {FOOTER_SECTIONS.map((section) => (
        <div key={section.id}>
          <h3 className="mb-[16px] font-[600] text-[20px] leading-[24px] text-[#130E67]">
            {section.title}
          </h3>
          <div className="flex flex-col gap-[6px]">
            {section.link.map((link, index) => (
              <div key={`${section.id}-${link}`} className="w-full flex items-center gap-[8px]">
                {section.icons?.[index] && (
                  <img
                    src={section.icons[index].img}
                    alt={section.icons[index].alt}
                    className={section.icons[index].classname}
                  />
                )}
                {isProtectedFooterLink(link) ? (
                  <button
                    type="button"
                    onClick={onProtectedAction}
                    className="w-full text-left font-[400] text-[18px] leading-[100%] text-[#666666]"
                  >
                    {link}
                  </button>
                ) : (
                  <p className="w-full block font-[400] text-[18px] leading-[100%] text-[#666666]">
                    {link}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinksColumns;

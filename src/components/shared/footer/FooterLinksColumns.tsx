import { FOOTER_SECTIONS } from "./footer.data";

type FooterLinksColumnsProps = {
  onLinkClick: (link: string) => void;
};

const isActionFooterLink = (link: string) =>
  link === "Enrolled Courses" ||
  link === "Browse Courses" ||
  link === "My Profile";

const FooterLinksColumns = ({ onLinkClick }: FooterLinksColumnsProps) => {
  return (
    <div className="flex h-[130px] w-[700px] flex-row justify-between">
      {FOOTER_SECTIONS.map((section) => (
        <div key={section.id}>
          <h3 className="mb-[16px] text-[20px] leading-[24px] font-[600] text-[#130E67]">
            {section.title}
          </h3>

          <div className="flex flex-col gap-[6px]">
            {section.link.map((link, index) => (
              <div
                key={`${section.id}-${link}`}
                className="flex w-full items-center gap-[8px]"
              >
                {section.icons?.[index] && (
                  <img
                    src={section.icons[index].img}
                    alt={section.icons[index].alt}
                    className={section.icons[index].classname}
                  />
                )}

                {isActionFooterLink(link) ? (
                  <button
                    type="button"
                    onClick={() => onLinkClick(link)}
                    className="w-full text-left text-[18px] leading-[100%] font-[400] text-[#666666]"
                  >
                    {link}
                  </button>
                ) : (
                  <p className="w-full text-[18px] leading-[100%] font-[400] text-[#666666]">
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

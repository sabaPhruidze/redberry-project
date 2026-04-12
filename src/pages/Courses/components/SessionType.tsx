import THREE from "../../../assets/icons/courses/Icon Set=Three.svg";
import DESKTOP from "../../../assets/icons/courses/Icon Set=Desktop.svg";
import USERS from "../../../assets/icons/courses/Icon Set=Users.svg";
import HYBRID from "../../../assets/icons/courses/Icon Set=Intersect.svg";
import ARROW_DOWN from "../../../assets/icons/courses/glyphs_arrow-bold.svg?react";
import LOCATION from "../../../assets/icons/courses/location.svg";
import WARNING from "../../../assets/icons/courses/warning.svg";

const SessionType = () => {
  const data = [
    {
      id: 1,
      icon: DESKTOP,
      title: "Online",
      description: "Google Meet",
      additional: "Included",
      remaining: "50 Seats Available",
    },
    {
      id: 2,
      icon: USERS,
      title: "In-Person",
      description: "Chavchavadze St.34",
      additional: "+ $30",
      remaining: "Only 3 Seats Remaining",
    },
    {
      id: 3,
      icon: HYBRID,
      title: "Hybrid",
      description: "Chavchavadze St.34",
      additional: "+ $50",
      remaining: "130 Seats Available",
    },
  ];
  return (
    <div className="w-full h-[202px] flex flex-col gap-[18px]">
      <div className="w-full h-[30px] flex flex-row justify-between items-center">
        <img src={THREE} alt="one icon" className="w-[28px] h-[28px]" />
        <div className="w-[457px] h-[30px] ml-[8px] mr-[7px] text-left">
          <h2 className="text-[#130E67] font-[600] text-[24px] leading-[100%]">
            Session Type
          </h2>
        </div>
        <ARROW_DOWN
          aria-hidden
          className="w-[28px] h-[28px] [&_path]:stroke-current text-[#130E67]"
        />
      </div>
      <div className="w-full h-[155px] flex flex-row gap-[8px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[171.3px] h-[154px] flex flex-col gap-[8px]"
          >
            <div
              key={item.id}
              className="text-center  w-full h-[131px] rounded-[12px] border border-[#D1D1D1] bg-[white] px-[20px] py-[15px] flex flex-col items-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[26px] h-[26px]"
              />
              <h3 className="my-[6px] w-[131.33px] h-[19px] font-[600] leading-[100%] text-[#525252]">
                {item.title}
              </h3>
              <div className="w-[131.3px] h-[15px] text-[#525252] font-[400] text-[12px] leading-[100%] flex flex-row justify-evenly items-center">
                {item.description === "Chavchavadze St.34" && (
                  <img
                    src={LOCATION}
                    alt="location icon"
                    className="w-[12px] h-[12px]"
                  />
                )}

                <p>{item.description}</p>
              </div>
              <p className="mt-[12px] text-[#736BEA] text-[14px] font-[500] leading-[100%]">
                {item.additional}
              </p>
            </div>
            <div className="text-center  font-[500] text-[12px] leading-[100%] text-[12px]">
              {item.remaining === "Only 3 Seats Remaining" ? (
                <div className="flex flex-row h-[15px] items-center justify-center gap-[4px]">
                  <img
                    src={WARNING}
                    alt="warning icon"
                    className="w-[16px] h-[16px]"
                  />
                  <p className="text-[#F4A316]">{item.remaining}</p>
                </div>
              ) : (
                <p className="text-[#3D3D3D]">{item.remaining}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionType;

// Renders static instructor chips and prepares instructor query integration.
// Fetched values are logged for the first catalog connection step only.
import INSTRUCTOR from "../../../assets/images/catalog/instructor.jpg";
import useInstructors from "../../../api/hooks/useInstructors";

const Instructor = () => {
  const instructorsQuery = useInstructors();

  console.log("Instructors filter query:", {
    data: instructorsQuery.data,
    isLoading: instructorsQuery.isLoading,
    error: instructorsQuery.error,
  });

  const INSTRUCTORS = [
    {
      id: 1,
      img: INSTRUCTOR,
      name: "Marilyn Mango",
    },
    {
      id: 2,
      img: INSTRUCTOR,
      name: "Ryan Dorwart",
    },
    {
      id: 3,
      img: INSTRUCTOR,
      name: "Roger Calzoni",
    },
    {
      id: 4,
      img: INSTRUCTOR,
      name: "Zain Philips",
    },
  ];
  return (
    <div className="w-[179px] h-[254px] mt-[56px] gap-[24px] flex flex-col">
      <h3 className="text-[#666666] font-[500] text-[18px] leading-[100%] w-[179px] h-[22px]">
        Instructor
      </h3>
      <div className="flex flex-col w-[179px] h-[208px] gap-[8px]">
        {INSTRUCTORS.map((item) => (
          <div
            key={item.id}
            className=" px-[12px] py-[8px] gap-[10px] flex flex-row bg-white rounded-[12px]"
          >
            <img
              src={item.img}
              alt={`${item.name} icon`}
              className="w-[24px] h-[24px]"
            />
            <h4 className="text-[#666666] font-[500] leading-[24px]">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
      <div className="border-t-[#ADADAD] border-t w-full h-[36px] ">
        <div className="mt-[16px] w-full h-[20px]">
          <p className="text-[#999999] font-[500] leading-[100%] text-[14px]">
            0 Filters Active
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

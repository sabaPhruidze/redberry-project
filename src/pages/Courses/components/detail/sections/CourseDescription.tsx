interface CourseDescriptionProps {
  description: string;
}

const CourseDescription = ({ description }: CourseDescriptionProps) => {
  const paragraphs = description
    .split(/\r?\n\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const content = paragraphs.length ? paragraphs : [description];

  return (
    <div className="w-full">
      <h2 className="mb-[24px] font-[600] text-[20px] leading-[24px] text-[#8A8A8A]">
        Course Description
      </h2>
      {content.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph.slice(0, 16)}`}
          className={`font-[500] leading-[24px] text-[#525252] ${index > 0 ? "mt-[24px]" : ""}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default CourseDescription;

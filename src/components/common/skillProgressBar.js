// components/SkillProgressBar.js

const SkillProgressBar = ({ skillName, percentage }) => {
  return (
    <div className="flex flex-col md:flex-row md:m-4 items-center md:items-start mb-4">
      <div className="w-full md:w-1/3 md:pr-4 -mt-[7px] text-center md:text-right md:mb-0 text-[#FFF] text-xl font-semibold">
        <span className="text-sm font-semibold">{skillName}</span>
        <span className="progressBarShow"></span>
      </div>
      <div className="w-full md:w-1/2 h-3 relative bg-[#43366A] mt-[5px] rounded-full mb md:mb-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-3  bg-[#F86F03] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="ml-4 text-sm md:w-1/3 font-semibold text-[#FFF] progressBar">
        {percentage}%
      </span>
    </div>
  );
};

export default SkillProgressBar;

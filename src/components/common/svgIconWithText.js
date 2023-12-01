const SvgIconWithText = ({ icon, number, link }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-8 h-8 mr-2">
        {/* Replace 'icon' with your SVG component */}
        {number === "Safiur rahaman" || number === "safiur799" ? (
          <a href={link} target="_blank">
            <img src={icon} className="cursor-pointer h-8 w-8 " />
          </a>
        ) : (
          <img src={icon} />
        )}
      </div>
      {number === "Safiur rahaman" || number === "safiur799" ? (
        <a href={link} target="_blank">
          <span className="text-base sm:text-lg pb-2  font-semibold underline">
            {number}
          </span>
        </a>
      ) : (
        <span className="text-base sm:text-lg pb-2  font-semibold">
          {number}
        </span>
      )}
    </div>
  );
};

export default SvgIconWithText;

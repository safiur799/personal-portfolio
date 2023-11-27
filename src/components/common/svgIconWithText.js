const SvgIconWithText = ({ icon, number }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-8 h-8 mr-2">
        {/* Replace 'icon' with your SVG component */}
        <img src={icon} />
      </div>
      <span className="text-base sm:text-lg pb-2  font-semibold">{number}</span>
    </div>
  );
};

export default SvgIconWithText;

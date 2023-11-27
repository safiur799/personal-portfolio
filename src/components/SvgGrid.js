// components/SvgGrid.js
import React from "react";

const SvgGrid = ({ svgs }) => {
  return (
    <div className="flex space-x-4 aboutSectioin svgGridSection">
      {svgs.map((svgContent, index) => (
        <div
          key={index}
          className=" p-2 border border-white rounded-full"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ))}
    </div>
  );
};

export default SvgGrid;

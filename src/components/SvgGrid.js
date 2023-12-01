// components/SvgGrid.js
import React from "react";

const SvgGrid = ({ svgs, socilaLink }) => {
  return (
    <div className="flex space-x-4 aboutSectioin svgGridSection">
      {svgs.map((svgContent, index) => (
        <a href={socilaLink[index]} key={index} download target="_blank">
          <div
            className=" p-2 border border-white rounded-full"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        </a>
      ))}
    </div>
  );
};

export default SvgGrid;

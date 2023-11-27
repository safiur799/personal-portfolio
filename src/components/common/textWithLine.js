// components/TextWithLine.js
import React from "react";

const TextWithLine = ({ text }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <p className="text-2xl font-bold text-[#FFF]">{text}</p>
      <div
        className="w-full  h-1 bg-[#D9D9D9] my-1"
        style={{ maxWidth: "10rem" }}
      ></div>
    </div>
  );
};

export default TextWithLine;

// components/AnimatedButton.js
import React from "react";

const AnimatedButton = ({ text }) => {
  return (
    <div className="mt-4">
      <a href="/Safiur_Rahaman_fw10_210.pdf" download target="_blank">
        <button className="bg-[#F86F03] hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
          {text}
        </button>
      </a>
    </div>
  );
};

export default AnimatedButton;

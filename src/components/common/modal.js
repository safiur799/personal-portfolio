import { useState } from "react";
import Image from "next/image";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10  flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 sm:p-8 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl rounded-lg relative">
        <button
          className="absolute top-2 right-2 bg-[#F86F03] hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          {project.title}
        </h2>
        <div className="aspect-w-16 aspect-h-9 mb-4 relative">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover rounded-lg"
            style={{ width: "100%", height: "70%" }}
          />
        </div>
        <p className="text-sm sm:text-base md:text-lg mb-4 text-black">
          {project.description}
        </p>
        <div className="flex space-x-4 mb-4">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F86F03] hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Source Code
            </a>
          )}
          {project.deployLink && (
            <a
              href={project.deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Deploy Link
            </a>
          )}
        </div>
        <div className="flex items-center">
          <h3 className="text-lg font-semibold  text-black">
            Technologies Used:
          </h3>
          <span className="text-sm sm:text-base text-black pl-2">
            {project.technologies}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { useState } from "react";
import Image from "next/image";
import Modal from "./common/modal";
import projectsData from "../data/projectsData";
import TextWithLine from "./common/textWithLine";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className="bg-[#170550] items-center flex-col space-y-8 pt-4 px-8 pb-16"
      id="projects"
    >
      <TextWithLine text="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="border p-4 cursor-pointer rounded"
            onClick={() => openModal(project)}
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <div className="aspect-w-16 aspect-h-9 mb-4 relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover rounded-lg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-sm">{project.description}</p>
            <div className="flex space-x-4 mb-4 mt-4">
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
              <h3 className="text-lg font-semibold  text-[#F86F03]">
                Technologies Used:
              </h3>
              <span className="text-sm sm:text-base  pl-2 text-white">
                {project.technologies}
              </span>
            </div>
          </div>
        ))}
        <Modal
          isOpen={!!selectedProject}
          onClose={closeModal}
          project={selectedProject || {}}
        />
      </div>
    </div>
  );
};

export default Projects;

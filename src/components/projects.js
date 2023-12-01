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

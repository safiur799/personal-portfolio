import React from "react";
import SkillProgressBar from "./common/skillProgressBar";
import TextWithLine from "./common/textWithLine";

function Skills() {
  const data = [
    {
      skillName: "Next Js",
      percentage: "85",
    },
    {
      skillName: "React Js",
      percentage: "85",
    },
    {
      skillName: "Javascript",
      percentage: "100",
    },
    {
      skillName: "Tailwind Css",
      percentage: "80",
    },

    {
      skillName: "Css",
      percentage: "80",
    },
    {
      skillName: "HTML",
      percentage: "100",
    },
    {
      skillName: "Node Js",
      percentage: "80",
    },
    {
      skillName: "Graphql",
      percentage: "80",
    },
  ];

  const toolStack = [
    {
      skillName: "Git",
      percentage: "90",
    },
    {
      skillName: "Github",
      percentage: "100",
    },
    {
      skillName: "PostMan",
      percentage: "80",
    },
    {
      skillName: "Slack",
      percentage: "98",
    },
    {
      skillName: "Jira",
      percentage: "90",
    },
  ];
  return (
    <div className=" bg-[#31065A] pt-4 pb-4" id="skills">
      <TextWithLine text="Skills" />

      <div className="md:pt-10 pt-8">
        <div className="text-center flex flex-col items-center">
          <p className="text-xl  font-semibold text-[#F86F03]">Tech Stack</p>
          <div
            className="w-full  h-1 bg-[#D9D9D9] my-1"
            style={{ maxWidth: "8rem" }}
          ></div>
        </div>
      </div>
      <div className="py-4 px-10">
        {data.map((skills, index) => {
          return (
            <div key={index}>
              <SkillProgressBar
                skillName={skills.skillName}
                percentage={skills.percentage}
              />
            </div>
          );
        })}
      </div>
      <div className="md:pt-2">
        <div className="text-center flex flex-col items-center">
          <p className="text-xl  font-semibold text-[#F86F03]">Tool Stack</p>
          <div
            className="w-full  h-1 bg-[#D9D9D9] my-1"
            style={{ maxWidth: "8rem" }}
          ></div>
        </div>
      </div>
      <div className="p-4 ">
        {toolStack.map((skills, index) => {
          return (
            <div key={index}>
              <SkillProgressBar
                skillName={skills.skillName}
                percentage={skills.percentage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import SkillProgressBar from "./common/skillProgressBar";
import TextWithLine from "./common/textWithLine";

function Skills() {
  const data = [
    {
      skillName: "Next Js",
      percentage: "75",
    },
    {
      skillName: "React Js",
      percentage: "85",
    },
    {
      skillName: "Javascript",
      percentage: "95",
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
      percentage: "65",
    },
    {
      skillName: "Github",
      percentage: "80",
    },
  ];
  return (
    <div className=" bg-[#31065A] pt-4" id="skills">
      <TextWithLine text="Skills" />
      {/* <SkillProgressBar skillName="Javascript" percentage="75" /> */}
      {/* <SkillProgressBar skillName="Javascript" percentage="75" /> */}
      <div className="p-10">
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
    </div>
  );
}

export default Skills;

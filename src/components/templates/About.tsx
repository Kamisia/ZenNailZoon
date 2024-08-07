import React from "react";
import SectionTitleComponent from "../molecules/SectionTitleComponent";
import AboutMeComponent from "../molecules/AboutMeComponent";
import { employer } from "../../data";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className=" w-screen max-w-screen-lg mb-5 justify-center pr-3 pl-3"
    >
      <SectionTitleComponent text={"Who we are"} />
      <div className="flex flex-col md:flex-row  gap-2 w-screen max-w-screen-lg  justify-center mr-auto ml-auto p-0">
        {employer.map((employ) => {
          const { id, imageUrl, text, title } = employ;
          return (
            <AboutMeComponent
              title={title}
              text={text}
              image={imageUrl}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;

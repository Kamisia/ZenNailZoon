import React from "react";
import SectionTitleComponent from "../components/SectionTitleComponent";
import AboutMeComponent from "../components/AboutMeComponent";
import { employer } from "../data";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className=" w-screen max-w-screen-lg mb-5 justify-center pr-3 pl-3"
    >
      <SectionTitleComponent text={"Who we are"} />
      <div className="flex flex-col md:flex-row w-5/6 gap-4 md:gap-2 justify-center m-auto">
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

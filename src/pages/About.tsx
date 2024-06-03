import React from "react";
import SectionTitleComponent from "../components/SectionTitleComponent";
import AboutMeComponent from "../components/AboutMeComponent";
import { employer } from "../data";

const About: React.FC = () => {
  return (
    <div id="about" className="w-screen max-w-screen-lg mb-5">
      <SectionTitleComponent text={"Who we are"} />
      <div className="flex flex-row justify-center ">
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

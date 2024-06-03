import React from "react";

import SectionTitleComponent from "../components/SectionTitleComponent";
import InfoCard from "../components/InfoCard";
import CarouselComponent from "../components/CarouselComponent";
const OurService: React.FC = () => {
  return (
    <div id="ourservice" className="w-screen max-w-screen-lg mb-5">
      <SectionTitleComponent text={"Our Service"} />
      <article className="w-screen max-w-screen-lg p-10">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, veniam
        minima? Dignissimos magnam quis doloremque error! Quisquam molestiae,
        at, quo et magnam, sit ab repellat ea saepe vel exercitationem nostrum?
      </article>
      <InfoCard />
      <InfoCard />
      <InfoCard />

      <div className="w-3/4 justify-center m-auto">
        <h1 className=" pb-2 m-auto text-center text-2xl text-rose-700 capitalize font-light italic mb-2">
          Title
        </h1>
        <CarouselComponent />
      </div>
    </div>
  );
};

export default OurService;

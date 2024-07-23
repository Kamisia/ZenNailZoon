import React from "react";
import { services } from "../data";
import SectionTitleComponent from "../components/SectionTitleComponent";
import InfoCard from "../components/InfoCard";
import CarouselComponent from "../components/CarouselComponent";

const OurService: React.FC = () => {
  return (
    <div
      id="ourservice"
      className="w-screen max-w-screen-lg mb-5 justify-center pr-3 pl-3 "
    >
      <SectionTitleComponent text={"How we work"} />
      <article className=" max-w-screen-lg mb-5">
        Experience the art of exquisite nail styling at our salon, where
        precision and creativity blend seamlessly. Our expert technicians use
        the highest quality products to ensure your nails not only look stunning
        but also stay healthy. Discover a new level of pampering and book your
        appointment today!
      </article>
      <div className="flex flex-col justify-center ">
        {services.map((service) => {
          const { id, imageUrl, text, title } = service;
          return (
            <InfoCard title={title} text={text} image={imageUrl} key={id} />
          );
        })}
      </div>

      <div className="w-screen max-w-screen-lg  mb-5 justify-center ">
        <h1 className=" pb-2 m-auto text-center text-2xl text-rose-700 capitalize font-light italic mb-2">
          Our nail styling
        </h1>
        <CarouselComponent />
      </div>
    </div>
  );
};

export default OurService;

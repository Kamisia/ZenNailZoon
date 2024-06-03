import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { portfolioImg } from "../data";
import ImageComponent from "./ImageComponent";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      centerMode={true}
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows={true}
      autoPlay
    >
      {portfolioImg.map((portfolio) => {
        const { id, imageUrl } = portfolio;

        return <ImageComponent url={imageUrl} />;
      })}
    </Carousel>
  );
};

export default CarouselComponent;

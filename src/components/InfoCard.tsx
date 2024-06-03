import React from "react";
import ImageComponent from "./ImageComponent";
import image from "../assets/pattern.jpg";
const InfoCard: React.FC = () => {
  return (
    <div className="w-10/11 p-4 rounded-lg ">
      <div className="flex flex-row content-center gap-2 m-auto justify-center ">
        <article className="m-auto ">
          <h1 className=" pb-2 m-auto text-center text-2xl text-rose-700 capitalize font-light italic">
            Title
          </h1>
          <hr className="border-rose-300 w-4/6  ml-auto mr-0" />
          <p className="pb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit
            enim neque esse autem tempora? Facilis officia inventore nam animi?
          </p>
        </article>
        <div className="bg-rose-300 w-3/5 pb-1 pr-1 rounded-lg">
          <ImageComponent url={image} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

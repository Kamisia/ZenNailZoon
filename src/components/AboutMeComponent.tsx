import React from "react";
export interface AboutMeComponentProps {
  text: string;
  title: string;
  image: string;
}
const AboutMeComponent: React.FC<AboutMeComponentProps> = ({
  text,
  title,
  image,
}) => {
  return (
    <div className="flex flex-col gap-6 w-2/6 m-2 p-4 rounded-lg  bg-rose-200">
      <div className=" flex justify-center">
        <h1 className="text-xl ">{title}</h1>
      </div>
      <div className=" flex justify-center">
        <img className="w-80  rounded-lg" src={image} />
      </div>
      <article>{text}</article>
    </div>
  );
};

export default AboutMeComponent;

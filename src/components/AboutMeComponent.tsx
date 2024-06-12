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
    <div className="flex flex-col w-full md:w-1/2  m-auto  p-5  rounded-lg  bg-rose-200">
      <div className=" flex justify-center">
        <h1 className="text-xl mb-5">{title}</h1>
      </div>
      <div className=" flex justify-center mb-3">
        <img className="w-80  rounded-lg" src={image} />
      </div>
      <article>{text}</article>
    </div>
  );
};

export default AboutMeComponent;

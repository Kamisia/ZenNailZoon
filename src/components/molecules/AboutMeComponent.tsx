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
    <div className="flex flex-col sm:max-w-fit md:w-1/2  m-0  p-0 md:mr-3 rounded-lg  bg-rose-200">
      <div className=" flex justify-center p-3">
        <h1 className="text-xl mb-5 p-3">{title}</h1>
      </div>
      <div className=" flex justify-center mb-3 p-3">
        <img className="w-80  rounded-lg" src={image} />
      </div>
      <article className="p-3">{text}</article>
    </div>
  );
};

export default AboutMeComponent;

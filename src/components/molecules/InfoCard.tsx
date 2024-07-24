import React from "react";

export interface InfoCardProps {
  title: string;
  text: string;
  image: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ title, text, image }) => {
  return (
    <div
      data-testid="info-card-container"
      className=" w-screen max-w-screen-lg mb-5 justify-center pr-3 pl-3"
    >
      <div className="flex flex-row content-center justify-center">
        <article className="max-w-screen-lg w-11/12 mb-5 ">
          <h1 className=" pb-2 m-auto text-center text-2xl text-rose-700 capitalize font-light italic">
            {title}
          </h1>
          <hr className="hidden md:flex border-rose-300 w-3/5 mr-auto ml-auto pb-2 " />
          <p className="pb-2 pr-2">{text}</p>
        </article>
        <div className=" w-60 h-60 rounded-lg hidden md:flex shadow-md ">
          <img className="rounded-lg w-60 h-60 " src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

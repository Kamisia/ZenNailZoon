import React from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

const NewsletterComponent: React.FC = () => {
  const newsletter = (text) => {
    console.log(text);
  };
  return (
    <div className="w-full max-w-lg md:mr-0 h-28 flex flex-col md:flex-row md:gap-1 justify-center content-center m-auto ">
      <InputComponent />
      <div className=" w-2/5 max-w-48 m-auto text-amber-50 ">
        <ButtonComponent
          text="Subscribe"
          onClick={() => newsletter("click btn newsletter")}
        />
      </div>
    </div>
  );
};
export default NewsletterComponent;

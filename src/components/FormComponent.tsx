import React from "react";
import ButtonComponent from "./ButtonComponent";

const FormComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-1/2 mr-auto ml-auto mb-5 ">
      <div className="mb-5 flex flex-col w-full">
        <input className="text-black" type="email" name="email"></input>
        <label className="mb-2" htmlFor="email">
          Email
        </label>
        <input className="text-black" type="number" name="phon"></input>
        <label className="mb-5" htmlFor="number">
          Phone number
        </label>
        <label className="mb-2" htmlFor="text">
          Please text the message:
        </label>
        <textarea
          className="h-36 text-black"
          type="text"
          name="text"
        ></textarea>
      </div>
      <ButtonComponent text={"Send"} onClick={console.log("sended form")} />
    </div>
  );
};
export default FormComponent;

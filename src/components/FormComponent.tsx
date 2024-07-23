import React from "react";

const FormComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-1/2 m-auto ">
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
      <button className="p-2 border-amber-50 border w-fit m-auto mr-0 mb-5">
        Send
      </button>
    </div>
  );
};
export default FormComponent;

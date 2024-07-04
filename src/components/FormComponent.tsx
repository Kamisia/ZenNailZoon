import React from "react";

const FormComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-1/2 m-auto ">
      <div className="mb-5 flex flex-col w-full">
        <input type="email" name="email"></input>
        <label htmlFor="email">Email</label>
        <input type="number" name="phon"></input>
        <label htmlFor="number">Phone number</label>
        <textarea type="text"></textarea>
      </div>
      <button className="p-2 border-amber-50 border w-fit m-auto mr-0">
        Send
      </button>
    </div>
  );
};
export default FormComponent;

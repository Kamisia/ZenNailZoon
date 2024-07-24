import React from "react";
export interface InputComponentProps {
  type:
    | "text"
    | "email"
    | "password"
    | "url"
    | "number"
    | "range"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color"
    | "file"
    | "checkbox"
    | "radio"
    | "hidden"
    | "submit"
    | "reset"
    | "button";
  name: string;
}
const InputComponent: React.FC<InputComponentProps> = ({ type, name }) => {
  return (
    <div className="m-auto w-full max-w-screen-sm">
      <input type={type} name={name} className="w-full p-2  "></input>
    </div>
  );
};
export default InputComponent;

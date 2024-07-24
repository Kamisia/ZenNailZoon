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
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="w-full mb-4">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 text-black "
      />
    </div>
  );
};

export default InputComponent;

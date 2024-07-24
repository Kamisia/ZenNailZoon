import React from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface InputComponentProps<T extends FieldValues> {
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
  register?: UseFormRegister<any>;
  validation?: RegisterOptions;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const InputComponent = <T extends FieldValues>({
  type,
  name,
  register,
  validation,
  placeholder,
}: InputComponentProps<T>) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...(register ? register(name, validation) : {})}
      className="w-full p-2 text-black"
    />
  );
};

export default InputComponent;

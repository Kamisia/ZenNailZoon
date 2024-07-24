import React from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface TextAreaComponentProps<T extends FieldValues> {
  name: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions;
  placeholder?: string;
}

const TextAreaComponent = <T extends FieldValues>({
  name,
  register,
  validation,
  placeholder,
}: TextAreaComponentProps<T>) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      {...register(name, validation)}
      className="h-36 w-full p-2 text-black mb-4"
    />
  );
};

export default TextAreaComponent;

import React from "react";
export interface TextComponentProps {
  text: string;
}
const TextComponent: React.FC<TextComponentProps> = ({ text }) => {
  return (
    <>
      <p className="text-2xl font-light text-center logo-font">{text}</p>
    </>
  );
};
export default TextComponent;

import React from "react";
export interface TextComponentProps {
  text: string;
}
const TextComponent: React.FC<TextComponentProps> = ({ text }) => {
  return <>{text}</>;
};
export default TextComponent;

import React from "react";
export interface ButtonComponentProps {
  onClick: () => void;
  text: string;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};
export default ButtonComponent;

import React from "react";
export interface ButtonComponentProps {
  onClick: () => void;
  text: string;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onClick }) => {
  return (
    <div>
      <button
        className="rounded-full w-24 border border-amber-50 ease-in-out duration-300 hover:border-none hover:text-red-900"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default ButtonComponent;

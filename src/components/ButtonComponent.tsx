import React from "react";
export interface ButtonComponentProps {
  onClick: () => void;
  text: string;
}
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onClick }) => {
  return (
    <div>
      <button
        className="bg-gray-950 bg-opacity-20 m-auto rounded-lg w-full min-h-28 text-xl font-normal text-amber-50 uppercase border border-amber-50 ease-in-out duration-300 hover:border-none hover:text-red-900"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
export default ButtonComponent;

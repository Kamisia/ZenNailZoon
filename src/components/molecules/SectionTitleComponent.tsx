import React from "react";
export interface SectionTitleComponentProps {
  text: string;
  textColor?: string;
  textSize?: string;
}
const SectionTitleComponent: React.FC<SectionTitleComponentProps> = ({
  text,
  textColor = "rose-800",
  textSize = "2xl",
}) => {
  return (
    <div className="flex flex-col w-screen max-w-screen-lg justify-center text-center mr-auto ml-auto mb-4">
      <h1
        className={`text-${textColor} uppercase text-${textSize} mt-2  font-medium`}
      >
        {text}
      </h1>
      <hr className={` border-${textColor} w-1/2  mr-auto ml-auto`} />
    </div>
  );
};

export default SectionTitleComponent;

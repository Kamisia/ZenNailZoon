import React from "react";
export interface SectionTitleComponentProps {
  text: string;
}
const SectionTitleComponent: React.FC<SectionTitleComponentProps> = ({
  text,
}) => {
  return (
    <div className="flex flex-col w-screen max-w-screen-lg justify-center text-center mr-auto ml-auto">
      <h1 className="text-rose-800 uppercase text-2xl mt-2  font-medium">
        {text}
      </h1>
      <hr className=" border-rose-800 w-1/2  mr-auto ml-auto" />
    </div>
  );
};

export default SectionTitleComponent;

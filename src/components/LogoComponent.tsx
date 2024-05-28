import React from "react";
export interface LogoComponentProps {
  text: string;
}
const LogoComponent: React.FC<LogoComponentProps> = ({ text }) => {
  return (
    <>
      <p className="text-2xl font-light text-center logo-font">{text}</p>
    </>
  );
};
export default LogoComponent;

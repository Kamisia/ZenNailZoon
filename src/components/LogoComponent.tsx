import React from "react";
export interface LogoComponentProps {
  text: string;
}
const LogoComponent: React.FC<LogoComponentProps> = ({ text }) => {
  return (
    <div className="flex items-center">
      <p className="text-2xl font-light logo-font">{text}</p>
    </div>
  );
};
export default LogoComponent;

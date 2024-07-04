import React from "react";
interface ImageComponentProps {
  url: string;
}
const ImageComponent: React.FC<ImageComponentProps> = ({ url }) => {
  return (
    <div className="flex justify-center">
      <img className="rounded-lg w-80" src={url} alt="" />
    </div>
  );
};

export default ImageComponent;

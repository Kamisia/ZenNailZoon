import React from "react";

const ImageComponent: React.FC = ({ url }) => {
  return <img className="rounded-lg" src={url} alt="" />;
};

export default ImageComponent;

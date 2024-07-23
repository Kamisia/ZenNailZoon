import React from "react";
interface ImageComponentProps {
  url: string;
  author?: string;
}
const ImageComponent: React.FC<ImageComponentProps> = ({ url, author }) => {
  return (
    <div className="flex justify-center ">
      <img className="rounded-lg w-80 max-w-fit max-h-fit " src={url} alt="" />
      {author && (
        <div className="bg-rose-700 bg-opacity-5 w-full absolute ">
          <p className="text-amber-50">By {author}</p>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;

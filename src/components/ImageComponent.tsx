import React from "react";
interface ImageComponentProps {
  url: string;
  author?: string;
}
const ImageComponent: React.FC<ImageComponentProps> = ({ url, author }) => {
  return (
    <div
      className="flex justify-center bg-container bg-no-repeat bg-center w-full h-96"
      style={{ backgroundImage: `url(${url})` }}
    >
      {author && (
        <div className="bg-rose-800 bg-opacity-60 w-full absolute ">
          <p className="text-amber-50">By {author}</p>
        </div>
      )}

      {/*<div className="flex justify-center ">
  <img className="rounded-lg w-80 " src={url} alt="" />
  {author && (
    <div className="bg-rose-700 bg-opacity-5 w-full absolute ">
      <p className="text-amber-50">By {author}</p>
    </div>
  )}
</div>*/}
    </div>
  );
};

export default ImageComponent;

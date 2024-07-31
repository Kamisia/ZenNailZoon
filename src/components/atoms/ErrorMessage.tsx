import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className="text-amber-50 text-sm bg-amber-500 bg-opacity-60  mt-1 w-fit p-1">
      {message}
    </p>
  );
};

export default ErrorMessage;

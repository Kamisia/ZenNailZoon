import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className="text-amber-50 mb-4">{message}</p>;
};

export default ErrorMessage;

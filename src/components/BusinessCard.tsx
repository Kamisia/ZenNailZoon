import React from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
interface BusinessCardProps {
  number: string;
  mailAddress: string;
  text: string;
}
const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{9}$/;
  return phoneRegex.test(phone);
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const formatPhoneNumber = (phone: string): string => {
  return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
};
const BusinessCard: React.FC<BusinessCardProps> = ({
  number,
  mailAddress,
  text,
}) => {
  if (!isValidPhoneNumber(number)) {
    throw new Error(
      "Invalid phone number. It must consist of exactly 9 digits."
    );
  }

  if (!isValidEmail(mailAddress)) {
    throw new Error("Invalid email address. ");
  }
  return (
    <div className="  text-amber-50  absolute  w-2/5 h-44 start-20 top-32 bg-stone-800 bg-opacity-10 rounded-lg">
      <div className="flex flex-col  text-center center-content m-auto">
        <h1 className=" text-5xl text-amber-50 font-bold mb-8 poetsen uppercase">
          {text}
        </h1>
        <div className="flex flex-col justify-center m-auto text-lg  p-0  ">
          <div className="flex flex-row gap-4 justify-start  mb-4 text-center  ">
            <FaPhone className="h-7" />
            <p className="font-sans">{formatPhoneNumber(number)}</p>
          </div>
          <div className="flex flex-row gap-4 justify-start content-center">
            <TbMailFilled className="h-7" />
            <p>{mailAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

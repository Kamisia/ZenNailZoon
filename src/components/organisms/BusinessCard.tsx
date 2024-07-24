import React from "react";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import SocialMediaLinks from "./SocialMediaLinks";
import { FaHome } from "react-icons/fa";

interface BusinessCardProps {
  number: string;
  mailAddress: string;
  text?: string;

  address?: string;
  city?: string;
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
  city,
  address,
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
    <div
      className="flex flex-col text-amber-50 z-5 m-auto ml-2
     w-3/4 md:w-2/5 h-100  rounded-lg"
    >
      <div className="flex flex-col  text-center center-content m-auto">
        <h1 className="text-2xl  md:text-3xl lg:text-4xl font-semibold italic text-amber-50  mt-2 mb-4  uppercase">
          {text}
        </h1>
        <div className="flex flex-col justify-center m-auto text-lg  p-0 mb-6  ">
          {address || city ? (
            <div className="content-center flex flex-row gap-4 justify-start mb-4 text-start">
              <FaHome className="h-7 mt-auto mb-auto" />
              <div className="flex-col">
                {address && <p>{address}</p>}
                {city && <p>{city}</p>}
              </div>
            </div>
          ) : null}

          <div className="flex flex-row gap-4 justify-start  mb-4 text-center  ">
            <FaPhone className="h-7" />
            <p className="font-sans">{formatPhoneNumber(number)}</p>
          </div>
          <div className="flex flex-row gap-4 justify-start content-center">
            <TbMailFilled className="h-7" />
            <p>{mailAddress}</p>
          </div>
        </div>
        <SocialMediaLinks
          fbhref="https://www.facebook.com/hashtag/nail/"
          ighref="https://www.instagram.com/explore/tags/nails/"
          phref="https://pl.pinterest.com/search/pins/?q=nail&rs=typed"
        />
      </div>
    </div>
  );
};

export default BusinessCard;

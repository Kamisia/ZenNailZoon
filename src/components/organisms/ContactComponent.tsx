import React from "react";
import BusinessCard from "./BusinessCard";

const ContactComponent: React.FC = () => {
  return (
    <div className=" flex flex-col w-1/2 mr-auto ml-auto mb-5 ">
      <BusinessCard
        number={"123456789"}
        mailAddress={"ZenNailZoon@example.com"}
        fbhref="facebook.com"
        ighref="instagram.com"
        address="Address 3/9"
        city="City"
      />
    </div>
  );
};
export default ContactComponent;

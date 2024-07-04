import React from "react";
import BusinessCard from "./BusinessCard";
const ContactComponent: React.FC = () => {
  return (
    <div className=" pb-10">
      <BusinessCard
        number={"123456789"}
        mailAddress={"ZenNailZoon@example.com"}
        fbmedia={true}
        fbhref="facebook.com"
        igmedia={true}
        ighref="instagram.com"
        lnmedia={false}
        xmedia={false}
        pmedia={false}
        localAddress={true}
        address="Address 3/9"
        city="City"
      />
    </div>
  );
};
export default ContactComponent;

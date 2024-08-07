import React from "react";
import SectionTitleComponent from "../molecules/SectionTitleComponent";
import ContactComponent from "../organisms/ContactComponent";
import NewsletterComponent from "../organisms/NewsletterComponent";
import FormComponent from "../organisms/FormComponent";
import imageBg from "../../assets/newslatter-bg.jpg";
const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-rose-500 w-screen  items-start">
      <SectionTitleComponent text={"Contact"} textColor="amber-50" />
      {/* dane kontaktowe*/}
      <div className=" flex flex-col md:flex-row gap-3 items-start text-amber-50  justify-between pl-5 pr-5">
        <ContactComponent />

        {/*Formularz kontaktowy */}
        <FormComponent />
      </div>
      {/*Newsletter */}

      <div
        className="flex flex-column md:flex-row justify-center p-5 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imageBg})` }}
      >
        <div className=" bg-rose-700 bg-opacity-40 flex flex-col gap-2 mr-auto ml-auto  md:flex-row justify-center  w-full  p-3">
          <div className=" text-amber-50  mb-3  justify-items-center ">
            <h1 className="uppercase text-2xl mb-3">Subscribe Us!</h1>
            <p className="text-xl">
              Get a 10% discount on your first visit and stay updated with our
              promotions.
            </p>
          </div>
          <NewsletterComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;

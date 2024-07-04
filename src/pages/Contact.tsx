import React from "react";
import SectionTitleComponent from "../components/SectionTitleComponent";
import ContactComponent from "../components/ContactComponent";
import NewsletterComponent from "../components/NewsletterComponent";
import FormComponent from "../components/FormComponent";
const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-rose-400 w-screen ">
      <SectionTitleComponent text={"Contact"} textColor="amber-50" />
      {/* dane kontaktowe*/}
      <div className="flex text-amber-50 flex-row justify-between pl-5">
        <ContactComponent />

        {/*Formularz kontaktowy */}
        <FormComponent />
      </div>
      {/*Newsletter */}
      <hr className="border border-amber-50 w-5/6 mr-auto ml-auto " />
      <div className="flex flex-row justify-center p-5">
        <div className="m-auto text-amber-50">
          <h1 className="uppercase text-2xl"> Subscribe Us!</h1>
          <p className="text-xl">Get -10% for first visit </p>
        </div>
        <NewsletterComponent />
      </div>
    </div>
  );
};

export default Contact;

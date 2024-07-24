import React, { useState } from "react";
import ButtonComponent from "../atoms/ButtonComponent";
import InputComponent from "../atoms/InputComponent";

const NewsletterComponent: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    console.log(email);
    // Dodaj kod do obsługi subskrypcji, np. wyślij dane na serwer
  };

  return (
    <div className="w-full max-w-lg md:mr-0 h-28 flex flex-col md:flex-row md:gap-1 justify-center content-center m-auto">
      <InputComponent
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <div className="w-2/5 max-w-48 m-auto text-amber-50">
        <ButtonComponent text="Subscribe" onClick={handleSubscribe} />
      </div>
    </div>
  );
};

export default NewsletterComponent;

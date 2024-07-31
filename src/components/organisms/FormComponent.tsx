import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputComponent from "../atoms/InputComponent";
import TextAreaComponent from "../atoms/TextAreaComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import ErrorMessage from "../atoms/ErrorMessage";

interface IFormInput {
  email: string;
  phone: string;
  text: string;
}

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form data", data);

    // Symulacja wysyłania danych
    setTimeout(() => {
      toast.success("Message sent successfully!");
      reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col w-1/2 mr-auto ml-auto mb-5">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <label htmlFor="email">Email:</label>
        <InputComponent
          type="email"
          name="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}

        <label htmlFor="phone">Phone number:</label>
        <InputComponent
          type="text"
          name="phone"
          register={register}
          validation={{
            required: "Phone number is required",
            minLength: {
              value: 9,
              message: "Phone number should be at least 9 digits",
            },
            maxLength: {
              value: 15,
              message: "Phone number should not exceed 15 digits",
            },
          }}
        />
        {errors.phone && <ErrorMessage message={errors.phone.message} />}

        <label htmlFor="text">Please text the message:</label>
        <TextAreaComponent
          name="text"
          register={register}
          validation={{
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long",
            },
          }}
        />
        {errors.text && <ErrorMessage message={errors.text.message} />}

        <ButtonComponent
          text={"Send"}
          onClick={() => handleSubmit(onSubmit)()}
        />
      </form>
    </div>
  );
};

export default FormComponent;

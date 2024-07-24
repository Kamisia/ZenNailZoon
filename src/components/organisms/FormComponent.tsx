import React from "react";
import ButtonComponent from "../atoms/ButtonComponent";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormInput {
  email: string;
  phone: number;
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-5 flex flex-col w-full"
      >
        <label htmlFor="email">Email:</label>
        <input
          className="text-black mb-2"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-green-500">{errors.email.message}</p>
        )}

        <label htmlFor="phone">Phone number:</label>
        <input
          className="text-black mb-2"
          type="number"
          {...register("phone", {
            required: "Phone number is required",
            min: {
              value: 100000000,
              message: "Phone number should be at least 9 digits",
            },
            max: {
              value: 999999999,
              message: "Phone number should not exceed 9 digits",
            },
          })}
        />
        {errors.phone && (
          <p className="text-green-500">{errors.phone.message}</p>
        )}

        <label htmlFor="text">Please text the message:</label>
        <textarea
          className="h-36 text-black mb-5"
          {...register("text", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters long",
            },
          })}
        ></textarea>
        {errors.text && <p className="text-green-500">{errors.text.message}</p>}

        <ButtonComponent text={"Send"} onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};

export default FormComponent;

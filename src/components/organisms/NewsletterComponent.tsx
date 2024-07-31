import React from "react";
import { useForm } from "react-hook-form";
import ButtonComponent from "../atoms/ButtonComponent";
import InputComponent from "../atoms/InputComponent";
import ErrorMessage from "../atoms/ErrorMessage";

interface IFormInputs {
  email: string;
}

const NewsletterComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    mode: "onBlur",
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data.email);
    reset();
    // Tutaj będzie kod do obsługi subskrypcji
  };

  return (
    <div className=" w-full max-w-lg md:mr-0 h-28 flex flex-col md:flex-row md:gap-1 justify-center content-center m-auto">
      <form onSubmit={handleSubmit(onSubmit)} className=" w-full ">
        <InputComponent
          type="email"
          name="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          }}
          placeholder="Enter your email"
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
        <div className="max-w-48 m-auto text-amber-50">
          <ButtonComponent text="Subscribe" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default NewsletterComponent;

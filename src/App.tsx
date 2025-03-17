import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "./components/Input";
import InputError from "./components/InputError";
import { ISignup, signupSchema } from "./validations/auth";

function App() {
  
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ISignup>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });
  const onSubmit: SubmitHandler<ISignup> = ({
    first_name,
    email,
    last_name,
    password,
  }) => {
    const user = {
      first_name,
      last_name,
      email,
      password,
    };
    reset();
    console.log(user);
  };
  const signUpInputs = [
    {
      type: "text",
      placeholder: "enter your first name",
      register: register("first_name"),
      error: errors.first_name
    },
    {
      type: "text",
      placeholder: "enter your last name",
      register: register("last_name"),
      error: errors.last_name
    },
    {
      type: "email",
      placeholder: "enter your email",
      register: register("email"),
      error: errors.email
    },
    {
      type: "password",
      placeholder: "enter your password",
      register: register("confirm_password"),
      error: errors.confirm_password
    },
    {
      type: "password",
      placeholder: "enter your confirm password",
      register: register("password"),
      error: errors.password
    },
  ];
  return (
    <>
      <h2>create an account.</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {signUpInputs.map((input,index) => {
          return (
           <div key={index}>
             <Input
               type={input.type}
               placeholder={input.placeholder}
               register={input.register}
             />
             <InputError error={input.error} />
           </div>
          );
        })}
        <button disabled={isSubmitting} type="submit">
          sign up
        </button>
      </form>
    </>
  );
}

export default App;

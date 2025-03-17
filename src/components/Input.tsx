import {UseFormRegisterReturn} from "react-hook-form"
type InputProps = {
  type:string;
  placeholder:string;
  register:UseFormRegisterReturn<string>
}

const Input = ({type,placeholder,register}:InputProps) => {
  return (
    <input type={type} placeholder={placeholder} {...register}>

    </input>
  )
}

export default Input
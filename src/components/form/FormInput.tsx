import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type: string;
  register:(field:string)=>UseFormRegisterReturn

  }

const FormInput = ({ id, label, register }: Props) => {
  return (
    <FormControl id={id} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type="email" {...register("email")} />
    </FormControl>
  );
};

export default FormInput;

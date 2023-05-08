import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface Props {
  id: string;
  label: string;
  type: string;
}

const FormInput = ({ id, label }: Props) => {
  return (
    <FormControl id={id} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type="email" />
    </FormControl>
  );
};

export default FormInput;

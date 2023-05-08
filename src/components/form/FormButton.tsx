import { Button, Stack } from "@chakra-ui/react";
import React from "react";
interface Props {
  isDisabled: boolean;
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const FormButton = ({ isDisabled, text, type = undefined, onClick }: Props) => {
  return (
    <Stack spacing={10} pt={2}>
      <Button
        isDisabled={isDisabled}
        type={type}
        onClick={(event) => onClick && onClick(event)}
        loadingText="Submitting"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default FormButton;

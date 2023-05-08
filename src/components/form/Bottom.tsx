import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string;
  linkText: string;
}

const Bottom = ({ text, link, linkText }: Props) => {
  return (
    <Stack pt={6}>
      <Text align={"center"}>
        {text}{" "}
        <Link to={`/${link}`} color={"blue.400"}>
          {linkText}
        </Link>
      </Text>
    </Stack>
  );
};

export default Bottom;

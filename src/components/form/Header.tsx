import { Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <Stack align={"center"}>
      <Heading fontSize={"4xl"} textAlign={"center"}>
        {title}
      </Heading>
      <Text fontSize="xl" color="gray.600">
        {description}
      </Text>
    </Stack>
  );
};

export default Header;

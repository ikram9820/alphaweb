import { HStack, VStack } from "@chakra-ui/react";
const Navigation = ({ isVericle = true }) => {
  let Stack = isVericle ? VStack : HStack;
  return (
    <div>
      <Stack>
        <div>nav 1</div>
        <div>nav 2</div>
      </Stack>
    </div>
  );
};

export default Navigation;

import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import MessagesLog from "./MessagesLog";

const ChatRoom = () => {
  return (
    <VStack bg="">
      <h1>Chat Room with user</h1>
      <MessagesLog></MessagesLog>
      <HStack>
        <Button>imoji</Button>
        <Input placeholder="Enter Your message" />
        <Button colorScheme="green">send</Button>
      </HStack>
    </VStack>
  );
};

export default ChatRoom;

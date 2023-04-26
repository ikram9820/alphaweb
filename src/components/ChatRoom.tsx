import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import MessagesList from "./messages/MessagesList";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
  let params = useParams();
  let id = params.id;
  return (
    <VStack bg="">
      <h1>Chat Room {id}</h1>
      <MessagesList></MessagesList>
      <HStack>
        <Button>imoji</Button>
        <Input placeholder="Enter Your message" />
        <Button colorScheme="green">send</Button>
      </HStack>
    </VStack>
  );
};

export default ChatRoom;

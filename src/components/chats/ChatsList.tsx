import { VStack } from "@chakra-ui/react";
import ChatItem from "./ChatItem";

const ChatsList = () => {
  let chats = [
    { id: "1", userId: "2", initialMessage: "hello" },
    { id: "2", userId: "1", initialMessage: "world" },
    { id: "3", userId: "3", initialMessage: "hi" },
  ];
  return (
    <VStack>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </VStack>
  );
};

export default ChatsList;

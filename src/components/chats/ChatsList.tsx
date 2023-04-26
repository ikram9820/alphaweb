import { VStack } from "@chakra-ui/react";
import getChats from "../../data/chats";
import ChatItem from "./ChatItem";

const ChatsList = () => {
  let chats = getChats();
  return (
    <VStack>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </VStack>
  );
};

export default ChatsList;

import { VStack } from "@chakra-ui/react";
import getChats from "../../data/chats";
import ChatItem from "./ChatItem";

interface Props {
  openChat(id: string): void;
}

const ChatsList = ({ openChat }: Props) => {
  let chats = getChats();
  return (
    <VStack>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} onOpenChat={openChat} />
      ))}
    </VStack>
  );
};

export default ChatsList;

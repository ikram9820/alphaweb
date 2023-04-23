import { Link } from "@chakra-ui/react";
import { Chat } from "../../interfaces";

interface Props {
  chat: Chat;
  onOpenChat(id: string): void;
}

const ChatItem = ({ chat, onOpenChat }: Props) => {
  function handleOpenChat(id: string) {
    onOpenChat(id);
  }

  return (
    <>
      <Link onClick={() => handleOpenChat(chat.id)}>
        {chat.userId} : {chat.initialMessage}
      </Link>
    </>
  );
};

export default ChatItem;

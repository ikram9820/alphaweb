import { Link } from "react-router-dom";
import { Chat } from "../../entities/Chat";

interface Props {
  chat: Chat;
}

const ChatItem = ({ chat }: Props) => {
  return (
    <>
      <Link to={chat.id}>
        {chat.userId} : {chat.initialMessage}
      </Link>
    </>
  );
};

export default ChatItem;

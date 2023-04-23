import { Chat } from "../interfaces";

let chats: Chat[] = [
  { id: "chat1", userId: "1", initialMessage: "Hello" },
  { id: "chat2", userId: "2", initialMessage: "Hello" },
  { id: "chat3", userId: "3", initialMessage: "Hello" },
];
function getChats(){
    return chats;
}
export default getChats;

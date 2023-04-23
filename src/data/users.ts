import { User } from "../interfaces";

let users: User[] = [
  {
    id: "1",
    name: "Ikram",
  },
  {
    id: "2",
    name: "khan",
  },
  {
    id: "3",
    name: "Inam",
  },
];

function getUsers(){
    return users;
}

export default getUsers;

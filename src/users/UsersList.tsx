import getUsers from "../data/users";
import UserItem from "./UserItem";

const UsersList = () => {
  let users = getUsers();
  return (
    <>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </>
  );
};

export default UsersList;

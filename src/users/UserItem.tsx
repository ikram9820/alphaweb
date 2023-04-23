import { User } from "../interfaces";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  return <div>{user.name}</div>;
};

export default UserItem;

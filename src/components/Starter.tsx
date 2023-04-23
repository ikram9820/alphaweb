import { User } from "../interfaces/User";

interface Props {
    user:User
}

const Starter = ({user}:Props) => {
    return (
    
    <div className=" m-5 p-5 text-center">
      <div className="m-5">
        <h3>Welcom, {user.name}</h3>
        <p>Please select a chat to start messaging</p>
      </div>
    </div>
    );
}

export default Starter;
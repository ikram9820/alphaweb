import { HStack, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Navigation = ({ isVericle = true }) => {
  let Stack = isVericle ? VStack : HStack;
  return (
    <div>
      <Stack>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/reels">Reels</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Stack>
    </div>
  );
};

export default Navigation;

import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const user = useAuth();
  return (
    <HStack padding="10px" justify={"space-between"}>
      <NavLink to="/chats">
        <Image src={logo} boxSize="40px" rounded="full" />
      </NavLink>
      <HStack padding="10px" spacing={50} justify={"space-between"}>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/">Reels</NavLink>
        {user ? (
          <NavLink to="/profile">Profile</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </HStack>
      <Show above="lg">
        <ColorModeSwitch />
      </Show>
    </HStack>
  );
};

export default NavBar;

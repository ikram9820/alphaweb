import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="40px" rounded="full" />
      <Show above="lg">
        <SearchInput />
        <ColorModeSwitch />
      </Show>
      <Show below="lg">
        <Navigation isVericle={false} />
      </Show>
    </HStack>
  );
};

export default NavBar;

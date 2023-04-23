import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch";
import HNaivgation from "./HNaivgation";
import SearchInput from "../SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="40px" rounded="full" />
      <Show above="lg">
        <SearchInput />
        <ColorModeSwitch />
      </Show>
      <Show below="lg">
        <HNaivgation />
      </Show>
    </HStack>
  );
};

export default Navbar;

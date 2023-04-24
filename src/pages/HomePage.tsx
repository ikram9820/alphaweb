import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import {  Navigation } from "../components/navigation";
import ChatRoom from "../components/ChatRoom";
import { useState } from "react";
import Starter from "../components/Starter";
import ChatsList from "../components/chats/ChatsList";

const Home = () => {
  const [selectedRoom, setSelectedRoom] = useState("");

  return (
    <Grid
      templateAreas={{ base: ` "main"`, lg: ` "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <Show above="lg">
        <HStack bg="dodgerblue">
          <Navigation />
          <GridItem area="aside">
            <ChatsList openChat={setSelectedRoom} />
          </GridItem>
        </HStack>
      </Show>
      <GridItem area="main">
        {selectedRoom ? (
          <ChatRoom id={selectedRoom} />
        ) : (
          <Starter user={{ id: "1", name: "ikram" }} />
        )}
      </GridItem>
    </Grid>
  );
};

export default Home;

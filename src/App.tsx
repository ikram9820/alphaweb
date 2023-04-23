import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { Navbar, Navigation } from "./components/navigation";
import ChatRoom from "./components/ChatRoom";
import { useState, useEffect } from "react";
import Starter from "./components/Starter";
import ChatsList from "./components/chats/ChatsList";

function App() {
  const [selectedRoom, setSelectedRoom] = useState("");
  
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
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
}

export default App;

import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ChatRoom from "./components/ChatRoom";
import VNaivgation from "./components/navigation/VNavigation";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <HStack>
          <VNaivgation />
          <GridItem area="aside">
            <div>User's Chats</div>
          </GridItem>
        </HStack>
      </Show>
      <GridItem area="main">
        <ChatRoom />
      </GridItem>
    </Grid>
  );
}

export default App;

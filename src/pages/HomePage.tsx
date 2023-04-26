import { Grid, GridItem, Show } from "@chakra-ui/react";
import Starter from "../components/Starter";
import ChatsList from "../components/chats/ChatsList";
import { Outlet, useOutlet } from "react-router-dom";

const Home = () => {
  const outlet = useOutlet();
  return (
    <Grid
      templateAreas={{ base: ` "main"`, lg: ` "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="aside">{!outlet && <ChatsList />}</GridItem>
      <GridItem area="main">
        <Show above="lg">
          {!outlet && <Starter user={{ id: "1", name: "ikram" }} />}
        </Show>
      </GridItem>
      <GridItem area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Home;

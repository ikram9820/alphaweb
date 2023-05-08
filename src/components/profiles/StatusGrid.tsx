import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useProfileStatuses from "../../hooks/useProfileStatuses";
import StatusCard from "./StatusCard";
import StatusCardContainer from "./StatusCardContainer";
import StatusCardSkeleton from "./StatusCardSkeleton";

const StatusGrid = () => {
  const profileId = 1;
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useProfileStatuses(profileId);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedStatusesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedStatusesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <StatusCardContainer key={skeleton}>
              <StatusCardSkeleton />
            </StatusCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <StatusCardContainer key={game.id}>
                <StatusCard status={game} />
              </StatusCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default StatusGrid;

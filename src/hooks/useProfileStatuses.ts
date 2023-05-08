import { useInfiniteQuery } from "@tanstack/react-query";
import profilesStatusService from "../services/profilesStatusService";
import { Status } from "../entities/Status";
import { FetchResponse } from "../services/apiClient";

const useProfileStatuses = (profileId: number) => {
  return useInfiniteQuery<FetchResponse<Status>, Error, FetchResponse<Status>>({
    queryKey: ["profiles", profileId, "statuss"],
    queryFn: ({ pageParam = 1 }) =>
      profilesStatusService.getAll({
        params: {
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours,
  });
};

export default useProfileStatuses;

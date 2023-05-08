import APIClient from "./apiClient";

import { Status } from "../entities/Status";
function getProfileStatusService(profileId: number) {
  return new APIClient<Status>(`/profiles/${profileId}/statuses`);
}
export default getProfileStatusService;

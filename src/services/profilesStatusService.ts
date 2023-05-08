import APIClient from "./apiClient";

import { Status } from "../entities/Status";

export default new APIClient<Status>("/profiles/");

import APIClient from "./apiClient";

import { User } from "../entities/User";

export default new APIClient<User>("/auth/users/");

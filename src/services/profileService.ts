import { Profile } from "../entities/Profile";
import APIClient from "./apiClient";

export default new APIClient<Profile>("/profiles");

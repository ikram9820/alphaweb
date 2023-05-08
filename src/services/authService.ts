import APIClient from "./apiClient";

import { Credential, Token } from "../entities/Auth";

export default new APIClient<Credential, Token>("/auth/jwt/create");
export interface Credential {
  username: string;
  password: string;
}

export interface Token {
  refresh: string;
  access: string;
}

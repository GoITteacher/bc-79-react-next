import { User } from "./user";

export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  email: string;
  password: string;
  name: string;
  typeAccount: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

import { User } from "@/types/users";
import { proxyApi } from "./serverConfig";

interface LoginBody {
  email: string;
  password: string;
}
export const login = async (body: LoginBody) => {
  const res = await proxyApi.post<{ user: User }>("/auth/login", body);
  return res.data;
};

export const register = async () => {};
export const logout = async () => {
  const res = await proxyApi.post("/auth/logout");
  return res.data;
};

export const getMe = async () => {
  const res = await proxyApi.get<{ user: User }>("/auth/me");
  return res.data;
};

export const refresh = async () => {
  const res = await proxyApi.post("/auth/refresh");
  return res.data;
};

import { AuthResponse, LoginBody, RegisterBody } from "@/types/auth";
import { nextApi } from "./nextApi";
import { User } from "@/types/user";

export const login = async (data: LoginBody) => {
  const res = await nextApi.post<AuthResponse>("/auth/login", data);
  return res.data;
};

export const register = async (data: RegisterBody) => {
  const res = await nextApi.post<AuthResponse>("/auth/register", data);
  return res.data;
};

export const refreshSession = async () => {
  const res = await nextApi.post<{ success: boolean }>("/auth/session");
  return res.data.success;
};
export const getMe = async () => {
  const res = await nextApi.get<User>("/auth/me");
  return res.data;
};

export const logout = async () => {
  const res = await nextApi.post("/auth/logout");
  return res;
};

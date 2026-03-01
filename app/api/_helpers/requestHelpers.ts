import { cookies } from "next/headers";
import { AxiosError } from "axios";

export const getAuthHeaders = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return null;
  }

  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

export const getAxiosErrorPayload = (error: unknown) => {
  const axiosError = error as AxiosError<{ message?: string; error?: string }>;
  const response = axiosError.response;
  const message =
    response?.data?.message ??
    response?.data?.error ??
    axiosError.message ??
    "Something went wrong";

  return {
    status: response?.status ?? 500,
    message,
  };
};

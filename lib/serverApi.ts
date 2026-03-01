import { cookies } from "next/headers";
import { nextApi } from "./nextApi";

export const checkServerSession = async () => {
  const cookiStore = await cookies();

  const res = await nextApi.get("/auth/session", {
    headers: {
      Cookie: cookiStore.toString(),
    },
  });

  return res;
};

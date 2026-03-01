import { cookies } from "next/headers";
import { globalApi } from "../../globalApi";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStore = await cookies();

  await globalApi.post("/auth/logout", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ message: "Logged out successfully" });
};

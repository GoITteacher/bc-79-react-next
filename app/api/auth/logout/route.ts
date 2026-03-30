import { cookies } from "next/headers";
import { globalApi } from "../../serverConfig";
import { NextResponse } from "next/server";

export const POST = async () => {
  const cookieStorage = await cookies();

  try {
    const res = await globalApi.post("/auth/logout", {
      headers: {
        Cookie: cookieStorage.toString(),
      },
    });
  } catch {}

  cookieStorage.delete("accessToken");
  cookieStorage.delete("refreshToken");

  return NextResponse.json({ successLogout: true });
};

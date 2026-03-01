import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../globalApi";

export const GET = async () => {
  const cookieStore = await cookies();
  const res = await globalApi.get("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return NextResponse.json(res.data);
};

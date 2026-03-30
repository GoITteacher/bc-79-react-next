import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../serverConfig";
import { cookies } from "next/headers";

export const GET = async () => {
  const cookieStorage = await cookies();

  const res = await globalApi.get("/auth/me", {
    headers: {
      Cookie: cookieStorage.toString(),
    },
  });

  console.log(res.data);

  return NextResponse.json(res.data);
};

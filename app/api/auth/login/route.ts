import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../serverConfig";
import { parse } from "cookie";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const cookieStorage = await cookies();
  const body = await req.json();
  const res = await globalApi.post("/auth/login", body);
  const cookieHeaders = res.headers["set-cookie"];

  if (cookieHeaders) {
    const cookieArr = Array.isArray(cookieHeaders)
      ? cookieHeaders
      : [cookieHeaders];

    for (const cookieStr of cookieArr) {
      const cookieObj = parse(cookieStr);

      const options = {
        expires: cookieObj.Expires ? new Date(cookieObj.Expires) : undefined,
        path: cookieObj.Path,
        maxAge: Number(cookieObj["Max-Age"]),
      };

      if (cookieObj.accessToken) {
        cookieStorage.set("accessToken", cookieObj.accessToken, options);
      }

      if (cookieObj.refreshToken) {
        cookieStorage.set("refreshToken", cookieObj.refreshToken, options);
      }
    }
  }

  return NextResponse.json(res.data);
};

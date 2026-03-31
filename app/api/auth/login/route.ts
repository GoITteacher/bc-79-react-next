import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../globalApi";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { AxiosError } from "axios";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const res = await globalApi.post("/auth/login", body);

    const cookieStore = await cookies();
    const cookiesStr = res.headers["set-cookie"];

    if (cookiesStr) {
      const cookieArr = Array.isArray(cookiesStr) ? cookiesStr : [cookiesStr];

      for (const cookie of cookieArr) {
        const parsedCookie = parse(cookie);

        const options = {
          expires: parsedCookie.Expires
            ? new Date(parsedCookie.Expires)
            : undefined,
          path: parsedCookie.Path,
          maxAge: Number(parsedCookie["Max-Age"]),
        };

        if (parsedCookie.accessToken) {
          cookieStore.set("accessToken", parsedCookie.accessToken, options);
        }

        if (parsedCookie.refreshToken) {
          cookieStore.set("refreshToken", parsedCookie.refreshToken, options);
        }
      }

      return NextResponse.json(res.data);
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    return NextResponse.json(
      {
        error: error.response?.data.message || error.message,
      },
      {
        status: error.status,
      }
    );
  }
};

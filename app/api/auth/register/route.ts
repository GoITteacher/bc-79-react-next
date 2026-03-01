import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../globalApi";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { AxiosError } from "axios";

export const POST = async (request: NextRequest) => {
  try {
    const userData = await request.json();
    const res = await globalApi.post("/auth/register", userData);

    const cookieStore = await cookies();
    const setCookies = res.headers["set-cookie"];

    if (setCookies) {
      const cookieArr = Array.isArray(setCookies) ? setCookies : [setCookies];

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

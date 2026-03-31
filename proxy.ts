import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { checkServerSession } from "./lib/serverApi";
import { parse } from "cookie";

const privateRoutes = ["/tasks", "/notes", "/news"];
const publicRoutes = ["/sign-in", "/register"];

export async function proxy(req: NextRequest) {
  console.log("START PROXY");

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const path = req.nextUrl.pathname;
  const isPrivateRoute = privateRoutes.some((route) => path.startsWith(route));
  const isPublicRoutes = publicRoutes.some((route) => path.startsWith(route));

  console.log(path, isPrivateRoute, isPublicRoutes);

  if (!accessToken) {
    if (refreshToken) {
      const res = await checkServerSession();
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

        if (isPrivateRoute) {
          return NextResponse.next({
            headers: {
              Cookie: cookieStore.toString(),
            },
          });
        }

        if (isPublicRoutes) {
          return NextResponse.redirect(new URL("/", req.url), {
            headers: {
              Cookie: cookieStore.toString(),
            },
          });
        }
      }
    }

    if (isPrivateRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    if (isPublicRoutes) {
      return NextResponse.next();
    }
  }

  if (accessToken && isPrivateRoute) {
    return NextResponse.next();
  }

  if (accessToken && isPublicRoutes) {
    return NextResponse.redirect(new URL("/", req.url), {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/tasks/:path*",
    "/news/:path*",
    "/notes/:path*",
    "/sign-in/:path*",
  ],
};

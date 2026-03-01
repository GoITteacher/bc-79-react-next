import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { checkServerSession } from "./lib/serverApi";
import { parse } from "cookie";

const privateRoutes = ["/tasks", "/news", "/notes"];

export async function proxy(request: NextRequest) {
  console.log("START PROXY");

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  //pathname = '/news/create'.startWith("/news")
  const { pathname } = request.nextUrl;
  const isPrivateRoute = privateRoutes.some((path) =>
    pathname.startsWith(path)
  );

  // Якщо публічний маршрут - довзволяємо завантажити цю сторінку
  if (!isPrivateRoute) {
    return NextResponse.next();
  }

  // Якщо є accessToken - довзволяємо завантажити цю сторінку
  if (accessToken) {
    return NextResponse.next();
  }

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

      // після отримання нових токенів, всеодно даємл дозвіл на завантаження сторінки
      return NextResponse.next({
        headers: {
          Cookie: cookieStore.toString(),
        },
      });
    }
  }

  return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
  matcher: ["/tasks", "/news", "/notes"],
};

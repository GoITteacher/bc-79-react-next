# Заняття 18 - Auth

1. Налаштування serverConfig для BFF і глобального сервера
1. Створити BFF для login, register, logout, refresh-session, getMe
1. Підключити запити до форми логіну
1. Створити глобальний стор та AuthProvider для рефрешу
1. Свторити proxy.ts для приватних і публічних маршрутів

test1@gmail.com qwerty

---

Cookies

```ts
try {
  const res = await globalApi.post("/auth/login", body);

  const cookieStore = await cookies();
  const setCookie = res.headers["set-cookie"];

  if (setCookie) {
    // Примусово робимо масив
    const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

    // Проходимось по масиву та парсимо кожне значення
    // щоб отримати результат у вигляді обʼєкту
    for (const cookieStr of cookieArray) {
      const parsed = parse(cookieStr);
      // Створюємо налаштування для cookies
      const options = {
        expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
        path: parsed.Path,
        maxAge: Number(parsed["Max-Age"]),
      };

      // Методом cookieStore.set додаємо кукі до нашого запиту
      if (parsed.accessToken) {
        // cookieStore.set('імʼя ключа',  'значення токену',  додаткові налаштування)
        cookieStore.set("accessToken", parsed.accessToken, options);
      }
      if (parsed.refreshToken) {
        cookieStore.set("refreshToken", parsed.refreshToken, options);
      }
    }

    return NextResponse.json(res.data);
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
} catch (err) {
  const error = err as ApiError;
  return NextResponse.json(
    {
      error: error.response?.data.error || error.message,
    },
    {
      status: error.status,
    }
  );
}
```

---

Proxy

```ts
// proxy.ts

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { checkServerSession } from "./lib/serverApi";

const privateRoutes = ["/"];

export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  // Шлях, на який користувач намагається перейти
  const { pathname } = request.nextUrl;
  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isPrivateRoute) {
    if (!accessToken) {
      if (refreshToken) {
        // Отримуємо нові cookie
        const data = await checkServerSession();
        const setCookie = data.headers["set-cookie"];

        if (setCookie) {
          const cookieArray = Array.isArray(setCookie)
            ? setCookie
            : [setCookie];
          for (const cookieStr of cookieArray) {
            const parsed = parse(cookieStr);
            const options = {
              expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
              path: parsed.Path,
              maxAge: Number(parsed["Max-Age"]),
            };
            if (parsed.accessToken)
              cookieStore.set("accessToken", parsed.accessToken, options);
            if (parsed.refreshToken)
              cookieStore.set("refreshToken", parsed.refreshToken, options);
          } // важливо — передаємо нові cookie далі, щоб оновити їх у браузері

          return NextResponse.next({
            headers: {
              Cookie: cookieStore.toString(),
            },
          });
        }
      }
      // немає жодного токена — редірект на сторінку входу
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }
  // публічний маршрут або accessToken є — дозволяємо доступ
  return NextResponse.next();
}

export const config = {};
```

---

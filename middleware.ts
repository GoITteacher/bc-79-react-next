import { proxy } from "./proxy";

export function middleware(request: Parameters<typeof proxy>[0]) {
  return proxy(request);
}

export const config = {
  matcher: ["/tasks/:path*", "/news/:path*", "/notes/:path*"],
};

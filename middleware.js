import { NextResponse } from "next/server";

/**
 * Helps to interrupt Request
 */
export function middleware(request) {
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("x-url", request.url);
  return NextResponse.next({
    request: {
      // Apply new request headers
      // headers: requestHeaders,
    },
  });
}

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getRetiredBrandRedirect } from "@/lib/brandRegistry";
import { PUBLIC_CITY_SLUGS } from "@/lib/pageRegistry";

export function middleware(request: NextRequest) {
  const target = getRetiredBrandRedirect(request.nextUrl.pathname, PUBLIC_CITY_SLUGS);
  if (!target) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = target;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};

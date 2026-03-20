import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/site-config";

const canonicalUrl = new URL(siteUrl);
const canonicalHost = canonicalUrl.host.replace(/^www\./, "");
const wwwHost = `www.${canonicalHost}`;

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const headerHost = request.headers.get("host")?.split(",")[0]?.trim();
  const requestHost = (forwardedHost || headerHost || request.nextUrl.host).replace(/:\d+$/, "");

  if (requestHost !== wwwHost) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = canonicalUrl.protocol;
  destination.hostname = canonicalHost;
  destination.port = canonicalUrl.port;

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: "/:path*",
};

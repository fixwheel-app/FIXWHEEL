const BOOKING_FLOW_ROUTES = ['/book', '/booking', '/confirmation'] as const;

export function shouldShowMobileBookingBar(pathname: string | null | undefined): boolean {
  if (!pathname) return false;

  if (pathname.startsWith('/admin') || pathname.startsWith('/route-analysis')) {
    return false;
  }

  return !BOOKING_FLOW_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

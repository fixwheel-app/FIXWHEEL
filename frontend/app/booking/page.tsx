import { redirect } from "next/navigation";

export default function BookingPageRedirect({ searchParams }: { searchParams: Record<string, string> }) {
  const query = new URLSearchParams(searchParams).toString();
  redirect(`/book/checkout?${query}`);
}

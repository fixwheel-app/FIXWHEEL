import { redirect } from "next/navigation";

const LOCALITIES = [
  "sector-18", "sector-22", "sector-27", "sector-29", "sector-37", "sector-44",
  "sector-50", "sector-51", "sector-52", "sector-55", "sector-56", "sector-62",
  "sector-63", "sector-75", "sector-76", "sector-77", "sector-78", "sector-100",
  "sector-104", "sector-110", "sector-120", "sector-125", "sector-126", "sector-128",
  "sector-132", "sector-135", "sector-137", "sector-143", "sector-150",
  "greater-noida-west", "knowledge-park", "alpha-1", "alpha-2", "omega",
  "chi-phi", "techzone-4", "noida-extension"
];

export async function generateStaticParams() {
  return LOCALITIES.map((locality) => ({
    locality,
  }));
}

export default function ServicesNoidaLocalityRedirect({ params }: { params: { locality: string } }) {
  redirect(`/noida/${params.locality}`);
}

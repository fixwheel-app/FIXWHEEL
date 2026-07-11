import { redirect } from "next/navigation";

const LOCALITIES = [
  "nit-faridabad", "sector-7", "sector-8", "sector-9", "sector-10",
  "sector-11", "sector-12", "sector-14", "sector-15", "sector-16",
  "sector-17", "sector-19", "sector-21", "sector-22", "sector-23",
  "sector-28", "sector-29", "sector-31", "sector-37", "sector-46",
  "sector-55", "sector-56", "sector-86", "sector-88", "sector-89",
  "old-faridabad", "ballabhgarh", "tigaon-road", "suraj-kund",
  "mewla-maharajpur", "bk-chowk", "bata-chowk", "ymca-chowk"
];

export async function generateStaticParams() {
  return LOCALITIES.map((locality) => ({
    locality,
  }));
}

export default function ServicesFaridabadLocalityRedirect({ params }: { params: { locality: string } }) {
  redirect(`/faridabad/${params.locality}`);
}

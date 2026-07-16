import { redirect } from "next/navigation";
import { LOCALITY_DB } from "../../../delhi/[locality]/localityData";

export async function generateStaticParams() {
  return Object.keys(LOCALITY_DB).map((locality) => ({
    locality,
  }));
}

export default function ServicesDelhiLocalityRedirect({ params }: { params: { locality: string } }) {
  redirect(`/delhi/${params.locality}`);
}

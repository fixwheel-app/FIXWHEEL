import { redirect } from "next/navigation";

const LOCALITIES: Record<string, string> = {
  "indirapuram": "Indirapuram",
  "vaishali": "Vaishali",
  "kaushambi": "Kaushambi",
  "raj-nagar-extension": "Raj Nagar Extension",
  "raj-nagar": "Raj Nagar",
  "vasundhara": "Vasundhara",
  "crossings-republik": "Crossings Republik",
  "abhay-khand": "Abhay Khand",
  "nyay-khand": "Nyay Khand",
  "shakti-khand": "Shakti Khand",
  "ahinsa-khand": "Ahinsa Khand",
  "shipra-suncity": "Shipra Suncity",
  "govindpuram": "Govindpuram",
  "loni": "Loni",
  "mohan-nagar": "Mohan Nagar",
  "sanjay-nagar": "Sanjay Nagar",
  "vijay-nagar": "Vijay Nagar",
  "gandhi-nagar": "Gandhi Nagar",
  "shastri-nagar": "Shastri Nagar",
  "nehru-nagar": "Nehru Nagar",
  "surya-nagar": "Surya Nagar",
  "dilshad-garden-border": "Dilshad Garden border",
  "nh-24": "NH-24",
  "gt-road": "GT Road",
  "hindon": "Hindon",
  "dasna": "Dasna"
};

export async function generateStaticParams() {
  return Object.keys(LOCALITIES).map((locality) => ({
    locality,
  }));
}

export default function ServicesGhaziabadLocalityRedirect({ params }: { params: { locality: string } }) {
  redirect(`/ghaziabad/${params.locality}`);
}

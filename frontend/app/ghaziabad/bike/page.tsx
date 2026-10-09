import BikeCityPage, { generateMetadata as bikeMetadata } from "@/components/BikeCityPage";
export function generateMetadata() { return bikeMetadata({ params: { city: "ghaziabad" } }); }
export default function Page() { return <BikeCityPage params={{ city: "ghaziabad" }} />; }

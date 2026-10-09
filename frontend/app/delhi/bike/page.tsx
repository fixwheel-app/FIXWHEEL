import BikeCityPage, { generateMetadata as bikeMetadata } from "@/components/BikeCityPage";
export function generateMetadata() { return bikeMetadata({ params: { city: "delhi" } }); }
export default function Page() { return <BikeCityPage params={{ city: "delhi" }} />; }

import BikeCityPage, { generateMetadata as bikeMetadata } from "@/components/BikeCityPage";
export function generateMetadata() { return bikeMetadata({ params: { city: "noida" } }); }
export default function Page() { return <BikeCityPage params={{ city: "noida" }} />; }

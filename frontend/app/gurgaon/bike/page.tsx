import BikeCityPage, { generateMetadata as bikeMetadata } from "@/components/BikeCityPage";
export function generateMetadata() { return bikeMetadata({ params: { city: "gurgaon" } }); }
export default function Page() { return <BikeCityPage params={{ city: "gurgaon" }} />; }

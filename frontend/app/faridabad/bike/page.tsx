import BikeCityPage, { generateMetadata as bikeMetadata } from "@/components/BikeCityPage";
export function generateMetadata() { return bikeMetadata({ params: { city: "faridabad" } }); }
export default function Page() { return <BikeCityPage params={{ city: "faridabad" }} />; }

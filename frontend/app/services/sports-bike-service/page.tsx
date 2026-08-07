import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sports Bike Service at Home | FixWheel",
  description:
    "Doorstep sports bike service Delhi NCR. Liquid cooling flush, synthetic oil change, chain alignment for Yamaha R15, MT-15, KTM RC, Apache RTR in Gurgaon, Delhi, Noida.",
  alternates: {
    canonical: "https://www.fixwheel.app/services/sports-bike-service",
  },
};

export default function SportsBikeServicePage() {
  return (
    <ServicePageTemplate
      serviceId="sports-bike-service"
      category="Sports & Track"
      title="Sports Bike Service at Doorstep in Delhi NCR"
      lead="High-revving liquid-cooled motorcycles like Yamaha R15, MT-15, KTM RC 200/390, and TVS Apache RTR need precise maintenance to deliver maximum acceleration and engine cooling."
      startingPrice="₹899"
      avgTime="45 Mins"
      warranty="15 Days Performance Warranty"
      descriptionParagraphs={[
        "Track-bred motorcycles operate at high RPMs and temperatures. Neglecting coolant levels, spark plug gaps, or drive chain alignment leads to loss of throttle response and engine overheating in city traffic.",
        "FixWheel provides doorstep sports bike servicing using Yamalube/Motul full synthetic sport-grade oils, coolant top-ups, radiator fin cleaning, and laser chain alignment across Delhi NCR.",
        "Our mechanics inspect VVA solenoids, electronic sensors, hydraulic disc brakes, and throttle bodies to ensure instant power delivery on demand.",
      ]}
      includedItems={[
        "Yamalube Full Synthetic Sport / Motul 7100 engine oil replacement",
        "Radiator cooling fins cleaning & high-performance coolant check",
        "Spark plug electrode gap check & electronic fuel injector scan",
        "Drive chain deep cleaning, laser alignment & high-tack spray lube",
        "Front & rear hydraulic disc brake pad wear check & fluid level test",
        "Slipper clutch free-play adjustment & throttle cable lube",
      ]}
      faqs={[
        {
          q: "Do you service Yamaha R15 V3/V4 and MT-15 at home?",
          a: "Yes! Yamaha R15, MT-15, FZ series, and KTM RC/Duke models are frequently serviced by our performance technicians.",
        },
        {
          q: "What engine oil is best for sports bikes in Delhi NCR?",
          a: "We recommend Yamalube Full Synthetic 10W-40 or Motul 7100 10W-40 100% Synthetic oil for smooth shifting and high-RPM protection.",
        },
        {
          q: "How long does doorstep sports bike servicing take?",
          a: "A full sports bike service takes approximately 45 to 55 minutes at your location.",
        },
      ]}
      keywords={[
        "sports bike service delhi",
        "yamaha r15 home service gurgaon",
        "mt15 doorstep service noida",
        "ktm rc 200 repair ghaziabad",
        "apache rtr 200 service faridabad",
        "sports bike mechanic near me",
      ]}
    />
  );
}

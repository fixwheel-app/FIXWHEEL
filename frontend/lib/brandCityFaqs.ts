export interface BrandCityFaq {
  q: string;
  a: string;
}

export function getBrandCityFaqs(
  brandName: string,
  cityName: string,
  localities: string[],
  isElectricBrand: boolean,
  parts: string,
  engineOil: string,
): BrandCityFaq[] {
  if (isElectricBrand) {
    return [
      { q: `How long does doorstep ${brandName} EV service take in ${cityName}?`, a: `Most EV inspections and minor repairs take 30 to 50 minutes at your home or office parking in ${cityName}. Model compatibility is confirmed before dispatch.` },
      { q: `What is checked during a ${brandName} EV service in ${cityName}?`, a: "The mechanic checks the BMS status, auxiliary battery voltage, charging port, accessible wiring, motor response, brakes, and tyres according to the reported issue." },
      { q: `Can you repair a sealed ${brandName} traction battery at my doorstep?`, a: "Doorstep work covers safe diagnostics and accessible systems. Sealed battery-pack and major motor repairs use our EV pick-and-drop service after quote approval." },
      { q: `Is there a warranty on ${brandName} EV service in ${cityName}?`, a: "FixWheel provides a 15-day labor and diagnostic warranty, plus the applicable manufacturer warranty on replacement components." },
      { q: `Which areas in ${cityName} do your ${brandName} EV mechanics cover?`, a: `We cover all major sectors, residential societies, and commercial hubs in ${cityName}, including ${localities.slice(0, 4).join(", ")}.` },
    ];
  }

  return [
    { q: `How long does doorstep ${brandName} service take in ${cityName}?`, a: `Routine periodic servicing and minor repairs for ${brandName} two-wheelers take 35 to 50 minutes at your home or office parking in ${cityName}. Our mobile mechanic arrives fully equipped within 45 minutes.` },
    { q: `Are 100% genuine ${brandName} spare parts used for doorstep repairs in ${cityName}?`, a: `Yes! We use sealed genuine OEM spare parts (${parts}). All replaced parts are inspected and handed over to you after servicing in ${cityName}.` },
    { q: `What engine oil grade is used for ${brandName} bikes & scooters in ${cityName}?`, a: `We use recommended ${brandName} specification oil (${engineOil}) or high-grade Motul / Yamalube synthetic blends in sealed bottles, replaced right in front of you.` },
    { q: `Is there a warranty on ${brandName} doorstep service in ${cityName}?`, a: `Yes, FixWheel provides a 15-day labor & diagnostic warranty on all ${brandName} doorstep repairs in ${cityName}, plus manufacturer warranties on replaced components.` },
    { q: `Which areas in ${cityName} do your ${brandName} mobile mechanics cover?`, a: `We cover all major sectors, residential societies, and commercial hubs in ${cityName} (${localities.slice(0, 4).join(", ")} and surrounding areas).` },
  ];
}

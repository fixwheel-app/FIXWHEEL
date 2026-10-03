export interface ScooterCityContent {
  additionalAreas?: string[];
  name: string;
  lead: string;
  description: string;
  whyTitle: string;
  why: string;
  bookingTip: string;
  coverage: string;
  preparation: [string, string][];
  faqs: { q: string; a: string }[];
}

// Locality names are drawn from CITIES_DB. Availability is confirmed per address.
export const SCOOTER_CITIES: Record<string, ScooterCityContent> = {
  gurgaon: {
    additionalAreas: ["Sushant Lok"],
    name: "Gurgaon",
    description: "Doorstep scooty repair in Gurgaon for Activa, Jupiter, Access and other scooters. Book starting, CVT, brake or puncture checks at home or office parking.",
    lead: "Scooter stuck in your society parking or refusing to start after work? Book doorstep scooty repair in Gurgaon (Gurugram) for your Activa, Jupiter, Access or Ntorq. Share your sector, building and scooter symptoms so we can arrange an inspection where the vehicle is parked.",
    whyTitle: "Keep your Gurgaon commute moving",
    why: "A scooter that shudders on takeoff needs a different check from one with a weak self-start. Whether you park around DLF, Golf Course Road or Sohna Road, describe when the problem happens: a cold start, acceleration or braking. The mechanic can then inspect the relevant system and explain the work before you approve it.",
    bookingTip: "For office visits around Cyber City or Udyog Vihar, share the building entrance and visitor-parking rules. For a society visit, include the tower, gate and security contact instructions.",
    coverage: "From DLF and Sushant Lok to Sohna Road, Palam Vihar and Manesar, get scooter servicing and repairs at your home or office parking. Book help for starting trouble, poor pickup, brake issues or a flat tyre across Gurgaon.",
    preparation: [["Office parking", "Check whether an outside mechanic can enter and whether the scooter can be inspected in the visitor area."], ["Society access", "Arrange gate permission and keep the key available. Mention basement parking when booking."], ["Starting or pickup trouble", "Describe whether the engine turns over or the scooter vibrates only when moving away."]],
    faqs: [
      { q: "Can you repair my scooter in a Gurgaon office car park?", a: "Request a visit with the office address, entry gate and parking location. Access permission and a suitable place to work are needed; the team confirms the visit before dispatch." },
      { q: "Do you cover DLF, Sohna Road and Palam Vihar?", a: "These areas are included in our Gurgaon service-area list. Share your exact address to confirm mechanic availability. A road name alone may not identify the correct entrance." },
      { q: "My Activa shudders when I leave the parking ramp. What should I book?", a: "Choose the jerks or vibration option and describe when it happens. CVT, clutch and belt condition may need inspection; the symptom alone does not confirm which part needs repair." },
      { q: "Can I get a quote before a scooter repair in Gurugram?", a: "Tell us the model and symptom when booking. The mechanic explains the diagnosis and proposed labour and parts charges before starting approved work." },
      { q: "Is an arrival time guaranteed across Gurgaon?", a: "The team confirms timing for your address and available mechanic. Traffic, security entry and the distance to your sector can affect arrival; do not treat a general site estimate as a guaranteed appointment." }
    ]
  },
  delhi: {
    additionalAreas: ["Safdarjung Enclave", "Greater Kailash", "Malviya Nagar", "Green Park", "South Extension", "Vasant Vihar", "Defence Colony", "Paschim Vihar", "Rajouri Garden", "Punjabi Bagh", "Shahdara"],
    name: "Delhi",
    description: "Scooty repair at home in Delhi: starting problems, battery assistance, CVT checks, brakes and punctures. Share your colony, block and scooter model to book.",
    lead: "Avoid pushing a non-starting scooter through your neighbourhood. Arrange scooty repair at home in Delhi for battery trouble, poor pickup, noisy brakes or a flat tyre. Give us your colony, block and nearest accessible landmark, and approve the proposed repair after inspection.",
    whyTitle: "A repair visit that fits your Delhi address",
    why: "A Dwarka sector address, a Janakpuri block and a lane in Karol Bagh need different arrival instructions. Share where your scooter is actually parked rather than only a nearby metro station. With the model and symptoms ready, you can request a focused inspection without first taking the vehicle to a workshop.",
    bookingTip: "If your lane is narrow or parking is restricted, describe an accessible meeting point. Do not ride a scooter with ineffective brakes or push it into traffic to meet the mechanic.",
    coverage: "Get doorstep scooty repair across Delhi, from Dwarka and Janakpuri to Rohini, Safdarjung Enclave and Greater Kailash. Whether your scooter needs routine servicing or help with a breakdown, we bring the inspection to your home or workplace.",
    preparation: [["Colony and block", "Include the full address, not just the neighbourhood or metro station name."], ["Safe working space", "Identify level parking away from moving traffic, with permission to carry out the inspection."], ["Model and symptoms", "Mention the model, whether self-start works, and any unusual sound or loss of braking."]],
    faqs: [
      { q: "Can I book scooty repair in Dwarka, Rohini or Vasant Kunj?", a: "These neighbourhoods appear in our Delhi service-area list. Send the complete sector or block address so the team can confirm availability and the visit location." },
      { q: "What if my scooter is in a narrow Delhi lane?", a: "Explain the access restriction when booking. The team can discuss a suitable inspection point; do not move an unsafe scooter onto a busy road." },
      { q: "Can you check an Activa that will not self-start at home?", a: "Yes, request a starting-system inspection. Describe whether the lights work and whether the starter turns. Battery, connection and ignition checks help identify the cause before a replacement is proposed." },
      { q: "Do I have to buy a battery if I request a jump start?", a: "A jump start and a battery replacement are different services. The mechanic should test and explain the findings; approve a replacement only after its need and price are explained." },
      { q: "How is the Delhi scooter repair price decided?", a: "The model, fault, required labour and any parts determine the quote. Ask for the proposed charges before work begins; a starting price is not a promise that every repair costs the same." }
    ]
  },
  noida: {
    additionalAreas: ["Gaur City", "Greater Noida", "Knowledge Park", "Alpha 1 & 2", "Techzone 4", "Sector 150"],
    name: "Noida",
    description: "Book scooty repair in Noida for society or office parking. Starting faults, scooter servicing, CVT, brakes and punctures with an inspection before repair.",
    lead: "Scooter not starting in the basement, or losing pickup on your daily ride? Request doorstep scooter repair in Noida with your sector, society or office name and parking details. From Activa battery checks to Jupiter servicing, the repair starts with an inspection and your approval.",
    whyTitle: "Scooter servicing without leaving your Noida society",
    why: "For a visit in Sector 62, the Sector 75–78 area or along the Expressway, a sector number is only the start of the address. Tower names, entry gates and basement access help the mechanic find the vehicle. Tell us whether you need planned servicing or help with a scooter that cannot be moved so the visit can be arranged appropriately.",
    bookingTip: "Greater Noida West is a separate location from central Noida. If that is your address, state it explicitly with the society and gate rather than entering only 'Noida'. Confirm availability before choosing a slot.",
    coverage: "Book scooter repair across Noida, Greater Noida and Greater Noida West, including Gaur City, Knowledge Park and Techzone 4. Get help with battery trouble, CVT issues, brakes and punctures at your society or office parking.",
    preparation: [["Basement details", "Tell us the parking level and whether mobile reception is available. Arrange an agreed meeting point at the gate if needed."], ["Office visits", "For Sector 62 or 63 offices, confirm visitor entry and the parking space where work is permitted."], ["Correct service address", "Distinguish Noida sectors from Greater Noida West and include the society name."]],
    faqs: [
      { q: "Can a mechanic visit my Noida society basement?", a: "Mention the basement level and entry rules when booking. A visit depends on permission, access and a suitable working space; agree a gate meeting point if phone reception is poor." },
      { q: "Do you take scooter service requests in Sector 137 and Sector 62?", a: "Both are represented in our Noida service-area list. Share the office or society address and confirm availability for your preferred time." },
      { q: "Should I select Noida for Greater Noida West?", a: "Make the full area name clear in your booking and speak to the team if the address selection is unclear. Greater Noida West should not be treated as the same location as a central Noida sector." },
      { q: "My Jupiter has poor pickup. Does it need a new belt?", a: "Not necessarily. Belt condition, CVT components, air intake and other systems may need checking. Book an inspection and approve parts only after the mechanic explains the cause." },
      { q: "Can I arrange servicing while I am at work?", a: "You can request an office-parking visit with permission and vehicle access arranged. Keep a way to approve the quote and review the completed work before payment." }
    ]
  },
  ghaziabad: {
    name: "Ghaziabad",
    description: "Doorstep scooty repair in Ghaziabad. Request battery, CVT, brake or puncture help in Indirapuram, Vaishali and other listed areas; confirm your exact address.",
    lead: "Flat tyre near home, weak brakes or an Activa that will not start? Request scooty repair in Ghaziabad without first moving the vehicle to a garage. Share your locality, sector or khand and a safe parking location for an inspection and a clear repair quote.",
    whyTitle: "Local directions matter for your Ghaziabad repair",
    why: "An Indirapuram khand, a Vaishali sector and an address near GT Road need precise directions. Include the building and entry point, especially if the scooter has stopped away from home. The mechanic checks whether the issue can be repaired at the location and explains any further work required.",
    bookingTip: "For a puncture, mention whether the tyre is tube or tubeless if you know. If you do not, share the scooter model. Avoid riding on a flat tyre or waiting in a traffic lane.",
    coverage: "Keep your scooter ready for everyday rides with doorstep repair across Ghaziabad, including Indirapuram and Vaishali. From a non-starting Activa to a puncture or noisy brakes, request an inspection at your home, workplace or safe roadside location.",
    preparation: [["Society location", "For Indirapuram or Vaishali, include the khand or sector as well as the apartment name."], ["Tyre condition", "Mention a flat tyre, repeated air loss or visible sidewall damage so the request describes the actual problem."], ["Roadside access", "Share a safe stopping point and a contact number. Do not continue riding with a flat tyre."]],
    faqs: [
      { q: "Can I request doorstep repair in Indirapuram or Vaishali?", a: "Yes, these areas are in the Ghaziabad service-area list. Include the khand or sector, society name and gate to confirm the visit." },
      { q: "Can every scooter puncture be repaired on-site?", a: "No. The mechanic must inspect the tyre, valve and damage. Some punctures are repairable, while sidewall damage or an unsuitable tyre condition may require a different solution." },
      { q: "What details help with a scooter breakdown near GT Road?", a: "Provide a nearby landmark, your direction of travel and the safe location where the scooter is parked. Confirm the meeting point with the team rather than waiting in moving traffic." },
      { q: "Can you check noisy brakes on my scooter?", a: "Request a brake inspection and describe the noise and braking performance. Adjustment or replacement depends on the condition of the pads, shoes, cables and related parts." },
      { q: "Will I know the Ghaziabad repair cost before work starts?", a: "The mechanic explains the proposed work and parts after inspection. Review the quote and approve it before repair; additional work should be discussed separately." }
    ]
  },
  faridabad: {
    name: "Faridabad",
    description: "Scooty repair at your doorstep in Faridabad. Book starting, servicing, brake, CVT or tyre checks with clear location details for NIT, sectors and Ballabgarh.",
    lead: "Arrange scooter repair at your home or workplace in Faridabad. Whether your Activa will not start, your Access feels sluggish or your Jupiter needs servicing, share the model, symptom and exact NIT, sector or Ballabgarh address before confirming the visit.",
    whyTitle: "A practical repair visit for Faridabad riders",
    why: "NIT blocks, established sectors and Greater Faridabad society addresses need more than a city name. Tell us the entry gate and where the scooter is parked, particularly for a workplace visit. A focused inspection separates routine maintenance from a specific starting, braking or transmission fault, so you understand what you are approving.",
    bookingTip: "For requests along the Ballabgarh stretch or in Greater Faridabad, include the complete neighbourhood and a nearby landmark. Confirm access and mechanic availability before relying on a general arrival estimate.",
    coverage: "Get scooter servicing and repair across Faridabad, from NIT and Sector 15 to Greater Faridabad and Ballabgarh. Arrange a doorstep visit for routine maintenance, starting problems, weak pickup or tyre trouble without first taking your scooter to a garage.",
    preparation: [["NIT and sector addresses", "Mention the block or sector, building number and nearby landmark rather than only Faridabad."], ["Workplace entry", "Check if a mechanic can enter the premises and where vehicle work is allowed."], ["Planned service or fault", "Say whether the scooter runs and needs maintenance or has a specific breakdown needing diagnosis."]],
    faqs: [
      { q: "Do you accept scooty repair requests in NIT and Ballabgarh?", a: "Both appear in our Faridabad service-area list. Send the full address so availability and arrival can be confirmed for your location." },
      { q: "Can I book in Greater Faridabad sectors?", a: "Requests from the listed Sector 85–89 area should include the society, tower and access instructions. The team confirms coverage for your exact address before the visit." },
      { q: "Should I book a service for a scooter that will not start?", a: "Describe it as a starting fault rather than only a routine service. Battery, electrical and ignition checks may be needed before the mechanic can recommend the correct repair." },
      { q: "Can scooter work be done at my Faridabad workplace?", a: "Request the visit after checking permission and a safe working area. Arrange access to the scooter and stay reachable to discuss the inspection and quote." },
      { q: "What if the repair cannot be finished at my doorstep?", a: "The mechanic should explain the limitation and recommended next step before further work. Some jobs need workshop equipment or parts that are not available during the first visit." }
    ]
  }
};

/** Editorial scope for individual service detail pages. Prices live in pricingData. */
export interface ServiceDetailContent {
  name: string;
  summary: string;
  included: string[];
  excluded: string[];
  steps: [string, string][];
  faqs: { q: string; a: string }[];
  electric?: boolean;
}

const quote = "The mechanic explains the finding and quotes any additional parts or repairs before work begins.";

export const SERVICE_DETAIL_CONTENT: Record<string, ServiceDetailContent> = {
  "service-engine-oil": {
    name: "Bike Service with Engine Oil",
    summary: "Combine routine two-wheeler maintenance with an engine oil and filter change at your location.",
    included: ["Routine safety and maintenance checks", "Engine oil drain and refill with the specified grade", "Oil filter replacement where applicable", "Chain cleaning and lubrication where applicable", "Brake, air filter and spark plug checks"],
    excluded: ["Repairs found during inspection", "Brake pads, battery and other replacement parts", "Engine repair or washing"],
    steps: [["Confirm the oil grade", "Check the vehicle model and manufacturer oil specification before opening the oil."], ["Inspect the vehicle", "Check brakes, chain and accessible routine maintenance points."], ["Change oil and filter", "Drain the old oil, replace the applicable filter and fill the specified quantity."], ["Check and hand over", "Check for leaks and explain the work and any separately quoted repairs."]],
    faqs: [{q:"Is engine oil included?",a:"Yes. This package includes engine oil and an oil filter as listed in the pricing catalog; confirm the grade and applicability for your model before booking."},{q:"Can I choose the oil grade?",a:"Use the grade specified for your vehicle. Confirm the product and any price difference before the service."},{q:"Are other replacement parts included?",a:"Other parts and repairs need a separate quote and your approval."}],
  },
  diagnosis: {
    name: "Book a Mechanic",
    summary: "Find the likely cause of a bike or scooter fault before approving a repair.",
    included: ["Discussion of the reported symptom", "Accessible mechanical and electrical checks", "Explanation of likely causes", "Advice on next steps and a separate repair quote"],
    excluded: ["Repair labour", "Replacement parts", "Workshop teardown or specialist testing"],
    steps: [["Describe the fault", "Explain when the symptom occurs and whether the vehicle starts."], ["Inspect relevant systems", "The mechanic checks accessible components related to the fault."], ["Review the finding", "Discuss the likely cause and whether workshop work is needed."], ["Approve next steps", "Request a separate quote before any repair begins."]],
    faqs: [{q:"Does the diagnosis fee include repairs?",a:"No. Repairs and parts are quoted separately."},{q:"What if the fault cannot be confirmed at the doorstep?",a:"The mechanic can explain the checks completed and recommend further workshop inspection."},{q:"Can I decline the repair?",a:"Yes. Review the diagnosis and separate quote before approving work."}],
  },
  "jump-start": {
    name: "Bike and Scooter Jump Start",
    summary: "Get help starting a two-wheeler with a discharged battery and check whether further attention is needed.",
    included: ["Attempted jump start using appropriate equipment", "Battery voltage check", "Accessible terminal and connection check", "Advice if the battery does not hold charge"],
    excluded: ["New battery", "Charging-system repair", "Towing or workshop work"],
    steps: [["Share the symptoms", "Tell us whether the lights, horn or starter respond."], ["Check connections", "Inspect accessible terminals and battery condition."], ["Attempt the start", "Use a suitable booster if the vehicle is safe to start."], ["Explain the result", "Discuss battery or charging checks and any separate quote." ]],
    faqs: [{q:"Does jump start include a new battery?",a:"No. Battery replacement is a separate service."},{q:"Will the bike start if the battery is damaged?",a:"A jump start cannot fix every starting fault. The mechanic may recommend diagnosis or battery replacement."},{q:"Can I book from the roadside?",a:"Share your exact location and vehicle details when requesting assistance."}],
  },
  puncture: {
    name: "Doorstep Two-Wheeler Puncture Repair",
    summary: "Request inspection and repair of an accessible tyre puncture at home, work or roadside.",
    included: ["Tyre and valve inspection", "Assessment of the puncture location", "Repair when the damage is suitable", "Inflation and pressure check"],
    excluded: ["New tyre or tube", "Wheel or rim repair", "Unsafe sidewall or extensive tyre damage"],
    steps: [["Share the tyre issue", "Tell us which wheel is affected and whether the tyre is tubeless."], ["Inspect the damage", "Locate the leak and check if a safe repair is possible."], ["Repair where suitable", "Repair the puncture or explain why replacement is needed."], ["Check pressure", "Inflate and check for continuing air loss."]],
    faqs: [{q:"Can every puncture be repaired?",a:"No. Sidewall damage, severe wear or a damaged rim may require replacement or workshop attention."},{q:"Does the price include a new tyre?",a:"No. A replacement tyre or tube is quoted separately."},{q:"Can you come to the roadside?",a:"Provide the exact location and tyre details when booking so availability can be confirmed."}],
  },
  "running-repair": {
    name: "Minor Bike Running Repair",
    summary: "Address small mechanical or electrical issues on a two-wheeler that can still be moved safely.",
    included: ["Symptom and accessible part inspection", "Minor adjustment where suitable", "Explanation of any part needed", "Post-work function check"],
    excluded: ["Replacement cables, levers and bulbs", "Engine overhaul", "Extensive fault diagnosis or workshop repair"],
    steps: [["Describe the issue", "Share the symptom and vehicle model."], ["Inspect the affected part", "The mechanic checks whether an on-site minor repair is suitable."], ["Approve the work", "Review any part or extra labour quote."], ["Test the result", "Check the repaired control or component before handover."]],
    faqs: [{q:"What counts as a minor repair?",a:"Simple adjustments and small accessible fixes may qualify; the mechanic confirms the scope after inspection."},{q:"Are replacement parts included?",a:"Parts are quoted separately before fitting."},{q:"What if the bike is unsafe to ride?",a:"Avoid riding it and describe the fault when booking; diagnosis or transport may be more suitable."}],
  },
  "carburetor-cleaning": {
    name: "Bike Carburetor Cleaning",
    summary: "Inspect and clean an accessible carburetor when dirt or blockage may affect starting or idling.",
    included: ["Carburetor and fuel-line symptom check", "Accessible bowl and jet cleaning where applicable", "Reassembly and idle check"],
    excluded: ["Replacement carburetor or fuel parts", "Fuel-injection repairs", "Engine or electrical fault repair"],
    steps: [["Confirm the system", "Check that the vehicle has a carburetor rather than fuel injection."], ["Assess the symptom", "Inspect for accessible blockage or leakage."], ["Clean applicable parts", "Clean and reassemble the carburetor components that can be serviced."], ["Check idle", "Run the engine safely and explain any unresolved fault."]],
    faqs: [{q:"Is this suitable for a fuel-injected bike?",a:"No. Fuel-injected vehicles need a different inspection."},{q:"Will cleaning fix every starting problem?",a:"No. Starting faults may also involve ignition, fuel supply or the battery."},{q:"Are replacement jets included?",a:"Replacement parts require a separate quote."}],
  },
  "obd-inspection": {
    name: "Two-Wheeler OBD Scanner Inspection",
    summary: "Read available electronic fault information on a compatible fuel-injected two-wheeler.",
    included: ["Compatibility and symptom check", "Available diagnostic code scan", "Explanation of readable fault codes", "Recommendation for physical checks or further repair"],
    excluded: ["Sensor replacement", "Mechanical repair", "A guaranteed diagnosis from codes alone"],
    steps: [["Check compatibility", "Confirm the model and available diagnostic connection."], ["Scan the system", "Read the fault information the vehicle makes available."], ["Interpret results", "Relate codes to the reported symptoms and any accessible checks."], ["Agree next steps", "Request a separate quote for repair or further testing."]],
    faqs: [{q:"Will the scanner work on every bike?",a:"No. Compatibility and the information available vary by model."},{q:"Does a fault code identify the exact failed part?",a:"Not always. A code can guide further physical testing."},{q:"Are repairs included?",a:"No. Repairs and replacement sensors are quoted separately."}],
  },
  "battery-replacement": {
    name: "Bike Battery Replacement Labour",
    summary: "Arrange fitting of a compatible two-wheeler battery after checking the vehicle's battery requirements.",
    included: ["Battery fitment and connection check", "Accessible terminal cleaning", "Starting check after installation"],
    excluded: ["Cost of the new battery", "Charging-system repair", "Other electrical parts"],
    steps: [["Confirm compatibility", "Check the vehicle model and suitable battery specification."], ["Review the battery quote", "Confirm battery cost separately from installation labour."], ["Fit and connect", "Install the approved battery and secure the terminals."], ["Test the start", "Check the result and explain any remaining electrical issue."]],
    faqs: [{q:"Is the battery included in the listed price?",a:"No. The catalog price is for installation labour; the battery is quoted separately."},{q:"Can I provide my own battery?",a:"Ask when booking so fitment and compatibility can be confirmed."},{q:"What if the new battery does not solve the problem?",a:"The charging or starting system may need separate diagnosis."}],
  },
  "disc-replacement": {
    name: "Bike Disc Brake Pad Replacement Labour",
    summary: "Inspect disc-brake wear and fit approved replacement pads where suitable.",
    included: ["Accessible pad and rotor inspection", "Brake-pad fitment labour", "Caliper function and lever check"],
    excluded: ["New brake pads or rotor", "Brake fluid and hydraulic repair", "Other brake-system parts"],
    steps: [["Inspect the brakes", "Check pad wear and accessible rotor condition."], ["Confirm parts", "Review the compatible pad choice and parts quote."], ["Fit the pads", "Replace the approved pads and check caliper movement."], ["Check operation", "Check brake feel before handover and explain any further issue."]],
    faqs: [{q:"Are brake pads included in the price?",a:"Confirm the parts quote separately before replacement."},{q:"Can a worn disc rotor be repaired with pads alone?",a:"No. The mechanic should inspect the rotor and quote any necessary additional work."},{q:"What if my bike has drum brakes?",a:"Describe the brake type when booking so the suitable service can be confirmed."}],
  },
  "chain-sprocket": {
    name: "Bike Chain and Sprocket Replacement Labour",
    summary: "Inspect a worn chain drive and fit an approved compatible chain and sprocket kit.",
    included: ["Chain and sprocket wear inspection", "Fitment labour for an approved kit", "Chain tension and alignment check"],
    excluded: ["New chain and sprocket kit", "Wheel-bearing or swingarm repair", "Other drivetrain parts"],
    steps: [["Inspect the drive", "Check chain stretch, sprocket wear and fitment needs."], ["Approve the kit", "Confirm compatibility and the parts quote."], ["Replace components", "Fit the agreed chain and sprockets."], ["Set and check", "Adjust tension and alignment and explain maintenance needs."]],
    faqs: [{q:"Does the listed price include the chain kit?",a:"Confirm the kit price separately; the catalog rate is a starting service price."},{q:"Should chain and sprockets be changed together?",a:"The mechanic inspects wear and recommends the suitable parts for your model."},{q:"Will chain cleaning alone solve a worn sprocket?",a:"No. A worn or damaged sprocket may need replacement."}],
  },
  "pick-drop": {
    name: "Two-Wheeler Pick and Drop",
    summary: "Arrange collection and return of a bike or scooter for work that needs a workshop.",
    included: ["Pickup coordination", "Vehicle handover and workshop transfer", "Return coordination after approved work"],
    excluded: ["Workshop diagnosis or repair", "Replacement parts", "Additional distance or special transport requirements unless quoted"],
    steps: [["Share the vehicle and location", "Describe whether the two-wheeler can be moved safely."], ["Confirm the transport quote", "Agree pickup, destination and return arrangements."], ["Hand over the vehicle", "Record its condition and transfer it for the approved work."], ["Review and receive", "Approve the workshop quote separately and arrange return after completion."]],
    faqs: [{q:"Does the pickup price include repairs?",a:"No. Workshop work and parts require a separate quote."},{q:"Can an immobile bike be collected?",a:"Describe the issue and access conditions so suitable transport can be confirmed."},{q:"When will the bike be returned?",a:"Timing depends on the approved repair and will be confirmed with you."}],
  },
  "oil-change": {
    name: "Bike Engine Oil Change",
    summary: "Request an oil change at your location with the oil grade and final price confirmed for your model.",
    included: ["Vehicle oil-specification check", "Old oil drain", "Refill with the approved oil", "Leak and level check"],
    excluded: ["Other routine service work", "Additional filters or parts unless quoted", "Engine repair"],
    steps: [["Confirm the oil", "Identify the specified grade and quantity for the vehicle."], ["Review the quote", "Confirm oil, filter if needed, and total price."], ["Drain and refill", "Change the oil with the approved product."], ["Check the result", "Check level and leaks before handover."]],
    faqs: [{q:"Is oil included in the displayed price?",a:"Confirm the oil product, quantity and total quote for your model when booking."},{q:"Is the oil filter changed too?",a:"Ask whether your model needs a filter and confirm its cost before work begins."},{q:"Which oil grade should I use?",a:"Follow your vehicle manufacturer's specification rather than choosing by brand alone."}],
  },
  "comprehensive-service": {
    name: "Comprehensive Bike Service",
    summary: "Request a broader inspection and maintenance quote tailored to your bike and its condition.",
    included: ["Vehicle condition assessment", "Review of brakes, chain, tyres and accessible controls", "Itemized maintenance plan before work"],
    excluded: ["Oil, filters and other consumables until quoted", "Replacement parts", "Major engine or workshop repairs"],
    steps: [["Describe the vehicle", "Share its model, service history and concerns."], ["Inspect key systems", "Identify maintenance and repair needs."], ["Approve an itemized quote", "Confirm oil, filters, parts and labour before work."], ["Complete approved work", "Review the result and any further recommendation."]],
    faqs: [{q:"Is engine oil included?",a:"Confirm the oil grade, quantity and itemized quote before booking this broader service."},{q:"Does this include an engine overhaul?",a:"No. Major engine work needs a separate assessment and quote."},{q:"Can I decline additional work?",a:"Yes. Additional work should begin only after you approve its quote."}],
  },
  "brake-repair": {
    name: "Bike Brake Repair",
    summary: "Have weak, noisy or uneven brakes inspected and receive a quote for the necessary repair.",
    included: ["Accessible brake inspection", "Assessment of pad or shoe wear and brake feel", "Explanation of recommended repair"],
    excluded: ["Replacement pads, shoes or fluid until quoted", "Rotor or hydraulic component replacement", "Other vehicle repairs"],
    steps: [["Describe the braking issue", "Tell us about noise, weak stopping or lever feel."], ["Inspect the system", "Check accessible pads or shoes and related components."], ["Approve the repair", "Review the parts and labour quote."], ["Check operation", "Inspect the completed brake work before handover."]],
    faqs: [{q:"Are brake pads included?",a:"Replacement parts are quoted after inspection."},{q:"Can I ride with weak brakes?",a:"Avoid riding a vehicle whose brakes do not stop safely; request inspection."},{q:"Does every squeal require new pads?",a:"No. Inspection is needed to identify the cause."}],
  },
};

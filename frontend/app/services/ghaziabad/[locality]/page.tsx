import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
// Imported as required by the specifications, root layout handles global rendering.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export async function generateMetadata({ params }: { params: { locality: string } }): Promise<Metadata> {
  const localityName = LOCALITIES[params.locality];
  if (!localityName) return {};

  return {
    title: `Bike Repair at Home in ${localityName}, Ghaziabad | FixWheel`,
    description: `Doorstep bike repair in ${localityName}, Ghaziabad. Verified mechanics at your home or office in ${localityName} & surrounding areas. Starting ₹499.`,
    alternates: {
      canonical: `https://www.fixwheel.app/services/ghaziabad/${params.locality}`,
    },
  };
}

export default function GhaziabadLocalityPage({ params }: { params: { locality: string } }) {
  const localityName = LOCALITIES[params.locality];
  if (!localityName) {
    notFound();
  }

  const whyChoosePoints = [
    {
      title: "Verified Mechanics",
      desc: "Every technician on our platform goes through background checks and skills training, ensuring your ride is in expert hands."
    },
    {
      title: "Transparent Upfront Pricing",
      desc: "Receive exact price quotes before work begins. No hidden margins, no surprise fees, and absolute honesty."
    },
    {
      title: "45-Minute Rapid Response",
      desc: `Once booked, our nearest mobile mechanic is dispatched to reach your location in ${localityName} within 45 minutes.`
    },
    {
      title: "Convenient Doorstep Service",
      desc: "Servicing done at your residential parking, office basement, or the roadside. No pushing your bike to local garages."
    }
  ];

  const services = [
    {
      name: "Basic Service",
      desc: "Brake adjustment, chain lubrication, air filter check, spark plug cleaning, and general electric checkups.",
      link: "/services/basic-service"
    },
    {
      name: "Engine Oil Change",
      desc: "Draining old oil, engine flushing, refilling with fresh OEM-grade oil, and chain lubrication.",
      link: "/services/oil-change"
    },
    {
      name: "Engine Repair",
      desc: "Complete engine fault diagnostics, half or full engine repairs, and tuning by verified experts.",
      link: "/services/engine-repair"
    },
    {
      name: "Tyre Replacement",
      desc: "Emergency flat tyre repairs, punctures, or complete replacement with warranty-backed tyres on the spot.",
      link: "/services/tyre-replacement"
    },
    {
      name: "Brake Repair",
      desc: "Replacing worn-out brake pads/shoes, cable adjustments, and clutch tuning for seamless braking.",
      link: "/services/brake-repair"
    },
    {
      name: "Battery Replacement",
      desc: "On-site battery health diagnostics, jump-starts, and replacement with long-life warranty batteries.",
      link: "/services/battery-replacement"
    },
    {
      name: "General Washing",
      desc: "Detailed pressure washing, cleaning, detailing, and polish finish at your convenience.",
      link: "/services/general-washing"
    },
    {
      name: "Comprehensive Service",
      desc: "Full top-to-bottom bike maintenance service package covering all mechanical and electrical parts.",
      link: "/services/comprehensive-service"
    }
  ];

  // Interlinking: List other localities in Ghaziabad
  const otherLocalities = Object.entries(LOCALITIES)
    .filter(([key]) => key !== params.locality)
    .map(([key, value]) => ({ slug: key, name: value }));

  const faqs = [
    {
      q: `Do you offer bike repair at home in ${localityName} Ghaziabad?`,
      a: `Yes, we cover all blocks and sectors of ${localityName} for doorstep bike repair and servicing.`
    },
    {
      q: `How quickly can a mechanic reach me in ${localityName}?`,
      a: `Our mobile mechanics are stationed locally and can reach most parts of ${localityName} within 45 minutes of booking confirmation.`
    },
    {
      q: `What is the cost of doorstep bike service in ${localityName}?`,
      a: `Doorstep bike service in ${localityName} starts from ₹499 depending on your two-wheeler model and the service package selected.`
    },
    {
      q: `Do you use genuine parts for repairs in ${localityName}?`,
      a: `Yes, we only use genuine OEM-grade replacement parts, and all replacement work comes with our quality assurance.`
    }
  ];

  return (
    <div className="bg-[#151b24] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[#1f2631]/40 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest text-[10px]">
              <span>Ghaziabad Locality Service</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Doorstep Bike Repair Service in <span className="text-accent">{localityName}</span>
            </h1>
            <div className="text-text-secondary text-sm md:text-base leading-relaxed space-y-4 max-w-3xl">
              <p>
                If you reside in Ghaziabad and are looking for a reliable, convenient way to keep your bike serviced, FixWheel is your perfect solution. We offer on-demand, doorstep bike repair services across all major localities in Ghaziabad, bringing professional-grade mechanics to your doorstep. You don't have to navigate heavy traffic to find a local garage — we perform all services right where you are in {localityName}.
              </p>
              <p>
                Our coverage spans across Indirapuram, Vaishali, Vasundhara, and Raj Nagar Extension. Our verified mechanics are skilled in servicing all scooter and motorcycle brands, utilizing genuine parts and transparent pricing structures to ensure complete peace of mind in {localityName}.
              </p>
              <p>
                From routine servicing and oil changes to unexpected breakdowns or battery replacements, FixWheel is on call to help. Choose your service online, specify your location, and enjoy premium vehicle care without leaving your home.
              </p>
            </div>
            <div className="pt-4">
              <Link 
                href="/book"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-accent/20"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-[#151b24] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Why FixWheel</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Why Choose Us in {localityName}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoosePoints.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-[#1f2631]/80 border border-white/5">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div className="space-y-1">
                  <h3 className="font-bold text-white uppercase text-sm tracking-wide">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-16 bg-[#1f2631]/20 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Services Catalog</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Our Doorstep Offerings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div key={idx} className="bg-[#1f2631] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-accent/35 transition-all">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide leading-tight">{item.name}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-5 mt-auto border-t border-white/5">
                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-red-400 font-bold uppercase tracking-wider text-[10px]"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas We Cover in Ghaziabad Section */}
      <section className="py-16 bg-[#151b24] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center md:text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Other Localities</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Other Areas We Cover in Ghaziabad</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {otherLocalities.map((item, idx) => (
              <Link
                key={idx} 
                href={`/services/ghaziabad/${item.slug}`}
                className="bg-[#1f2631]/80 hover:bg-accent/10 border border-white/5 hover:border-accent/30 text-text-secondary hover:text-accent font-bold uppercase tracking-wider text-[11px] px-3.5 py-2 rounded-lg transition-all"
              >
                📍 {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#1f2631]/20 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Help Center</span>
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight mt-1">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#151b24]/40 border border-white/5 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-bold text-sm md:text-base uppercase tracking-wider cursor-pointer list-none select-none text-white">
                  <span>{faq.q}</span>
                  <span className="text-accent group-open:rotate-45 transition-transform duration-200 text-lg shrink-0 ml-4 font-mono">+</span>
                </summary>
                <p className="text-text-secondary text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-t from-[#151b24] to-[#1f2631]/30 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
            Ready to book your doorstep service?
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto">
            Get your scooter or motorcycle repaired by certified experts without leaving your office or home parking space.
          </p>
          <div className="pt-2">
            <Link 
              href="/book"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-lg shadow-accent/20"
            >
              <span>Book Your Service Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

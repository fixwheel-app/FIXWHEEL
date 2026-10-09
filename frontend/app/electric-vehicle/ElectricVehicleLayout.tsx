"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { getBrandLogo } from "@/lib/brandLogos";
import { getPageVariables } from "@/lib/pageVariables";
import { getServicePricing, type ServicePriceId } from "@/lib/pricingData";
import type { ServicePageProps } from "@/components/ServicePageTemplate";
import "../scooty-repair/scooty-reference.css";

const symptoms = [
  ["starting", "Won’t switch on or enter ready mode", "Share the dashboard message, battery level and when the issue started. The inspection will help identify the next step."],
  ["charging", "Not charging or reduced range", "Tell us whether the charger connects, any warning shown and your recent charging experience. Keep the charger available for the visit."],
  ["warning", "Dashboard warning or error code", "Send the exact error code and your model. Diagnostic support depends on compatibility with your vehicle."],
  ["brakes", "Weak or noisy brakes", "Describe any change in braking or lever feel. The mechanic checks the braking system before recommending work."],
  ["tyre", "Flat tyre or air loss", "Share which tyre is affected and park in a safe place. Tell us your model and location when requesting assistance."],
  ["other", "Routine maintenance or another issue", "Share the make, model and symptoms so the team can confirm the appropriate service before booking."],
];
const services: { title: string; description: string; priceId?: ServicePriceId }[] = [
  { title: "Electric scooter general service", description: "Routine EV checks and servicing, with support confirmed for your model.", priceId: "ev-service" },
  { title: "EV jump start", description: "Assistance for a discharged auxiliary battery, where compatible. This does not recharge the traction battery.", priceId: "jump-start" },
  { title: "Tyre and puncture support", description: "Tyre pressure, valve and puncture checks at your parking spot or a safe roadside location.", priceId: "puncture" },
  { title: "Running repairs", description: "Minor mechanical adjustments and repairs. Parts and additional work are quoted separately.", priceId: "running-repair" },
  { title: "EV diagnostics", description: "Dashboard errors, starting trouble and external electrical checks, subject to model compatibility." },
  { title: "Battery and charging checks", description: "Charging symptoms, accessible connections and battery-health diagnostics supported by your model." },
  { title: "Motor and drive inspection", description: "Noise, vibration or poor response: inspection of the relevant drive components." },
  { title: "Brake servicing", description: "Brake wear and adjustment checks, with replacement parts quoted before installation." },
  { title: "Sensors and wiring", description: "Inspection of accessible wiring, throttle inputs and safety interlocks where supported." },
];
const brands = [
  { name: "Ola Electric", slug: "ola-electric", models: "S1 range" },
  { name: "Ather", slug: "ather", models: "450 range" },
  { name: "TVS", slug: "tvs-ev", models: "iQube" },
  { name: "Bajaj", slug: "bajaj-ev", models: "Chetak" },
];
const cities = ["Gurgaon", "Delhi", "Noida", "Ghaziabad", "Faridabad"];

export default function ElectricVehicleLayout({ service, bikesServiced, rating }: { service: ServicePageProps; bikesServiced: string; rating: number }) {
  const [selected, setSelected] = useState("");
  const [variables, setVariables] = useState({ startingPrice: service.startingPrice, avgTime: service.avgTime, warranty: service.warranty });
  useEffect(() => {
    getPageVariables("services/electric-scooter-repair", "global", {
      defaultPrice: service.startingPrice, defaultAvgTime: service.avgTime, defaultWarranty: service.warranty, useGlobalOverrides: false,
    }).then(setVariables);
  }, [service.startingPrice, service.avgTime, service.warranty]);
  const tip = symptoms.find(([key]) => key === selected)?.[2];
  return <div className="scooty-reference" data-theme="light">
    <div className="crumbs"><div className="wrap"><a href="/">Home</a> &nbsp;/&nbsp; <span>Electric Vehicle Repair</span></div></div>
    <div className="hero"><div className="wrap">
      <div><span className="tag">Electric two-wheeler care</span><h1>Doorstep EV &amp; Electric Repair in Delhi NCR</h1>
        <p className="lead">Charging trouble, a dashboard warning or brakes that need attention? Book an inspection for your electric scooter or bike at home or work across Delhi, Gurgaon, Noida, Ghaziabad and Faridabad. Share your model so we can confirm the right support.</p>
        <div className="cta-row"><a className="btn btn-red" href="/book">Book EV service</a><a className="btn btn-ghost" href="tel:+918745945682">Call mechanic</a></div>
      </div>
      <section className="picker" aria-labelledby="ev-picker" style={{ padding: 20 }}><h2 id="ev-picker">What does your EV need?</h2><p>Select the issue you’re noticing.</p>
        <fieldset><legend className="sr-only">Choose your electric vehicle’s issue</legend>{symptoms.map(([key, label]) => <label className="opt" key={key}><input type="radio" name="ev-symptom" value={key} checked={selected === key} onChange={() => setSelected(key)} /><span>{label}</span></label>)}</fieldset>
        <div aria-live="polite">{tip && <div className="box">{tip}</div>}</div><a className="btn btn-red" href="/book">Book an EV inspection</a>
      </section>
    </div></div>
    <div className="stats"><div className="wrap"><div><b>{variables.avgTime}</b><small>Doorstep arrival</small></div><div><b>{rating} ★</b><small>FixWheel customer rating</small></div><div><b>{bikesServiced}+</b><small>Two-wheelers serviced across Delhi NCR</small></div><div><b>{variables.warranty}</b><small>EV service warranty</small></div></div></div>
    <section><div className="wrap"><div className="sec-head"><h2>How doorstep EV service works</h2><p>A clear diagnosis, an approved quote and payment after the job.</p></div><div className="steps">
      {[["Tell us about your EV", "Share the make, model, symptoms and complete address."], ["Confirm the visit", "The team checks service compatibility and arranges your mechanic."], ["Inspect and approve", "Review the diagnosis and quote before any repair or replacement."], ["Check and pay", "Check the completed work and pay after the service."]].map(([title, text]) => <div className="step" key={title}><h3>{title}</h3><p>{text}</p></div>)}
    </div></div></section>
    <section className="alt"><div className="wrap"><div className="sec-head"><h2>EV services at your doorstep</h2><p>Service availability depends on your model, diagnostic compatibility and the work required.</p><div className="from"><span>EV service starts from</span><b>{variables.startingPrice}</b></div></div>
      <div className="grid3">{services.map(({ title, description, priceId }) => {
        const price = priceId ? getServicePricing(priceId).prices.electric : undefined;
        return <article className="svc" key={title}><div><h3>{title}</h3><p>{description}</p><span className="price">{typeof price === "number" ? `From ₹${price.toLocaleString("en-IN")}` : "Quote after inspection"}</span></div><a href="/book">{priceId ? "Book service →" : "Request inspection →"}</a></article>;
      })}</div>
      <div className="all"><p>Rates are from the Electric EV price list. Parts and additional repairs are quoted for approval before work begins.</p><a className="btn" href="/pricing">View full price list →</a></div>
    </div></section>
    <section><div className="wrap two"><div><h2>Care built around your electric ride</h2><p style={{ color: "var(--muted)", marginTop: 14 }}>An EV has different service needs from a petrol scooter. Tell us about charging behaviour, range changes, warning messages or unusual noises so the mechanic can focus the inspection on the relevant systems.</p>
      <ul className="checks">{service.includedItems.map(item => <li key={item}>{item}</li>)}</ul>
      <p style={{ color: "var(--muted)", marginTop: 20 }}>Doorstep work focuses on safe diagnostics and accessible systems. Sealed battery-pack repair requires an appropriate specialist process; model-specific support is confirmed before the visit.</p>
    </div><aside className="spec"><h3>Service specifications</h3><dl><div><dt>Coverage</dt><dd>Delhi, Gurgaon, Noida, Ghaziabad and Faridabad</dd></div><div><dt>Arrival</dt><dd>{variables.avgTime}</dd></div><div><dt>Starting price</dt><dd>{variables.startingPrice}</dd></div><div><dt>Warranty</dt><dd>{variables.warranty}</dd></div><div><dt>Before work begins</dt><dd>Approve the diagnosis, repair and parts quote</dd></div><div><dt>Payment</dt><dd>After the service is completed</dd></div></dl><a className="btn btn-red" href="/book">Book this service</a></aside></div></section>
    <section className="alt"><div className="wrap"><div className="sec-head"><h2>EV brands we serve</h2><p>Popular electric scooters, with service support confirmed for your exact model.</p></div><div className="brands">{brands.map(brand => <a className="brand" href={"/" + brand.slug} key={brand.slug}><img src={getBrandLogo(brand.name)} alt={brand.name + " logo"} width={36} height={36} loading="lazy" /><span><b>{brand.name}</b><small>{brand.models}</small></span></a>)}</div>
      <p className="other-models">Ride another electric scooter or an electric bike? Share your brand, model and issue when booking so we can confirm compatibility and service availability.</p><div className="more"><a href="/bike">Bike</a><a href="/scooty-repair">Scooty &amp; Scooter</a><a href="/royal-enfield">Cruiser/Bullet</a><a href="/premium-bike-service">Premium Bike</a><a href="/sports-bike-service">Sport Bike</a></div>
    </div></section>
    <section><div className="wrap"><div className="sec-head"><h2>Electric vehicle repair: your questions</h2></div><div className="faq">{service.faqs.map((faq, i) => <details key={faq.q} open={i === 0}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    <section className="reviews"><div className="wrap"><div className="sec-head"><h2>Before your EV mechanic visit</h2><p>A few details help us arrange the right inspection.</p></div><div className="grid3">{[["Keep your model details ready", "Share the exact model and any recent service or repair history."], ["Share the warning or symptom", "Send a photo of the dashboard message or explain when the issue occurs."], ["Choose an accessible parking spot", "Provide the building entrance and parking location. Keep your keys and charger available."]].map(([title, text]) => <article className="rev" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="final"><div className="wrap"><div><h2>Let’s get your electric ride moving</h2><p>Call, WhatsApp or email with your EV model, symptoms and location. We’ll help you choose the next step and confirm the service before booking.</p><div className="cta-row"><a className="btn btn-red" href="/book">Book now</a><a className="btn btn-ghost" href="tel:+918745945682">Call mechanic</a></div></div><div className="contacts">
      <a href="tel:+918745945682"><span className="ic"><Phone size={18} /></span><span><b>+91 87459 45682</b><small>Call us between 8 AM and 10 PM</small></span></a>
      <a href="https://wa.me/918745945682"><span className="ic"><MessageCircle size={18} /></span><span><b>WhatsApp us</b><small>Share your model and issue</small></span></a>
      <a href="mailto:support@fixwheel.app"><span className="ic"><Mail size={18} /></span><span><b>support@fixwheel.app</b><small>Replies within 2 hours</small></span></a>
    </div></div></section>
    <section><div className="wrap"><div className="sec-head"><h2>Book doorstep EV repair by city</h2></div><div className="cities">{cities.map(city => <a key={city} href={`/${city.toLowerCase()}/services/electric-scooter-repair`}>{city}</a>)}</div></div></section>
  </div>;
}

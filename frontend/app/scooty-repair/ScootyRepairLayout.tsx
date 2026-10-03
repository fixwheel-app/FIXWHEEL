"use client";

import { useState } from "react";
import "./scooty-reference.css";
import type { ScooterCityContent } from "./cityContent";

const tips: Record<string, string[]> = {
  starting:["Likely a weak battery, fouled spark plug or loose starter relay.","We carry a multimeter, jump-starter, spare plugs and batteries."],
  vibration:["Usually clutch dust, worn variator rollers or glazed clutch shoes in the CVT.","We clean and resurface the CVT parts on the spot."],
  pickup:["Often a dirty air filter, worn belt or clogged CVT.","A tune-up with CVT and air filter cleaning usually restores it."],
  brakes:["Worn pads or shoes, or loose cables, are the usual causes.","We adjust or replace them and lubricate the cables."],
  tyre:["Tubeless punctures can be repaired right where you are.","We also check tyre pressure and the valve."],
  other:["Not sure what’s wrong? That’s fine.","Book a ₹199 diagnosis and the mechanic will explain what he finds before any work."]
};

export default function ScootyRepairLayout({ bikesServiced, rating, city, areas = [] }: { bikesServiced: string; rating: number; city?: ScooterCityContent; areas?: string[] }) {
 const [selected, setSelected] = useState("");
 const citySlug = city?.name.toLowerCase();
 const vehicleHref = (path: string) => citySlug ? path + "/" + citySlug : path;
 return <div className="scooty-reference" data-theme="light">




<div className="crumbs"><div className="wrap"><a href="/">Home</a> &nbsp;/&nbsp; {city ? <><a href="/scooty-repair">Scooty &amp; Scooter Repair</a> &nbsp;/&nbsp; <span>{city.name}</span></> : <span>Scooty &amp; Scooter Repair</span>}</div></div>

{/* 1. HERO */}
<div className="hero">
  <div className="wrap">
    <div>
      <span className="tag">Scooter &amp; CVT specialist</span>
      <h1>Doorstep Scooty &amp; Scooter Repair in {city?.name || "Delhi NCR"}</h1>
      <p className="lead">{city?.lead || "Honda Activa, TVS Jupiter, Suzuki Access or TVS Ntorq giving you trouble? Get scooter repair at your home or office in Delhi, Gurgaon, Noida, Ghaziabad and Faridabad. Tell us what you’re noticing, approve the repair price, and pay after the service."}</p>
      <div className="cta-row">
        <a className="btn btn-red" href="/book">Book doorstep service</a>
        <a className="btn btn-ghost" href="tel:+918745945682">Call mechanic</a>
      </div>
    </div>
    <section className="picker" aria-labelledby="pk" style={{"padding":"20px"}}>
      <h2 id="pk">What is your scooty doing?</h2>
      <p>Select a problem for the next step.</p>
      <fieldset onChange={(event) => setSelected((event.target as HTMLInputElement).value)}>
        <legend className="sr" style={{"position":"absolute","left":"-9999px"}}>Choose your scooter’s symptom</legend>
        <label className="opt"><input type="radio" name="s" value="starting" /><span>Won’t start</span></label>
        <label className="opt"><input type="radio" name="s" value="vibration" /><span>Jerks or vibrates</span></label>
        <label className="opt"><input type="radio" name="s" value="pickup" /><span>Poor pickup or mileage</span></label>
        <label className="opt"><input type="radio" name="s" value="brakes" /><span>Weak or noisy brakes</span></label>
        <label className="opt"><input type="radio" name="s" value="tyre" /><span>Flat tyre or air loss</span></label>
        <label className="opt"><input type="radio" name="s" value="other" /><span>Something else</span></label>
      </fieldset>
      <div id="result" aria-live="polite" aria-atomic="true">{selected && <div className="box"><b>{tips[selected][0]}</b><br />{city && selected === "other" ? "Request an inspection. The mechanic will explain the findings and quote before any repair." : tips[selected][1]}</div>}</div>
      <a className="btn btn-red" href="/book">Book scooter repair</a>
    </section>
  </div>
</div>

{/* 2. TRUST STATS */}
<div className="stats"><div className="wrap">
  <div><b>45 Mins</b><small>Doorstep arrival</small></div>
  <div><b>{rating} ★</b><small>{city ? "Delhi NCR customer rating" : "Customer rating"}</small></div>
  <div><b>{bikesServiced}+</b><small>{city ? "Bikes serviced across Delhi NCR" : "Bikes serviced"}</small></div>
  <div><b>15 Days</b><small>Labor warranty</small></div>
</div></div>

{/* 3. HOW IT WORKS */}
<section>
  <div className="wrap">
    <div className="sec-head"><h2>{city ? "Booking scooter repair in " + city.name : "How doorstep scooty service works"}</h2><p>Four steps, and you pay only after the job is done.</p></div>
    <div className="steps">
      <div className="step"><h3>Book your service</h3><p>{city ? "Share your scooter model, symptom and full address in " + city.name + ". Confirm the visit time with the team." : "Select your bike, required service, location, date and preferred time."}</p></div>
      <div className="step"><h3>Mechanic assigned</h3><p>FixWheel confirms your booking and assigns a verified mechanic near you.</p></div>
      <div className="step"><h3>Doorstep service</h3><p>The mechanic arrives with tools, inspects your vehicle and completes the approved work.</p></div>
      <div className="step"><h3>Review &amp; pay</h3><p>Check the completed service and pay only after the job is finished.</p></div>
    </div>
  </div>
</section>

{/* 4. SERVICES */}
<section className="alt" id="services">
  <div className="wrap">
    <div className="sec-head"><h2>{city ? "Scooter repair options in " + city.name : "Services we provide across Delhi NCR"}</h2><p>Transparent pricing for periodic servicing, CVT tuning and emergency breakdown repairs. <a href="/pricing" style={{"color":"var(--accent)","fontWeight":"700"}}>View full price list</a></p></div>
    <div className="grid3">
      <div className="svc"><div><h3>Basic scooter service</h3><p>Oil, spark plug, air filter and brake checks.</p><span className="price">{"From ₹550"}</span></div><a href="/services/basic-service">View service</a></div>
      <div className="svc"><div><h3>Jump start</h3><p>Fast battery assistance for a drained or dead scooter battery.</p><span className="price">{"From ₹399"}</span></div><a href="/book">View service</a></div>
      <div className="svc"><div><h3>CVT and clutch inspection</h3><p>For vibration, shuddering or weak pickup.</p><span className="price">{"From ₹199 (inspection)"}</span></div><a href="/book">View service</a></div>
      <div className="svc"><div><h3>Brake repair</h3><p>Pads, shoes and cable adjustment.</p><span className="price">{"From ₹199"}</span></div><a href="/services/brake-repair">View service</a></div>
      <div className="svc"><div><h3>Battery and self-start</h3><p>Battery testing, terminals and starter checks.</p><span className="price">{"From ₹99"}</span></div><a href="/services/battery-replacement">View service</a></div>
      <div className="svc"><div><h3>Puncture and tyre repair</h3><p>Tyre inspection and roadside puncture support.</p><span className="price">{"From ₹399"}</span></div><a href="/pricing">View service</a></div>
    </div>
    <div className="all"><p>Looking for a different repair? Browse the complete service list.</p><a className="btn" href="/services">View all services</a></div>
  </div>
</section>

{/* 5. WHY / INCLUDED + SPECS */}
<section>
  <div className="wrap two">
    <div>
      <h2 style={{"fontSize":"clamp(24px,3.6vw,32px)"}}>{city?.whyTitle || "Why choose doorstep scooty & scooter repair in Delhi NCR?"}</h2>
      <p style={{"color":"var(--muted)","margin":"14px 0 0"}}>{city?.why || "Starting trouble, vibration on takeoff and weak pickup can have different causes. A doorstep inspection helps identify what your scooter needs before you approve the work. The mechanic explains the recommended repair and quotes any required parts before installation."}</p>
      <ul className="checks">
        <li>CVT variator roller cleaning, degreasing &amp; belt wear check</li>
        <li>Clutch shoe face sanding to eliminate takeoff acceleration shudder</li>
        <li>Spark plug electrode cleaning, testing &amp; gap adjustment</li>
        <li>Drum brake shoe / disc pad adjustment &amp; cable lubrication</li>
        <li>Air filter element dust cleaning &amp; tire pressure check</li>
      </ul>
      <p style={{"color":"var(--muted)","margin":"20px 0 0","fontSize":"15px"}}>{city?.bookingTip || "Keep your model name and a short description of the problem ready when booking. Tell us if the scooter starts, and whether you are at home, at work or stranded on the road."}</p>
    </div>
    <aside className="spec">
      <h3>Service specifications</h3>
      <dl>
        <div><dt>Service coverage</dt><dd>{city ? city.name + " — confirm your exact address" : "Delhi NCR (Delhi, Gurgaon, Noida, Ghaziabad, Faridabad)"}</dd></div>
        <div><dt>Arrival duration</dt><dd>{city ? "45 minutes at your doorstep" : "25 – 45 minutes at your doorstep"}</dd></div>
        <div><dt>Parts policy</dt><dd>100% sealed OEM parts &amp; cables</dd></div>
        <div><dt>Warranty</dt><dd>15 days labor warranty</dd></div>
        <div><dt>Payment mode</dt><dd>UPI, card, cash after job completion</dd></div>
      </dl>
      <a className="btn btn-red" href="/book">Book this service</a>
    </aside>
  </div>
</section>

{/* 6. BRANDS */}
<section className="alt">
  <div className="wrap">
    <div className="sec-head"><h2>Brands we serve</h2><p>{city ? "Activa, Jupiter, Access, Ntorq and other scooter models: tell us your model when arranging a visit in " + city.name + "." : "Popular gearless scooter brands serviced across Delhi NCR with 100% genuine parts."}</p></div>
    <div className="brands">
      <a className="brand" href="/honda"><img src="https://www.google.com/s2/favicons?domain=honda2wheelersindia.com&amp;sz=64" alt="Honda logo" width={36} height={36} loading="lazy" /><span><b>Honda</b><small>Activa, Dio, Grazia</small></span></a>
      <a className="brand" href="/tvs"><img src="https://www.google.com/s2/favicons?domain=tvsmotor.com&amp;sz=64" alt="TVS logo" width={36} height={36} loading="lazy" /><span><b>TVS</b><small>Jupiter, Ntorq, Scooty Zest</small></span></a>
      <a className="brand" href="/suzuki"><img src="https://www.google.com/s2/favicons?domain=suzukimotorcycle.co.in&amp;sz=64" alt="Suzuki logo" width={36} height={36} loading="lazy" /><span><b>Suzuki</b><small>Access 125, Burgman Street, Avenis</small></span></a>
      <a className="brand" href="/hero"><img src="https://www.google.com/s2/favicons?domain=heromotocorp.com&amp;sz=64" alt="Hero logo" width={36} height={36} loading="lazy" /><span><b>Hero</b><small>Pleasure+, Maestro, Destini, Xoom</small></span></a>
      <a className="brand" href="/yamaha"><img src="https://www.google.com/s2/favicons?domain=yamaha-motor-india.com&amp;sz=64" alt="Yamaha logo" width={36} height={36} loading="lazy" /><span><b>Yamaha</b><small>RayZR, Fascino, Aerox 155</small></span></a>
      <a className="brand" href="/vespa"><img src="https://www.google.com/s2/favicons?domain=vespa.in&amp;sz=64" alt="Vespa logo" width={36} height={36} loading="lazy" /><span><b>Vespa</b><small>VXL, SXL, ZX 125/150</small></span></a>
      <a className="brand" href="/aprilia"><img src="https://www.google.com/s2/favicons?domain=apriliaindia.com&amp;sz=64" alt="Aprilia logo" width={36} height={36} loading="lazy" /><span><b>Aprilia</b><small>SR 125/160, SXR 125/160</small></span></a>
    </div>
    <p className="other-models">Other scooty or scooter models? Share your brand and model when booking so we can confirm the right service for your vehicle.</p>
    <div className="ev">
      <p><b>Also riding an electric scooter?</b> Specialist support for Ola, Ather, TVS iQube and Chetak.</p>
      <a className="btn" href={vehicleHref("/electric-scooter-repair")}>Explore EV repair</a>
    </div>
    <div className="more">
      <a href={vehicleHref("/commuter-bike-service")}>Commuter Bike Service</a>
      <a href={vehicleHref("/electric-scooter-repair")}>EV &amp; Electric Scooter</a>
      <a href={vehicleHref("/royal-enfield")}>Royal Enfield Specialist</a>
      <a href={vehicleHref("/premium-bike-service")}>Premium Bike Service</a>
      <a href={vehicleHref("/sports-bike-service")}>Sports Bike Service</a>
    </div>
  </div>
</section>

{city && <section><div className="wrap"><div className="sec-head"><h2>Scooter service across {city.name}</h2><p>{city.coverage}</p></div><div className="more">{areas.map(area => <span key={area} className="tag">{area}</span>)}</div><p>We provide doorstep scooter repair across {city.name}, including the areas listed above. Share your complete address when booking.</p></div></section>}
{/* 7. FAQ */}
<section>
  <div className="wrap">
    <div className="sec-head"><h2>{city ? "Scooty repair in " + city.name + ": your questions" : "Got questions about doorstep scooty repair?"}</h2></div>
    <div className="faq">
{city ? city.faqs.map((faq,i) => <details key={faq.q} open={i===0}><summary>{faq.q}</summary><p>{faq.a}</p></details>) : <>
      <details open><summary>Why does my Activa, Jupiter, or Access vibrate or shudder during acceleration?</summary><p>Takeoff vibration is typically caused by accumulated clutch dust, worn variator rollers, or glazed clutch shoes inside the Continuously Variable Transmission (CVT) system. Our doorstep technician opens the clutch casing, degreases all transmission components, and resurfaces the clutch shoes on the spot to restore silky-smooth pickup.</p></details>
      <details><summary>My scooty won't start using self-start or kick start. Can you fix it at home in Delhi NCR?</summary><p>Yes! Starting issues on gearless scooters are usually due to discharged batteries, fouled spark plugs, clogged carburetors/fuel injectors, or loose starter relays. Our mobile mechanics carry multi-meters, jump-starters, spare plugs, and fresh batteries to diagnose and start your scooter at your home.</p></details>
      <details><summary>How much does doorstep scooty repair cost in Delhi, Gurgaon, and Noida?</summary><p>Doorstep scooter diagnostics and minor tune-ups start at just ₹199, while comprehensive periodic servicing starts at ₹550. If any spare parts (like drive belts, brake cables, or engine oil) are required, the price is quoted and approved by you before installation. There are zero hidden fees.</p></details>
      <details><summary>How quickly can a scooty mechanic reach my location across Delhi NCR?</summary><p>Our mobile mechanics are stationed across key hubs in Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. We typically reach your home, office, or roadside breakdown location within 45 minutes of booking confirmation.</p></details>
      <details><summary>Do you provide doorstep puncture repair, brake replacement, and drive belt changes for scooters?</summary><p>Yes. Our service vans and technician toolkits are fully equipped to handle tubeless tyre puncture repairs, drum brake shoe/disc pad replacements, throttle/brake cable installations, and genuine OEM drive belt replacements right on-site.</p></details>
    </>}
    </div>
  </div>
</section>

{/* 8. REVIEWS (single placement, right before the contact block) */}
{city ? <section className="reviews"><div className="wrap"><div className="sec-head"><h2>Before your {city.name} mechanic visit</h2><p>A few details help us arrange the right inspection at the right place.</p></div><div className="grid3">{city.preparation.map(([title,text]) => <article className="rev" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section> : <section className="reviews">
  <div className="wrap">
    <div className="sec-head"><h2>Scooter owners recommend us</h2><p>See how riders across Delhi NCR handled everyday scooter repairs at home.</p></div>
    <div className="grid3">
      <article className="rev"><div><div className="top"><b>Sneha K.</b><span className="star">★ 5</span></div><span className="chip">Honda Activa</span><p>“My Activa battery died at home. The mechanic tested it, explained the issue, and got me running again without any surprise charge.”</p></div><small>Vasant Kunj, Delhi</small></article>
      <article className="rev"><div><div className="top"><b>Pallavi G.</b><span className="star">★ 5</span></div><span className="chip">TVS Jupiter</span><p>“The Jupiter service was done at my parking spot. The technician arrived prepared and kept the whole visit simple.”</p></div><small>Greater Noida West</small></article>
      <article className="rev"><div><div className="top"><b>Garima S.</b><span className="star">★ 5</span></div><span className="chip">Honda Activa</span><p>“A puncture was repaired at my location quickly. I could get back on the road without taking the scooter to a workshop.”</p></div><small>GT Road, Ghaziabad</small></article>
    </div>
  </div>
</section>

}
{/* 9. ONE CONTACT + EMERGENCY + CTA BLOCK */}
<div className="final" id="contact">
  <div className="wrap">
    <div>
      <h2>{city ? "Arrange your scooter repair in " + city.name : "Ready to service your two-wheeler?"}</h2>
      <p>{city ? "Tell us your scooter model, symptoms and full address in " + city.name + ". Call or WhatsApp to confirm availability and discuss the repair before booking." : "Get an expert doorstep mechanic at your home or office parking in Delhi NCR within 45 minutes. Stuck with a breakdown? We dispatch 24/7 for punctures, dead batteries and snapped cables."}</p>
      <div className="cta-row">
        <a className="btn btn-red" href="/book">Book now</a>
        <a className="btn btn-ghost" href="tel:+918745945682">Call mechanic</a>
      </div>
      <div className="sos"><b>{city ? "Need breakdown help?" : "24/7 emergency breakdown service."}</b> <a href="/book" style={{"textDecoration":"underline"}}>Request roadside assistance</a> {city ? "and confirm assistance for your location." : "and we’ll send a mobile mechanic."}</div>
    </div>
    <div className="contacts">
      <a href="tel:+918745945682"><span className="ic">☎</span><span><b>+91 87459 45682</b><small>Call us between 8 AM and 10 PM</small></span></a>
      <a href="https://wa.me/918745945682" target="_blank" rel="noopener"><span className="ic">💬</span><span><b>WhatsApp us</b><small>Message us for quick help</small></span></a>
      <a href="mailto:support@fixwheel.app"><span className="ic">✉</span><span><b>support@fixwheel.app</b><small>Replies within 2 hours</small></span></a>
    </div>
  </div>
</div>

{/* 10. CITIES */}
<section>
  <div className="wrap">
    <div className="sec-head"><h2>{city ? "Scooter repair in other cities" : "Book doorstep scooty & scooter repair by city"}</h2></div>
    <div className="cities">
      {["Gurgaon", "Delhi", "Noida", "Ghaziabad", "Faridabad"].filter(name => name !== city?.name).map(name => <a key={name} href={"/scooty-repair/" + name.toLowerCase()}>{name}</a>)}
    </div>
  </div>
</section>





</div>;
}

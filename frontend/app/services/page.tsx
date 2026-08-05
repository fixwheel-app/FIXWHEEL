import type { Metadata } from 'next';
import ServicesClient from './page.client';

export const metadata: Metadata = {
  title: "Doorstep Bike Repair Service in Delhi NCR | FixWheel — Bike Mechanic at Home",
  description: "Book doorstep bike repair in Delhi & Gurugram. FixWheel sends verified mechanics to your home or office for bike service, oil change, tyre repair, battery replacement & more. Starting ₹199. Available across Delhi NCR.",
  keywords: "doorstep bike repair Delhi NCR, bike service at home Delhi, bike mechanic near me, two wheeler repair at home, bike repair at home Delhi, motorcycle repair Delhi, scooter repair Delhi, bike servicing at home, home bike service, doorstep bike mechanic Delhi, bike oil change at home Delhi, bike puncture repair at home, Honda Activa service at home, Royal Enfield service Delhi, bike service near me Gurugram, scooty service at home Delhi, online bike service Delhi, bike breakdown assistance Delhi NCR, two wheeler service at home Gurugram, bike mechanic on call Delhi",
  alternates: {
    canonical: "https://www.fixwheel.app/services",
  },
  openGraph: {
    title: "Doorstep Bike Repair Service in Delhi NCR | FixWheel — Bike Mechanic at Home",
    description: "Book doorstep bike repair in Delhi & Gurugram. FixWheel sends verified mechanics to your home or office for bike service, oil change, tyre repair, battery replacement & more. Starting ₹199. Available across Delhi NCR.",
    url: "https://www.fixwheel.app/services",
    siteName: "FixWheel",
    type: "website",
    images: [
      {
        url: "https://www.fixwheel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "FixWheel Bike Service Delhi",
        "description": "Doorstep bike repair and service in Delhi NCR. Verified mechanics at your home or office for bike service, oil change, tyre repair, battery replacement and more.",
        "url": "https://www.fixwheel.app",
        "telephone": "+918745945682",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Shop no. 2, Vikram Market, Kapas Hera Estate",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110037",
            "addressCountry": "IN"
          }
        ],
        "areaServed": ["Delhi", "Gurugram", "New Delhi"],
        "priceRange": "₹₹",
        "openingHours": "Mo-Su 08:00-21:00",
        "image": "https://www.fixwheel.app/logo.png",
        "sameAs": ["https://www.fixwheel.app"]
      },
      {
        "@type": "Service",
        "name": "Doorstep Bike Repair Service Delhi NCR",
        "provider": {"@type": "LocalBusiness", "name": "FixWheel"},
        "areaServed": ["Delhi", "Gurugram"],
        "description": "On-demand bike repair and servicing at your doorstep in Delhi and Gurugram. Services include basic service, oil change, tyre replacement, brake repair, battery replacement and emergency roadside assistance.",
        "offers": {
          "@type": "Offer",
          "price": "499",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "How much does bike service at home cost in Delhi?", "acceptedAnswer": {"@type": "Answer", "text": "Doorstep bike service starts from ₹499 depending on your bike model and service type. Pricing is always confirmed before any work begins."}},
          {"@type": "Question", "name": "Which areas do you cover for doorstep bike repair in Delhi NCR?", "acceptedAnswer": {"@type": "Answer", "text": "We serve Delhi (Kapasera, Dwarka, Vasant Kunj, Mahipalpur, Bijwasan) and all of Gurugram including DLF, Sushant Lok, Golf Course Road, Palam Vihar and Udyog Vihar."}},
          {"@type": "Question", "name": "How long does doorstep bike service take in Delhi NCR?", "acceptedAnswer": {"@type": "Answer", "text": "Most bike repairs and routine servicing are completed in 30–50 minutes at your location in Delhi or Gurugram."}},
          {"@type": "Question", "name": "Do you service Royal Enfield bikes at home?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our mechanics are trained to service Royal Enfield motorcycles including Classic, Bullet, Meteor and Himalayan at your doorstep in Delhi and Gurugram."}},
          {"@type": "Question", "name": "Can I book emergency roadside bike repair in Delhi NCR?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — emergency roadside assistance is available 24/7 for bikes stranded anywhere across Delhi and Gurugram."}}
        ]
      }
    ]
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesClient />
    </>
  );
}

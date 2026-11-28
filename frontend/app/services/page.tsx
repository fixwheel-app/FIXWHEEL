import type { Metadata } from 'next';
import ServicesClient from './page.client';
import { completePageMetadata } from '@/lib/seoMetadata';

export const metadata: Metadata = completePageMetadata({
  title: "Two-Wheeler Service Packages at Home in Delhi NCR | FixWheel",
  description: "Compare two-wheeler service packages at home across Delhi NCR. Choose periodic bike maintenance, service with engine oil, Book a Mechanic and repair packages with doorstep booking.",
  keywords: "two wheeler service package, two wheeler bike service package at home, two wheeler service in Delhi NCR, bike service packages Delhi NCR, doorstep two wheeler maintenance package, bike servicing package at home, scooter service package at home, motorcycle service package Delhi NCR, periodic bike service package, bike service with engine oil package",
  alternates: {
    canonical: "https://www.fixwheel.app/services",
  },
  openGraph: {
    title: "Two-Wheeler Service Packages at Home in Delhi NCR | FixWheel",
    description: "Compare two-wheeler service packages for doorstep maintenance, engine-oil service, Book a Mechanic and repairs across Delhi NCR.",
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
});

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "FixWheel Bike Service Delhi NCR",
        "description": "Doorstep bike repair and service in Delhi NCR. Verified mechanics at your home or office for bike service, oil change, tyre repair, battery replacement and more.",
        "url": "https://www.fixwheel.app",
        "telephone": "+918745945682",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Shop no. 2, Vikram Market, Kapas Hera Estate",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi NCR",
            "postalCode": "110037",
            "addressCountry": "IN"
          }
        ],
        "areaServed": ["Delhi NCR", "Delhi", "Gurugram", "Noida", "Ghaziabad", "Faridabad"],
        "priceRange": "₹₹",
        "openingHours": "Mo-Su 08:00-22:00",
        "image": "https://www.fixwheel.app/logo.png",
        "sameAs": ["https://www.fixwheel.app"]
      },
      {
        "@type": "Service",
        "name": "Doorstep Bike Repair Service Delhi NCR",
        "provider": {"@type": "LocalBusiness", "name": "FixWheel"},
        "areaServed": ["Delhi NCR", "Delhi", "Gurugram"],
        "description": "On-demand bike repair and servicing at your doorstep in Delhi NCR. Services include basic service, oil change, puncture repair, brake repair, battery replacement and emergency roadside assistance.",
        "offers": {
          "@type": "Offer",
          "price": "550",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "How much does bike service at home cost in Delhi NCR?", "acceptedAnswer": {"@type": "Answer", "text": "Doorstep bike service starts from ₹550 depending on your bike model and service type. Pricing is always confirmed before any work begins."}},
          {"@type": "Question", "name": "Which areas do you cover for doorstep bike repair in Delhi NCR?", "acceptedAnswer": {"@type": "Answer", "text": "We serve Delhi NCR including Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad."}},
          {"@type": "Question", "name": "How long does doorstep bike service take in Delhi NCR?", "acceptedAnswer": {"@type": "Answer", "text": "Most bike repairs and routine servicing are completed in 30–50 minutes at your location in Delhi NCR."}},
          {"@type": "Question", "name": "Do you service Royal Enfield bikes at home?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our mechanics are trained to service Royal Enfield motorcycles including Classic, Bullet, Meteor and Himalayan at your doorstep in Delhi NCR."}},
          {"@type": "Question", "name": "Can I book emergency roadside bike repair in Delhi NCR?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — emergency roadside assistance is available 24/7 for bikes stranded anywhere across Delhi NCR."}}
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServicesClient />
    </>
  );
}

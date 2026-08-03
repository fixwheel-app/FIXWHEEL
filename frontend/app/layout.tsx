import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fixwheel.app"),
  title: {
    default: "FixWheel — Doorstep Bike Service Delhi NCR",
    template: "%s | FixWheel",
  },
  description: "Doorstep motorcycle servicing platform for Delhi NCR.",
  keywords: "bike repair delhi, doorstep bike service, bicycle mechanic delhi, bike repair at home",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "FixWheel — Doorstep Bike Repairs",
    description: "Expert repairs. Your doorstep. 60-second booking.",
    url: "https://www.fixwheel.app",
    type: "website",
    siteName: "FixWheel"
  },
  verification: {
    google: "71UoB7e03OEormKOZ0HXPxAkXORZ37XkQlXdFYx4YxI",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <meta name="google-site-verification" content="C833_fFDkpy5lyqYIs8Tfha4pv5gciagl2uJOEcfB9I" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S01GQVCQ0B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S01GQVCQ0B');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.fixwheel.app/#organization",
                  "name": "FixWheel",
                  "url": "https://www.fixwheel.app/",
                  "logo": "https://www.fixwheel.app/icon.png",
                  "image": "https://www.fixwheel.app/icon.png",
                  "telephone": "+91-8745945682",
                  "email": "support@fixwheel.app",
                  "sameAs": [
                    "https://www.instagram.com/fixwheel.app?igsh=ZDBqZTB1c2tsMWU1",
                    "https://www.facebook.com/profile.php?id=61573309963156",
                    "https://www.linkedin.com/company/fixwheel-app/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.fixwheel.app/#website",
                  "url": "https://www.fixwheel.app/",
                  "name": "FixWheel",
                  "publisher": {
                    "@id": "https://www.fixwheel.app/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-primary text-text-primary">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <WhatsAppButton />
        <CallButton />
        <Footer />
      </body>
    </html>
  );
}


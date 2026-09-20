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
    default: "FixWheel — Doorstep Bike Service Delhi",
    template: "%s",
  },
  description: "Doorstep motorcycle servicing platform for Delhi.",
  keywords: "bike repair delhi, doorstep bike service, bicycle mechanic delhi, bike repair at home",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVSCJMZ4');`,
          }}
        />
        <meta name="google-site-verification" content="C833_fFDkpy5lyqYIs8Tfha4pv5gciagl2uJOEcfB9I" />
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ycwjc5vjlx");
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVSCJMZ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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

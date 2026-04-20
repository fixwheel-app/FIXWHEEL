import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fixwheel.app"),
  title: {
    default: "FixWheel — Doorstep Bike Service Delhi NCR",
    template: "%s | FixWheel",
  },
  description: "Doorstep motorcycle servicing platform for Delhi NCR.",
  keywords: "bike repair delhi, doorstep bike service, bicycle mechanic delhi, bike repair at home",
  openGraph: {
    title: "FixWheel — Doorstep Bike Repairs",
    description: "Expert repairs. Your doorstep. 60-second booking.",
    url: "https://fixwheel.app",
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
      <body className="flex flex-col min-h-screen bg-primary text-text-primary">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}


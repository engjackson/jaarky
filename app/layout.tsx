import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Jaarky — Product, Web & Software Studio",
  description:
    "Jaarky is a product and technology studio offering web development, MVP builds, AI solutions, and digital strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-jaarky-sand">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X48E9GFFR1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'G-X48E9GFFR1');`}
        </Script>
        <Navbar />
        <main className="flex-1 pt-20 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
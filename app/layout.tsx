import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jaarky LLC — Product, Web & Software Studio",
  description:
    "Jaarky LLC is a product and technology studio offering web development, MVP builds, AI solutions, and digital strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-jaarky-sand">
        <Navbar />
        <main className="flex-1 pt-20 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
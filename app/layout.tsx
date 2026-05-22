import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Bliss Ventures | Premium Real Estate Development",
  description:
    "Bliss Ventures creates premium residential communities with modern architecture, strategic locations, and exceptional investment value.",
  keywords: [
    "Bliss Ventures",
    "Real Estate",
    "Luxury Homes",
    "Hyderabad Real Estate",
    "Premium Properties",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900`}
      >
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
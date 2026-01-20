import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed to Inter
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NxtWaves - The Next Wave of Innovation",
  description: "A high-end, immersive innovation hub for building the future.",
  openGraph: {
    title: "NxtWaves - The Next Wave of Innovation",
    description: "A high-end, immersive innovation hub for building the future.",
    url: "https://nxtwaves.in",
    siteName: "NxtWaves",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NxtWaves - The Next Wave of Innovation",
    description: "A high-end, immersive innovation hub for building the future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

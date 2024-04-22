import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOLINOX | Fabricación de Tanques de Acero y Fibra de Vidrio",
  description:
    "SOLINOX es una empresa especializada en la fabricación de todo tipo de Tanques en acero al carbón, acero Inoxidable y fibra de Vidrio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

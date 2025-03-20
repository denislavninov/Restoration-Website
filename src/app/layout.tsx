'use client'
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useRef } from 'react';
import CtaSection from "./components/CtaSection";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <html lang="en">
      <body
        className={`${lora.variable} antialiased`}
      >
        <Navbar contactRef={contactRef} />
        {children}
        <CtaSection ref={contactRef} />


        <Footer />
      </body>
    </html>
  );
}

"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main>
      <Gallery />
    </main>
  );
}

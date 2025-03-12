"use client"
import Image from "next/image";
import Slider from "./components/Slider";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import ArtistMottos from "./components/ArtistsMottos";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <main>

      <Slider />
      <Gallery />
      <ArtistMottos />

    </main>



  );
}

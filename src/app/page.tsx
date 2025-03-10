import Image from "next/image";
import Slider from "./components/Slider";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import ArtistMottos from "./components/ArtistsMottos";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <Gallery />
      <ArtistMottos />
      <CtaSection />
      <Footer />
    </main>



  );
}

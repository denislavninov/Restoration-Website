import Image from "next/image";
import Slider from "./components/Slider";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import ArtistMottos from "./components/ArtistsMottos";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <Gallery />
      <ArtistMottos />
    </main>



  );
}

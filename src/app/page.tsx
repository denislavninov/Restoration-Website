import Image from "next/image";
import Slider from "./components/Slider";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <Gallery />
    </main>



  );
}

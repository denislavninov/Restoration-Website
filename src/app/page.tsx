import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">What is restoration?</h1>
        <h2 className="text-3xl font-semibold mt-8">Painting Restoration</h2>
        <p className="text-lg mt-2">Painting restoration involves the meticulous process of repairing and preserving artworks to bring them back to their original glory. This includes cleaning, repairing damage, and retouching to ensure the artwork's longevity and visual appeal.</p>
      </div>
    </main>

  );
}

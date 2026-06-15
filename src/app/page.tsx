import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { FeaturedPreview } from "@/components/sections/FeaturedPreview";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <FeaturedPreview />
      <CtaBand />
    </main>
  );
}

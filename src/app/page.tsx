import { Hero } from "@/components/sections/Hero";
import { Approach } from "@/components/sections/Approach";
import { FeaturedPreview } from "@/components/sections/FeaturedPreview";
import { StoriesPreview } from "@/components/sections/StoriesPreview";
import { ExperienceBrief } from "@/components/sections/ExperienceBrief";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Approach />
      <FeaturedPreview />
      <StoriesPreview />
      <ExperienceBrief />
      <CtaBand />
    </main>
  );
}

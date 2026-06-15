import { Hero } from "@/components/sections/Hero";
import { ShowcaseStrip } from "@/components/sections/ShowcaseStrip";
import { WhatYouSee } from "@/components/sections/WhatYouSee";
import { Approach } from "@/components/sections/Approach";
import { FullBleed } from "@/components/sections/FullBleed";
import { StoriesPreview } from "@/components/sections/StoriesPreview";
import { ExperienceBrief } from "@/components/sections/ExperienceBrief";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ShowcaseStrip />
      <WhatYouSee />
      <Approach />
      <FullBleed />
      <StoriesPreview />
      <ExperienceBrief />
      <CtaBand />
    </main>
  );
}

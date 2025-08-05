import Image from "next/image";
import Hero from "../components/Hero";
import InterestBadge from "../components/InterestBadge";
import CTA from "../components/CTA";
import SkillsCarousel from "../components/SkillsCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsCarousel />
      <InterestBadge />
      <CTA />
    </>
  );
}

import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { HeroCarousel } from "../components/HeroCarousel";
import { AboutSection } from "../components/AboutSection";
import { SpecialOffersSection } from "../components/SpecialOffersSection";
import { ServicesSection } from "../components/ServicesSection";
import { RoomsSection } from "../components/RoomsSection";
import { ShowcasesSection } from "../components/ShowcasesSection";
import { LandmarkSection } from "../components/LandmarkSection";
import { GuestCommentsSection } from "../components/GuestCommentsSection";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dawala Hotel" },
    {
      name: "description",
      content: "Discover A Brand Luxurious Hotel - Dawala Hotel",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <SpecialOffersSection />
      <ServicesSection />
      <RoomsSection />
      <ShowcasesSection />
      <LandmarkSection />
      <GuestCommentsSection />
      <Footer />
    </>
  );
}

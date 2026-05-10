import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import CoupleSection from "@/components/CoupleSection";

import EventsSection from "@/components/EventsSection";
import VenueSection from "@/components/VenueSection";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-offwhite overflow-x-hidden">
      {/* Mobile-centered invitation layout */}
      <div className="max-w-lg mx-auto relative">
        {/* Paper texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        <HeroSection />
        <CountdownSection />
        <CoupleSection />

        <EventsSection />
        <div className="h-16" />
        <VenueSection />

      </div>
    </main>
  );
}

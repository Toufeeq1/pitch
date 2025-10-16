// app/page.tsx
import { HeroSection } from "@/components/layout/HeroSection";
import { EventDirectory } from "@/components/layout/EventSection";


export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
       <EventDirectory />
    </main>
  );
}

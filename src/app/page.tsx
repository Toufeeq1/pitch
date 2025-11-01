// app/page.tsx
import { HeroSection } from "@/components/layout/HeroSection";
import { EventDirectory } from "@/components/layout/EventSection";
import { OrganisationDirectory } from "@/components/layout/OrganisationSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <EventDirectory />
      <OrganisationDirectory />
    </main>
  );
}

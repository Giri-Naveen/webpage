'use client';
import { useEffect } from "react";
import TeamHeaderSection from "@/components/TeamHeaderSection";
import TeamMemberSection from "@/components/TeamMemberSection";
import TeamCollabSection from "@/components/TeamCollabSection";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";
import FirstSection from "@/components/FirstSection";

export default function OurTeam() {
  useEffect(() => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }, []);

  return (
    <main>
      <FirstSection />
      <FixedUI />
      <TeamHeaderSection />
      <TeamMemberSection />
      <TeamCollabSection />
      <Footer />
    </main>
  );
}

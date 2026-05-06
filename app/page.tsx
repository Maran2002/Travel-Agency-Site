import HeroSection from "./components/HeroSection";
import DestinationsSection from "./components/DestinationsSection";
import ExperiencesSection from "./components/ExperiencesSection";
import ToursSection from "./components/ToursSection";
import MomentsSection from "./components/MomentsSection";
import CaptureSection from "./components/CaptureSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BookingSection from "./components/BookingSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DestinationsSection />
      <ExperiencesSection />
      <ToursSection />
      <MomentsSection />
      <CaptureSection />
      <TestimonialsSection />
      <BookingSection />
      <CTASection />
    </main>
  );
}

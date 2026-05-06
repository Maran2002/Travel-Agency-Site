import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "The Experience",
  description: "Discover what a BromoBliss tour feels like — from the 4 AM wake-up call to watching the sun ignite the volcanic horizon.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}

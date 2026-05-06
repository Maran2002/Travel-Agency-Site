import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BromoBliss — our story, our guides, and our passion for sharing Mount Bromo's volcanic beauty with the world.",
};

export default function AboutPage() {
  return <AboutContent />;
}

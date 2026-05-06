import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with BromoBliss to plan your Mount Bromo adventure. We're happy to answer questions and customize your tour.",
};

export default function ContactPage() {
  return <ContactContent />;
}

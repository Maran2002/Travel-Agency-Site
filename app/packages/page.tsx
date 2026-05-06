import type { Metadata } from "next";
import PackagesContent from "./PackagesContent";

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Choose from our curated Mount Bromo tour packages for every kind of traveler — from budget sunrise hikes to exclusive private journeys.",
};

export default function PackagesPage() {
  return <PackagesContent />;
}

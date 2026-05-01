import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Visuals } from "@/components/site/Visuals";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const searchSchema = z.object({
  category: fallback(
    z.enum(["all", "wedding", "reception", "portraits", "ceremony"]),
    "all"
  ).default("all"),
});

export const Route = createFileRoute("/")({
  validateSearch: zodValidator(searchSchema),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Visuals />
      <Ecosystem />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

import { SectionTitle } from "./SectionTitle";
import { PillarCard } from "./PillarCard";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-28 md:py-36 px-6 bg-ink/40 relative">
      <SectionTitle
        eyebrow="END-TO-END"
        title="A-to-Z Event Ecosystem"
        subtitle="From the first invitation to the final farewell — every detail handled by a single trusted team."
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <PillarCard
          title="Planning & Decor"
          items={[
            "Complete Event Logistics",
            "Themed Stage Decorations",
            "Premium Lighting Setups",
            "Custom Wedding Cards",
          ]}
        />
        <PillarCard
          title="Hospitality"
          items={[
            "Multi-Cuisine Food Catering",
            "Professional Maid Services",
            "Housekeeping Staff",
          ]}
        />
        <PillarCard
          title="Support & Logistics"
          items={[
            "Guest Transport Solutions",
            "Luxury Vehicle Rentals",
            "Missing-Add Services",
            "Security & Coordination",
          ]}
        />
      </div>
    </section>
  );
}

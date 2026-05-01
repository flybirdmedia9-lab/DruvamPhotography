import { SectionTitle } from "./SectionTitle";
import { PillarCard } from "./PillarCard";

export function Visuals() {
  return (
    <section id="visuals" className="py-28 md:py-36 px-6 relative">
      <SectionTitle eyebrow="THE CRAFT" title="The Art of Visuals" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <PillarCard
          title="The Shoot"
          tagline="State-of-the-art cinematic captures."
          items={[
            "4K & 8K Cinematography",
            "Candid & Traditional Photography",
            "Advanced Drone Coverage",
          ]}
        />
        <PillarCard
          title="The Edit"
          tagline="Masterful storytelling and coloring."
          items={[
            "Professional Color Grading",
            "Cinematic Teasers & Highlights",
            "Custom Video Structuring",
          ]}
        />
        <PillarCard
          title="The Delivery"
          tagline="Your memories, beautifully packaged."
          items={[
            "Premium Customized Albums",
            "High-Res Digital Galleries",
            "Secure Cloud Backup",
          ]}
        />
      </div>
    </section>
  );
}

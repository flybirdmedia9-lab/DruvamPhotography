import hero from "@/assets/hero-wedding.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Premium South Indian bridal portrait by Dhruvam Photography"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 bg-ink/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        <p className="font-serif-cap text-xs md:text-sm text-gold animate-fade-up animate-shimmer">
          ✦  ANANTAPUR  ·  EST. CINEMATIC HERITAGE  ✦
        </p>
        <div className="gold-divider w-24 mx-auto my-6 animate-fade-up delay-100" />
        <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground animate-fade-up delay-100">
          Capturing Moments,
          <br />
          <span className="italic text-gradient-gold">Creating Experiences</span>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
          Premium 4K / 8K cinematography & complete end-to-end event management.
          Your vision, executed with absolute perfection.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#contact"
            className="px-8 py-4 rounded-md text-sm font-medium tracking-[0.2em] bg-gold text-primary-foreground hover:opacity-90 transition shadow-gold"
          >
            RESERVE YOUR DATE
          </a>
          <a
            href="#visuals"
            className="px-8 py-4 rounded-md text-sm font-medium tracking-[0.2em] border border-gold text-gold hover:bg-gold/10 transition"
          >
            EXPLORE THE CRAFT
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-xs tracking-[0.3em] font-serif-cap animate-shimmer">
        SCROLL ↓
      </div>
    </section>
  );
}

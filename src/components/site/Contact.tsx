export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-serif-cap text-xs text-gold">✦ LET'S CREATE TOGETHER ✦</p>
        <div className="gold-divider w-20 mx-auto my-6" />
        <h2 className="font-display italic text-4xl md:text-6xl text-gradient-gold">
          Begin Your Story
        </h2>
        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          Reserve a private consultation with our founder. Limited bookings each season
          to ensure uncompromising quality.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6 text-left">
          <div className="card-gold-top p-7">
            <p className="font-serif-cap text-[10px] text-gold mb-2">FOUNDER</p>
            <p className="font-display text-2xl text-foreground">Dinesh</p>
            <p className="text-xs text-muted-foreground mt-1">Lead Cinematographer & Event Director</p>
          </div>
          <div className="card-gold-top p-7">
            <p className="font-serif-cap text-[10px] text-gold mb-2">CALL DIRECTLY</p>
            <a href="tel:+919666011628" className="font-display text-2xl text-foreground hover:text-gold transition">
              +91 96660 11628
            </a>
            <p className="text-xs text-muted-foreground mt-1">Available 9 AM – 9 PM IST</p>
          </div>
          <div className="card-gold-top p-7">
            <p className="font-serif-cap text-[10px] text-gold mb-2">STUDIO</p>
            <p className="font-display text-2xl text-foreground">Anantapur</p>
            <p className="text-xs text-muted-foreground mt-1">Andhra Pradesh, India</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+919666011628"
            className="px-8 py-4 rounded-md text-sm font-medium tracking-[0.2em] bg-gold text-primary-foreground hover:opacity-90 transition shadow-gold"
          >
            CALL NOW
          </a>
          <a
            href="https://wa.me/919666011628"
            target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-md text-sm font-medium tracking-[0.2em] border border-gold text-gold hover:bg-gold/10 transition"
          >
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
}

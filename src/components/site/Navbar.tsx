export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-serif-cap text-xs text-gold">DHRUVAM</span>
          <span className="hidden md:inline text-muted-foreground text-xs tracking-[0.3em]">
            PHOTOGRAPHY · EVENTS
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="#visuals" className="hover:text-gold transition-colors">Visuals</a>
          <a href="#ecosystem" className="hover:text-gold transition-colors">Services</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
        <a
          href="tel:+919666011628"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-md text-xs font-medium tracking-wider text-primary-foreground bg-gold hover:opacity-90 transition shadow-gold"
        >
          BOOK NOW
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="font-serif-cap text-gold">DHRUVAM</span>
          <span className="tracking-[0.3em]">PHOTOGRAPHY · EVENTS</span>
        </div>
        <p className="italic font-display text-base">
          "Crafted with reverence in Anantapur."
        </p>
        <p>© {new Date().getFullYear()} Dhruvam. All rights reserved.</p>
      </div>
    </footer>
  );
}

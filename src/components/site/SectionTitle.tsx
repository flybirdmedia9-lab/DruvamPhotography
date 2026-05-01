export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {eyebrow && (
        <p className="font-serif-cap text-[11px] text-gold mb-4">✦ {eyebrow} ✦</p>
      )}
      <h2 className="font-display text-4xl md:text-6xl text-gradient-gold italic">
        {title}
      </h2>
      <div className="gold-divider w-20 mx-auto my-6" />
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

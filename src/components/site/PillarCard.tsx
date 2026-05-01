export function PillarCard({
  title,
  tagline,
  items,
}: {
  title: string;
  tagline?: string;
  items: string[];
}) {
  return (
    <div className="card-gold-top p-8 md:p-10 shadow-deep transition hover:-translate-y-1 hover:shadow-gold duration-500">
      <h3 className="font-display text-2xl md:text-3xl text-foreground text-center">
        {title}
      </h3>
      {tagline && (
        <p className="text-center text-sm text-muted-foreground italic mt-3 mb-6">
          {tagline}
        </p>
      )}
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="mt-2 inline-block w-1 h-1 rounded-full bg-gold flex-shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

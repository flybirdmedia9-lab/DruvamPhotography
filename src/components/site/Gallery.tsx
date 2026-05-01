import { Link, getRouteApi } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";

export type GalleryCategory = "all" | "wedding" | "reception" | "portraits" | "ceremony";

type Item = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  w: number;
  h: number;
};

const ITEMS: Item[] = [
  { src: g1, alt: "South Indian couple portrait", category: "wedding", w: 1024, h: 1280 },
  { src: g2, alt: "Grand mandapam stage", category: "wedding", w: 1280, h: 1024 },
  { src: g3, alt: "Bridal hands with mehendi", category: "ceremony", w: 1024, h: 1280 },
  { src: g4, alt: "Sacred ceremony moment", category: "ceremony", w: 1280, h: 1024 },
  { src: g5, alt: "Wedding reception under chandelier", category: "reception", w: 1280, h: 1024 },
  { src: g6, alt: "Editorial bridal portrait", category: "portraits", w: 1024, h: 1280 },
  { src: g7, alt: "Engagement ring exchange", category: "reception", w: 1280, h: 1024 },
];

const FILTERS: { key: GalleryCategory; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "wedding", label: "Weddings" },
  { key: "reception", label: "Receptions" },
  { key: "ceremony", label: "Ceremonies" },
  { key: "portraits", label: "Portraits" },
];

const CATEGORY_LABEL: Record<Exclude<GalleryCategory, "all">, string> = {
  wedding: "Wedding",
  reception: "Reception",
  ceremony: "Ceremony",
  portraits: "Portrait",
};

const routeApi = getRouteApi("/");

export function Gallery() {
  const { category } = routeApi.useSearch();
  const filtered = category === "all" ? ITEMS : ITEMS.filter((i) => i.category === category);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isOpen = activeIndex !== null;
  const active = isOpen ? filtered[activeIndex] : null;

  // Reset loaded state whenever the active image changes
  useEffect(() => { setImgLoaded(false); }, [activeIndex]);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  // reset when filter changes
  useEffect(() => { setActiveIndex(null); }, [category]);

  return (
    <section id="gallery" className="py-28 md:py-36 px-6">
      <SectionTitle eyebrow="THE PORTFOLIO" title="Frames of Forever" />

      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap justify-center gap-3">
        {FILTERS.map((f) => {
          const isActive = f.key === category;
          return (
            <Link
              key={f.key}
              from="/"
              search={{ category: f.key }}
              replace
              className={[
                "px-5 py-2.5 rounded-full text-xs font-serif-cap transition border",
                isActive
                  ? "bg-gold text-primary-foreground border-gold shadow-gold"
                  : "border-gold/40 text-muted-foreground hover:text-gold hover:border-gold",
              ].join(" ")}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
        {filtered.map((it, idx) => (
          <button
            type="button"
            key={it.src}
            onClick={() => setActiveIndex(idx)}
            className="mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-md group relative animate-fade-up block w-full text-left cursor-zoom-in"
            aria-label={`View larger: ${it.alt}`}
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              width={it.w}
              height={it.h}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/90 to-transparent opacity-0 group-hover:opacity-100 transition">
              <span className="font-serif-cap text-[10px] text-gold tracking-[0.25em]">
                {CATEGORY_LABEL[it.category].toUpperCase()}
              </span>
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">No work in this category yet.</p>
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
          className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fade-up"
        >
          {/* Close */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition flex items-center justify-center text-xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition flex items-center justify-center"
          >
            ‹
          </button>

          {/* Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full flex flex-col items-center"
          >
            <div
              className="relative w-auto max-w-full max-h-[78vh] rounded-md overflow-hidden shadow-deep bg-card/40"
              style={{ aspectRatio: `${active.w} / ${active.h}`, height: "78vh", maxWidth: "100%" }}
            >
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Skeleton shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-card via-secondary to-card animate-shimmer" />
                  {/* Gold spinner */}
                  <div
                    className="relative w-12 h-12 rounded-full border-2 border-gold/20 border-t-gold animate-spin"
                    style={{ animation: "spin 0.9s linear infinite" }}
                    aria-label="Loading image"
                  />
                </div>
              )}
              <img
                key={active.src}
                src={active.src}
                alt={active.alt}
                width={active.w}
                height={active.h}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgLoaded(true)}
                className={[
                  "relative w-full h-full object-contain transition-opacity duration-500",
                  imgLoaded ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            </div>
            <div className="mt-6 text-center">
              <p className="font-serif-cap text-[11px] text-gold tracking-[0.3em]">
                ✦ {CATEGORY_LABEL[active.category].toUpperCase()} ✦
              </p>
              <div className="gold-divider w-16 mx-auto my-3" />
              <p className="font-display italic text-xl md:text-2xl text-foreground">
                {active.alt}
              </p>
              <p className="text-xs text-muted-foreground mt-2 tracking-wider">
                {activeIndex! + 1} / {filtered.length}  ·  Dhruvam Photography & Events
              </p>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919666011628?text=${encodeURIComponent(
                    `Hi Dinesh, I'd like to inquire about your ${CATEGORY_LABEL[active.category]} photography & event services from Dhruvam.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-3 rounded-md text-[11px] font-serif-cap tracking-[0.25em] bg-gold text-primary-foreground hover:opacity-90 transition shadow-gold"
                >
                  INQUIRE ABOUT {CATEGORY_LABEL[active.category].toUpperCase()}
                </a>
                <a
                  href="tel:+919666011628"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-3 rounded-md text-[11px] font-serif-cap tracking-[0.25em] border border-gold text-gold hover:bg-gold/10 transition"
                >
                  CALL +91 96660 11628
                </a>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition flex items-center justify-center"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}


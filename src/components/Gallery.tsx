import { brand, galleryItems } from "../lib/content";
import { ProjectPhoto } from "./ProjectPhoto";

export function Gallery() {
  return (
    <section id="projetos" className="scroll-mt-24 border-b border-white/10 bg-ink py-28 md:py-36">
      <div className="container-edge">
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end">
          <div>
            <span className="index-number text-sand">04</span>
            <h2 className="eyebrow mt-4">Projetos</h2>
          </div>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-display text-xs tracking-[0.25em] uppercase text-mist transition-colors hover:text-sand"
          >
            Ver mais no Instagram →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div key={item.index} className="group relative aspect-[4/5] bg-ink">
              <ProjectPhoto src={item.src} alt={item.title} overlay="card" className="h-full w-full" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <span className="index-number text-xs text-sand">{item.index}</span>
                  <span className="font-display text-[0.65rem] tracking-[0.25em] uppercase text-bone">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg text-bone md:text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="font-display text-xs tracking-[0.25em] text-mist">
            <span className="index-number text-sand">01</span> / 08
          </span>
          <div className="flex items-center gap-6 font-display text-xs tracking-[0.25em] uppercase text-mist">
            <span className="cursor-default transition-colors hover:text-sand">← Prev</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="cursor-default transition-colors hover:text-sand">Next →</span>
          </div>
        </div>
      </div>
    </section>
  );
}

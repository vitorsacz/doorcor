import { aboutPhotos } from "../lib/content";
import { ProjectPhoto } from "./ProjectPhoto";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 border-b border-white/10 bg-ink py-28 md:py-36">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-y-16 border-t border-white/10 pt-10 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-4">
            <span className="index-number text-sand">01</span>
            <h2 className="eyebrow mt-4">Sobre a DoorCor</h2>
          </div>

          <div className="md:col-span-8">
            <p className="font-display text-3xl leading-[1.15] text-bone md:text-4xl lg:text-5xl">
              Portas em ACM pensadas como{" "}
              <span className="font-accent italic font-normal text-sand">peça de arquitetura</span>,
              não como item de acabamento.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-mist md:text-base">
                A DoorCor é especializada em portas externas e internas em ACM
                de alto padrão, com tecnologia embarcada para os projetos
                mais exigentes — de fechaduras eletrônicas a grandes portas
                pivotantes.
              </p>
              <p className="text-sm leading-relaxed text-mist md:text-base">
                Produção exclusivamente brasileira, do primeiro esboço à
                instalação em obra, entregando o mesmo padrão de acabamento
                visto nas fachadas mais sofisticadas do país.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {aboutPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/5]">
              <ProjectPhoto src={photo.src} alt={photo.caption} overlay="card" className="h-full w-full bg-ink" />
              <span className="absolute bottom-5 left-5 font-display text-xs tracking-[0.15em] text-bone">
                {photo.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

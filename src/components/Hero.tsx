import { buildWhatsAppUrl, whatsappMessages } from "../lib/content";
import { ProjectPhoto } from "./ProjectPhoto";

export function Hero() {
  return (
    <section id="top" className="relative flex h-screen min-h-[720px] w-full items-end overflow-hidden bg-ink">
      <ProjectPhoto src="/img/doorcor-30.jpg" alt="Porta pivotante DoorCor em ACM, aberta para vista externa" overlay="hero" fill />

      <div className="container-edge relative z-10 flex w-full flex-col gap-10 pb-16 pt-32 md:pb-24">
        <span className="eyebrow">DoorCor — Portas em ACM · Alto Padrão</span>

        <h1 className="font-display text-[16vw] leading-[0.85] font-extrabold uppercase tracking-tight text-bone md:text-[9vw] lg:text-[7.5vw]">
          Portas de
          <br />
          <span className="italic font-accent font-normal normal-case text-sand">alto padrão</span> em ACM
        </h1>

        <div className="flex flex-col justify-between gap-8 border-t border-white/15 pt-6 md:flex-row md:items-end">
          <p className="max-w-md text-sm text-mist md:text-base">
            Tecnologia embarcada para os projetos mais exigentes. Fabricação
            exclusivamente brasileira, sob medida para arquitetura residencial
            e corporativa.
          </p>

          <div className="flex items-center gap-6">
            <a href={buildWhatsAppUrl(whatsappMessages.quote)} target="_blank" rel="noreferrer" className="btn-solid">
              Solicitar Orçamento
            </a>
            <a href="#projetos" className="btn-ghost">
              Ver Projetos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-28 z-10 hidden font-display text-xs tracking-[0.3em] text-mist md:flex md:flex-col md:items-end md:gap-2">
        <span className="index-number text-sand">01</span>
        <span className="h-10 w-px bg-white/20" />
        <span className="rotate-180 [writing-mode:vertical-rl]">Scroll</span>
      </div>
    </section>
  );
}

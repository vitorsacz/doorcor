import { differentials } from "../lib/content";

export function Differentials() {
  return (
    <section id="diferenciais" className="scroll-mt-24 border-b border-white/10 bg-graphite py-28 md:py-36">
      <div className="container-edge">
        <div className="border-t border-white/10 pt-10">
          <span className="index-number text-sand">03</span>
          <h2 className="eyebrow mt-4">Por que a DoorCor</h2>
          <p className="mt-6 max-w-xl font-display text-3xl leading-[1.15] text-bone md:text-4xl">
            Padrão de <span className="font-accent italic font-normal text-sand">obra de alto luxo</span>,
            do orçamento à instalação.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <div
              key={item.index}
              className="flex flex-col gap-10 rounded-2xl border border-white/15 p-8 transition-colors duration-500 hover:border-sand/60"
            >
              <span className="index-number text-3xl text-sand">{item.index}</span>
              <div>
                <h3 className="font-display text-lg text-bone">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { services } from "../lib/content";

export function Services() {
  return (
    <section id="produtos" className="scroll-mt-24 border-b border-white/10 bg-graphite py-28 md:py-36">
      <div className="container-edge">
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end">
          <div>
            <span className="index-number text-sand">02</span>
            <h2 className="eyebrow mt-4">Produtos &amp; Serviços</h2>
          </div>
          <p className="max-w-sm text-sm text-mist md:text-right md:text-base">
            Do projeto à instalação, cada linha de produto é desenvolvida
            sob medida para o padrão exigido pela obra.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.index}
              className="group flex flex-col justify-between gap-16 border-r border-b border-white/10 p-8 transition-colors duration-500 hover:bg-white/5 md:p-10"
            >
              <span className="index-number text-sm text-fog transition-colors duration-500 group-hover:text-sand">
                {service.index}
              </span>
              <div>
                <h3 className="font-display text-xl text-bone md:text-2xl">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center border-t border-white/10 pt-10 md:justify-start">
          <a href="#projetos" className="btn-ghost">
            Ver Galeria de Projetos
          </a>
        </div>
      </div>
    </section>
  );
}

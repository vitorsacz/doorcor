import { brand, buildWhatsAppUrl, whatsappMessages } from "../lib/content";

export function Contact() {
  const whatsappUrl = buildWhatsAppUrl(whatsappMessages.seeWork);

  return (
    <section id="contato" className="scroll-mt-24 bg-ink py-28 md:py-36">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-16 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <span className="index-number text-sand">05</span>
            <h2 className="eyebrow mt-4">Contato</h2>
            <p className="mt-6 font-display text-3xl leading-[1.15] text-bone md:text-4xl">
              Atendimento direto,
              <br />
              <span className="font-accent italic font-normal text-sand">exclusivamente pelo WhatsApp.</span>
            </p>
            <p className="mt-6 max-w-md text-sm text-mist md:text-base">
              Fale agora com a DoorCor e veja de perto o acabamento das nossas
              portas em ACM.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-2xl border border-white/15 p-8 lg:col-span-6 md:p-12">
            <div>
              <span className="font-display text-[0.65rem] tracking-[0.25em] uppercase text-fog">Telefone / WhatsApp</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block font-display text-3xl text-bone transition-colors hover:text-sand md:text-4xl"
              >
                {brand.phoneDisplay}
              </a>
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-mist transition-colors hover:text-sand"
              >
                Instagram — {brand.instagramHandle}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-solid">
                Nos chame no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

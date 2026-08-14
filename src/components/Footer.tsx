import { brand, buildWhatsAppUrl, navLinks, whatsappMessages } from "../lib/content";

export function Footer() {
  return (
    <footer className="bg-paper text-ink">
      <div className="container-edge flex flex-col gap-16 py-20">
        <div className="grid grid-cols-1 gap-12 border-t border-ink/10 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-2xl tracking-[0.15em]">
              DOOR<span className="text-ocre">COR</span>
              <span className="ml-1 align-super text-[0.5rem] text-ink/40">{brand.suffix}</span>
            </span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/60">
              Portas premium em ACM para projetos residenciais e corporativos
              de alto padrão. Fabricação exclusivamente brasileira.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="font-display text-[0.65rem] tracking-[0.25em] uppercase text-ink/40">Navegação</span>
            <nav className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-ink/70 transition-colors hover:text-ocre">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <span className="font-display text-[0.65rem] tracking-[0.25em] uppercase text-ink/40">Contato</span>
            <div className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
              <a href={buildWhatsAppUrl(whatsappMessages.quote)} target="_blank" rel="noreferrer" className="transition-colors hover:text-ocre">
                {brand.phoneDisplay}
              </a>
              <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-ocre">
                Instagram — {brand.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink/10 pt-8 text-xs text-ink/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} DoorCor. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://vitorsantos.dev.br"
              target="_blank"
              rel="noreferrer"
              className="text-ink/60 transition-colors hover:text-ocre"
            >
              Vitor Santos | vitorsantos.dev.br
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

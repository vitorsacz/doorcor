import { useEffect, useState } from "react";
import { brand, buildWhatsAppUrl, navLinks, whatsappMessages } from "../lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-edge flex items-center justify-between py-5">
        <a href="#top" className="font-display text-lg tracking-[0.15em] text-bone">
          DOOR<span className="text-sand">COR</span>
          <span className="ml-1 align-super text-[0.5rem] text-mist">{brand.suffix}</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/15 px-2 py-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-display text-[0.7rem] tracking-[0.2em] uppercase text-mist transition-colors duration-300 hover:bg-white/10 hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl(whatsappMessages.quote)}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost hidden md:inline-flex"
        >
          Fale Conosco
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 md:hidden"
          aria-label="Abrir menu"
        >
          <span className={`h-px w-4 bg-bone transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-4 bg-bone transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm tracking-[0.2em] uppercase text-mist hover:text-bone"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl(whatsappMessages.quote)}
              target="_blank"
              rel="noreferrer"
              className="btn-solid mt-2 w-fit"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

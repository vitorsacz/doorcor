type ProjectPhotoProps = {
  src: string;
  alt?: string;
  className?: string;
  overlay?: "hero" | "card" | "none";
  /** Preenche o elemento pai posicionado (absolute inset-0) em vez de ocupar espaço no fluxo. */
  fill?: boolean;
};

/** Foto real de projeto DoorCor, com overlay escuro para legibilidade sobre o texto. */
export function ProjectPhoto({ src, alt = "", className = "", overlay = "card", fill = false }: ProjectPhotoProps) {
  const position = fill ? "absolute inset-0 h-full w-full" : "relative h-full w-full";

  return (
    <div className={`${position} overflow-hidden bg-charcoal ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover contrast-105 brightness-95"
      />
      {overlay === "hero" && (
        <>
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        </>
      )}
      {overlay === "card" && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/70" />
      )}
    </div>
  );
}

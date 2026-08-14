const items = [
  "PORTAS EM ACM",
  "ALTO PADRÃO",
  "TECNOLOGIA EMBARCADA",
  "100% BRASILEIRA",
  "PROJETOS SOB MEDIDA",
];

function Block() {
  return (
    <span className="flex shrink-0 items-center gap-8 pr-8 font-display text-sm tracking-[0.3em] text-mist uppercase whitespace-nowrap">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          {item}
          <span className="text-sand">◦</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-graphite py-4">
      <div className="flex w-max animate-marquee">
        <Block />
        <Block />
      </div>
    </div>
  );
}

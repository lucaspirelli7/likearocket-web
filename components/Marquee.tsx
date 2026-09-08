const ITEMS = [
  "Diseño web",
  "Google Ads",
  "Meta Ads",
  "SEO local",
  "GEO · IA",
  "Ficha de Google",
  "Landing pages",
  "Social media",
  "Informe mensual",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export type ServiceTheme = "web" | "paid" | "seo" | "social";

export function ServiceExperience({ theme, children }: { theme: ServiceTheme; children: ReactNode }) {
  return <div className={`service-experience service-experience--${theme}`}>{children}</div>;
}

export function ServiceHero({ number, name, lines, description, tags, children }: {
  number: string; name: string; lines: [string, string, string]; description: string; tags: string[]; children: ReactNode;
}) {
  return <section className="service-launch" aria-labelledby="service-title">
    <div className="container">
      <div className="service-launch__meta"><Link href="/#servicios">← Todos los servicios</Link><span>{number} / {name}</span><span className="service-launch__edition">LIKE A ROCKET — ESPECIALIDADES</span></div>
      <div className="service-launch__stage">
        <h1 id="service-title" className="service-launch__title">{lines.map((line, i) => <span key={line} className={i === 2 ? "service-accent" : undefined}>{line}</span>)}</h1>
        <div className="service-launch__art" aria-hidden="true">{children}</div>
      </div>
      <div className="service-launch__bottom"><div className="service-launch__tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>{description}</p><Link href="/contacto" className="service-launch__cta" aria-label="Hablemos de tu proyecto"><span>Hablemos de<br />tu proyecto</span><b aria-hidden="true">↗</b></Link></div>
    </div>
  </section>;
}

export function ServiceTicker({ words }: { words: string[] }) {
  return <div className="service-ticker" aria-hidden="true"><div>{[0, 1, 2, 3].map((n) => <span key={n}>{words.map((word) => <span key={word}>{word}<b>✳</b></span>)}</span>)}</div></div>;
}

export function BrowserArtwork() {
  return <div className="browser-artwork"><div className="browser-artwork__chrome"><span>● ● ●</span><span>tu próximo capítulo ↗</span></div><div className="browser-artwork__body"><span className="mono-label">DISEÑO CON INTENCIÓN / LAR®</span><strong>HAZ<br /><em>clic.</em></strong><div><span>Una experiencia.<br />Muchas posibilidades.</span><b>↗</b></div></div><span className="browser-artwork__cursor">↖ <span>Tu próximo cliente</span></span><span className="browser-artwork__note">HECHO PARA CONVERTIR</span></div>;
}

export function PaidArtwork() {
  return <div className="paid-artwork"><span className="mono-label">EL RECORRIDO QUE IMPORTA</span><div className="paid-artwork__arrow">↗</div><div className="paid-artwork__route"><span>ATENCIÓN</span><span>INTERÉS</span><strong>ACCIÓN ↗</strong></div><span className="paid-artwork__badge">GOOGLE<br />+ META</span></div>;
}

export function SeoArtwork() {
  return <div className="seo-artwork"><Image src="/images/seo-location-chrome.png" alt="" fill priority sizes="(max-width: 760px) 80vw, 44vw" /><span className="seo-artwork__label seo-artwork__label--one">BÚSQUEDA LOCAL</span><span className="seo-artwork__label seo-artwork__label--two">RESPUESTAS DE IA</span></div>;
}

export function SocialArtwork() {
  return <div className="social-artwork"><div className="social-artwork__poster social-artwork__poster--back"><span>IDEAS QUE SE</span><strong>GUAR<br />DAN.</strong><span>like a rocket. ↗</span></div><div className="social-artwork__poster social-artwork__poster--front"><span>CONTENIDO CON PERSONALIDAD</span><strong>NO<br /><em>pases</em><br />DE LARGO.</strong><span>like a rocket. ↗</span></div><span className="social-artwork__stamp">TU MARCA<br />TIENE VOZ ↗</span></div>;
}

export function ServiceHeading({ label, title, accent, description }: { label: string; title: string; accent?: string; description?: string }) {
  return <Reveal className="service-section-heading"><span className="mono-label">{label}</span><h2>{title}{accent && <><br /><em>{accent}</em></>}</h2>{description && <p>{description}</p>}</Reveal>;
}

export function ServiceScope({ label = "LO QUE PONEMOS EN MARCHA", title, accent, items }: {
  label?: string; title: string; accent: string; items: { title: string; text: string }[];
}) {
  return <section className="service-scope"><div className="container service-scope__grid"><Reveal className="service-scope__intro"><span className="mono-label">{label}</span><h2>{title}<br /><em>{accent}</em></h2><span className="service-scope__symbol" aria-hidden="true">✳</span></Reveal><div className="service-scope__items">{items.map((item, i) => <Reveal key={item.title}><details className="scope-detail" open={i === 0}><summary><span className="mono-label">0{i + 1}</span><h3>{item.title}</h3><span className="scope-detail__toggle" aria-hidden="true">+</span></summary><p>{item.text}</p></details></Reveal>)}</div></div></section>;
}

export function ServiceMetric({ label, title, accent, description, metrics }: {
  label: string; title: string; accent: string; description: string; metrics: { value: string; label: string }[];
}) {
  return <section className="service-metric"><div className="container"><Reveal className="service-metric__top"><span className="mono-label">{label}</span><span aria-hidden="true">↗</span></Reveal><Reveal as="h2">{title}<br /><em>{accent}</em></Reveal><div className="service-metric__bottom"><Reveal as="p">{description}</Reveal><div className="service-metric__items">{metrics.map((metric) => <Reveal key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></Reveal>)}</div></div></div></section>;
}

export function ServiceClose({ title, description, current }: { title: string; description: string; current: string }) {
  return <><section className="service-close"><div className="container"><Reveal><span className="mono-label">EL SIGUIENTE MOVIMIENTO ES TUYO</span><Link href="/contacto" className="service-close__title"><h2>{title}</h2><span aria-hidden="true">↗</span></Link><div className="service-close__bottom"><p>{description}</p><Link href="/contacto" className="btn btn--primary">Reserva tu diagnóstico gratuito ↗</Link></div></Reveal></div></section><nav className="service-siblings container" aria-label="Otros servicios"><span className="mono-label">TODO ESTÁ CONECTADO</span>{services.filter((s) => s.slug !== current).map((s) => <Link href={`/${s.slug}`} key={s.slug}>{s.name} <span aria-hidden="true">↗</span></Link>)}</nav></>;
}

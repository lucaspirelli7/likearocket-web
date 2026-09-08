import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Section({
  children,
  tight = false,
  className = "",
  id,
}: {
  children: ReactNode;
  tight?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section${tight ? " section--tight" : ""} ${className}`.trim()}>
      <div className="container">{children}</div>
    </section>
  );
}

/** Cabecera de página de servicio / sección interior. */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions = true,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: boolean;
}) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal as="h1" className="t-hero">{title}</Reveal>
        <Reveal as="p" className="lead">{lead}</Reveal>
        {actions && (
          <Reveal className="hero__actions">
            <Button href={site.cta.primary.href} size="lg">{site.cta.primary.label}</Button>
            <Button href={site.phoneHref} variant="ghost" size="lg">Llámanos ↗</Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Callout({
  title,
  children,
  tone = "cyan",
}: {
  title: string;
  children: ReactNode;
  tone?: "cyan" | "magenta";
}) {
  return (
    <div className={`callout${tone === "magenta" ? " callout--magenta" : ""}`}>
      <h3 className="t-h3">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function FeatureList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flist">
      {items.map((it, i) => (
        <li key={i}>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <div className="steps">
      {steps.map((s, i) => (
        <div className="step" key={i}>
          <div className="step__n">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MediaPlaceholder({ label, play = false }: { label: string; play?: boolean }) {
  return (
    <div className="media-ph">
      {play && (
        <div className="media-ph__play">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
      <span className="media-ph__label">{label}</span>
    </div>
  );
}

export function CaseCard({
  sector,
  start,
  did,
  outcome,
  result,
}: {
  sector: string;
  start: string;
  did: string;
  outcome: string;
  result: string;
}) {
  return (
    <article className="case">
      <span className="case__sector">{sector}</span>
      <dl>
        <div>
          <dt>Punto de partida</dt>
          <dd>{start}</dd>
        </div>
        <div>
          <dt>Qué hicimos</dt>
          <dd>{did}</dd>
        </div>
        <div>
          <dt>Qué pasó</dt>
          <dd>{outcome}</dd>
        </div>
      </dl>
      <p className="case__result">{result}</p>
    </article>
  );
}

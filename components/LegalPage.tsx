import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/primitives";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="stack">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="t-h1">{title}</h1>
        </Reveal>
        <Reveal className="prose" >
          <p className="muted" style={{ marginTop: "1.5rem" }}>
            Texto pendiente de redacción legal. Contenido de ejemplo para no dejar la ruta en 404.
          </p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CaseCard, Eyebrow } from "@/components/ui/primitives";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Cómo medimos el impacto de una web y sus campañas. Escenarios ilustrativos de captación y métricas de negocio.",
};

const casos = [
  {
    sector: "Clínica dental · Valencia",
    start: "Web lenta, sin formulario visible y sin campañas activas.",
    did: "Nueva web enfocada a la reserva de cita y campañas de Google Ads para su área.",
    outcome: "Las solicitudes de cita por la web crecieron de forma sostenida durante el primer trimestre.",
    result: "De 3 a 20 solicitudes de cita al mes.",
  },
  {
    sector: "Reformas · Área metropolitana",
    start: "Dependían del boca a boca y de un perfil de redes sin actividad.",
    did: "Landing de campaña y publicidad en Meta y Google para búsquedas locales.",
    outcome: "Empezaron a entrar presupuestos cada semana con un coste por contacto estable.",
    result: "Coste por contacto por debajo de su objetivo desde el segundo mes.",
  },
];

export default function ResultadosPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <Reveal><Eyebrow>Resultados</Eyebrow></Reveal>
          <Reveal as="h1" className="t-hero">
            El impacto se <span className="text-grad">mide</span>.
          </Reveal>
          <Reveal as="p" className="lead">
            Estos escenarios ilustrativos muestran cómo conectamos un punto de partida, un plan de acción y una métrica de negocio. Son ejemplos, no resultados verificados de clientes.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--2">
          {casos.map((c) => (
            <Reveal key={c.sector}>
              <CaseCard {...c} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="stack">
            <Eyebrow>Cómo lo medimos</Eyebrow>
            <h2 className="t-h1">Cada servicio, un número que el cliente entiende.</h2>
          </Reveal>
          <Reveal className="stat-row">
            <div className="stat">
              <b>Diseño Web</b>
              <span>Cuántos visitantes acaban contactando.</span>
            </div>
            <div className="stat">
              <b>Paid Media</b>
              <span>Coste por contacto, llamadas y formularios.</span>
            </div>
            <div className="stat">
              <b>SEO Local &amp; GEO</b>
              <span>Llamadas desde la ficha y posición en el mapa.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Definamos qué significa crecer para tu negocio."
        text="Cuéntanos dónde estás hoy y te decimos qué resultado es realista y en cuánto tiempo."
      />
    </>
  );
}

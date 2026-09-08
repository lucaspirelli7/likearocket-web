import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Callout, Eyebrow, FeatureList } from "@/components/ui/primitives";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Like A Rocket es una agencia de marketing digital enfocada en resultados. Equipo pequeño, trato cercano, informes claros y presupuesto caso a caso.",
};

const equipo = [
  {
    name: "Pedro de Gabriel",
    role: "Fundador · Estrategia",
    text: "Define el plan de cada cliente y lleva la relación directa.",
  },
  {
    name: "Lucas A. Pirelli",
    role: "Marketing y Desarrollo Web",
    text: "Diseño, desarrollo de las webs y montaje de la medición.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <Reveal><Eyebrow>Sobre nosotros</Eyebrow></Reveal>
          <Reveal as="h1" className="t-hero">
            Somos un equipo pequeño con <span className="text-grad">una obsesión</span>: que te lleguen
            clientes.
          </Reveal>
          <Reveal as="p" className="lead">
            Like A Rocket es una agencia de marketing digital. Hacemos webs que venden y campañas que
            traen clientes, y lo medimos con números que se entienden.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split split--half">
          <Reveal className="stack">
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="t-h1">Cerca, claros y sin sorpresas.</h2>
          </Reveal>
          <Reveal>
            <FeatureList
              items={[
                <><strong>Una sola prioridad por proyecto.</strong> Sabemos qué número estamos moviendo y por qué.</>,
                <><strong>Tú apruebas antes.</strong> Nada sale publicado sin tu visto bueno.</>,
                <><strong>Informe cada mes.</strong> Métricas reales y el plan del mes siguiente.</>,
                <><strong>Presupuesto caso a caso.</strong> Sin paquetes cerrados ni letra pequeña.</>,
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="stack">
            <Eyebrow>El equipo</Eyebrow>
            <h2 className="t-h1">Quién está detrás.</h2>
          </Reveal>
          <div className="grid grid--2" style={{ marginTop: "2rem" }}>
            {equipo.map((p) => (
              <Reveal key={p.name} className="card">
                <h3 className="t-h3">{p.name}</h3>
                <p>
                  <strong style={{ color: "var(--text)" }}>{p.role}</strong>
                  <br />
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container split split--half">
          <Reveal>
            <Callout title="Desde cuándo">
              Llevamos años ayudando a pymes españolas a tener una presencia digital que trabaje, no
              que decore.
            </Callout>
          </Reveal>
          <Reveal>
            <Callout title="Dónde estamos">
              Trabajamos en remoto con clientes de toda España. Nos coordinamos por videollamada y
              correo.
            </Callout>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="¿Hablamos de tu negocio?"
        text="Una reunión corta, gratuita y sin compromiso para ver si encajamos."
      />
    </>
  );
}

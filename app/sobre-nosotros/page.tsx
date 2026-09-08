import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre nosotros · Contigo, todo el equipo",
  description:
    "Like A Rocket es una agencia de marketing digital con nombre y apellidos. Hablas siempre con la misma persona y detrás tienes a todo el equipo: diseño, campañas, contenido y datos.",
};

const equipo = [
  {
    role: "Fundador · Estrategia",
    name: "Pedro de Gabriel",
    text: "Define el plan de cada cliente y lleva la relación. Es quien coge el teléfono.",
  },
  {
    role: "Marketing y Desarrollo Web",
    name: "Lucas A. Pirelli",
    text: "Diseña y desarrolla las webs, monta las campañas y deja la medición funcionando.",
  },
  {
    role: "Producción",
    name: "El resto del equipo",
    text: "Diseño, redacción, contenido para redes y edición de vídeo. Las manos que hacen que todo salga a tiempo.",
  },
];

const principios = [
  ["Una prioridad", "Sabemos qué número estamos moviendo y por qué. Sin dispersión."],
  ["Tú apruebas", "Nada sale publicado sin tu visto bueno. Ni un post, ni un anuncio."],
  ["Informe cada mes", "Métricas reales y el plan del mes siguiente. Siempre las mismas."],
  ["Caso a caso", "Presupuesto a medida de tu negocio. Sin paquetes cerrados ni letra pequeña."],
];

export default function SobreNosotrosPage() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero" aria-labelledby="about-title">
        <div className="container">
          <div className="about-hero__meta">
            <Link href="/#servicios">← Volver al inicio</Link>
            <span>SOBRE NOSOTROS</span>
            <span className="about-hero__edition">LIKE A ROCKET — EL EQUIPO</span>
          </div>

          <div className="about-hero__stage">
            <h1 id="about-title" className="about-hero__title">
              <span>CONTIGO,</span>
              <span>TODO EL</span>
              <span className="about-hero__punch">EQUIPO.</span>
            </h1>

            <Reveal className="about-hero__card">
              <div className="result-data__label">
                <span>LA AGENCIA, EN CORTO</span>
                <span aria-hidden="true">✳</span>
              </div>
              <ul className="about-ficha">
                <li>
                  <span>Equipo</span>
                  <b>Varias manos, un contacto</b>
                </li>
                <li>
                  <span>Dónde</span>
                  <b>Remoto · toda España</b>
                </li>
                <li>
                  <span>Apruebas</span>
                  <b>Tú, antes de publicar</b>
                </li>
                <li>
                  <span>Informe</span>
                  <b>Cada mes ↗</b>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="about-hero__bottom">
            <div className="about-hero__tags">
              <span>Cercanía</span>
              <span>Claridad</span>
              <span>Sin sorpresas</span>
            </div>
            <p>
              Somos una agencia de marketing digital con nombre y apellidos. Hablas siempre con la
              misma persona y detrás tienes a todo el equipo: diseño, campañas, contenido y datos.
              Cada web, cada campaña y cada informe pasan por ti antes de salir.
            </p>
            <Link href="/contacto" className="about-hero__link" aria-label="Hablemos de tu proyecto">
              <span>
                Hablemos de
                <br />
                tu proyecto
              </span>
              <b aria-hidden="true">↗</b>
            </Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-label="Cerca, claros, sin sorpresas">
        <div className="ticker__track" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span className="ticker__group" key={i}>
              CERCA <b>✳</b> CLAROS <b>✳</b> SIN SORPRESAS <b>✳</b>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* EL EQUIPO */}
      <section className="about-team">
        <div className="container">
          <Reveal className="section-heading">
            <span className="mono-label">01 / QUIÉN ESTÁ DETRÁS</span>
            <div>
              <h2>
                Un equipo detrás.
                <br />
                <span className="serif-accent">Un interlocutor delante.</span>
              </h2>
              <p>
                Trabajan varias manos en tu proyecto, pero siempre hablas con la misma persona. Sin
                capas entre tu negocio y el trabajo.
              </p>
            </div>
            <span className="heading-asterisk" aria-hidden="true">✳</span>
          </Reveal>

          <div className="about-team__grid">
            {equipo.map((p, i) => (
              <Reveal className="about-member" key={p.name} delay={i * 80}>
                <span className="about-member__role">{p.role}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="process-editorial">
        <div className="container">
          <Reveal className="process-heading">
            <span className="mono-label">02 / CÓMO TRABAJAMOS</span>
            <h2>
              Cerca, claros
              <br />
              <span className="serif-accent">y sin sorpresas.</span>
            </h2>
            <p>De la primera conversación al informe de cada mes.</p>
          </Reveal>
          <div className="process-grid">
            {principios.map(([title, text], i) => (
              <Reveal className="process-step" key={title} delay={i * 80}>
                <span className="process-step__number">
                  0{i + 1}
                  <span aria-hidden="true">↗</span>
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="home-contact">
        <div className="container">
          <Reveal>
            <span className="mono-label">¿NOS CONOCEMOS?</span>
            <Link href="/contacto" className="contact-display">
              <span>
                HABLEMOS<span className="serif-accent">.</span>
              </span>
              <span className="contact-display__arrow" aria-hidden="true">↗</span>
            </Link>
            <div className="home-contact__bottom">
              <p>
                Cuéntanos tu caso.
                <br />
                Te decimos con quién trabajarías y por dónde empezar.
              </p>
              <span>Diagnóstico gratuito. Sin compromiso.</span>
              <Link href="/contacto" className="btn btn--primary">
                Hablemos de tu proyecto <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

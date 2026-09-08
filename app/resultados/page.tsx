import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resultados · Lo que pasa después",
  description:
    "Cómo leemos un resultado: sector, punto de partida, qué hicimos y qué pasó. Escenarios ilustrativos y el número que mira el cliente en cada servicio.",
};

const casos = [
  {
    sector: "Reformas · Área metropolitana",
    start: "Dependían del boca a boca y de un perfil de redes sin actividad.",
    did: "Landing de campaña y publicidad en Meta y Google para búsquedas locales.",
    outcome: "Empezaron a entrar presupuestos cada semana con un coste por contacto estable.",
    result: "Coste por contacto por debajo de su objetivo desde el segundo mes.",
    note: "Escenario de ejemplo",
  },
  {
    sector: "Fisioterapia · Sur de Madrid",
    start: "Ficha de Google sin fotos, sin reseñas recientes y fuera del mapa en su barrio.",
    did: "Optimización de la ficha, sistema de reseñas y coherencia de datos en directorios.",
    outcome: "Más visualizaciones y llamadas directas desde la ficha en la zona objetivo.",
    result: "De invisible a primeras posiciones del mapa para su servicio y barrio.",
    note: "Escenario de ejemplo",
  },
];

export default function ResultadosPage() {
  return (
    <div className="results-page">
      {/* HERO */}
      <section className="results-hero" aria-labelledby="results-title">
        <div className="container">
          <div className="results-hero__meta">
            <Link href="/#servicios">← Volver al inicio</Link>
            <span>RESULTADOS</span>
            <span className="results-hero__edition">LIKE A ROCKET — CÓMO LO MEDIMOS</span>
          </div>

          <div className="results-hero__stage">
            <h1 id="results-title" className="results-hero__title">
              <span>LO QUE</span>
              <span>PASA</span>
              <span className="results-hero__punch">DESPUÉS.</span>
            </h1>

            <Reveal className="results-hero__card">
              <div className="result-data__label">
                <span>FICHA DE CASO</span>
                <span aria-hidden="true">✳</span>
              </div>
              <ul className="results-ficha">
                <li>
                  <span>Sector</span>
                  <b>Clínica dental</b>
                </li>
                <li>
                  <span>Punto de partida</span>
                  <b>Sin citas por la web</b>
                </li>
                <li>
                  <span>Qué hicimos</span>
                  <b>Web + Google Ads local</b>
                </li>
                <li>
                  <span>Qué pasó</span>
                  <b>×6 solicitudes de cita ↗</b>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="results-hero__bottom">
            <div className="results-hero__tags">
              <span>Sector</span>
              <span>Punto de partida</span>
              <span>Qué hicimos</span>
              <span>Qué pasó</span>
            </div>
            <p>
              No enseñamos una pared de logos. Enseñamos casos con el mismo formato de siempre y,
              cuando no hay permiso para dar el nombre, los publicamos por sector. Los números de esta
              página son escenarios ilustrativos, no resultados verificados de clientes.
            </p>
            <Link href="/contacto" className="results-hero__link" aria-label="Hablemos de tu proyecto">
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
      <div className="ticker" aria-label="Sector, punto de partida, qué hicimos, qué pasó">
        <div className="ticker__track" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span className="ticker__group" key={i}>
              SECTOR <b>✳</b> PUNTO DE PARTIDA <b>✳</b> QUÉ HICIMOS <b>✳</b> QUÉ PASÓ <b>✳</b>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* MÁS CASOS */}
      <section className="results-cases">
        <div className="container">
          <Reveal className="section-heading">
            <span className="mono-label">01 / CADA CASO, EL MISMO FORMATO</span>
            <div>
              <h2>
                Dos ahora.
                <br />
                <span className="serif-accent">Diez con el tiempo.</span>
              </h2>
              <p>
                Sector, punto de partida, qué hicimos y qué pasó. Una plantilla que funciona con dos
                fichas y con diez.
              </p>
            </div>
            <span className="heading-asterisk" aria-hidden="true">✳</span>
          </Reveal>

          <div className="case-grid">
            {casos.map((c, i) => (
              <Reveal as="article" className="case-record" key={c.sector} delay={i * 80}>
                <span className="mono-label case-record__sector">{c.sector}</span>
                <dl>
                  <div>
                    <dt>Punto de partida</dt>
                    <dd>{c.start}</dd>
                  </div>
                  <div>
                    <dt>Qué hicimos</dt>
                    <dd>{c.did}</dd>
                  </div>
                  <div>
                    <dt>Qué pasó</dt>
                    <dd>{c.outcome}</dd>
                  </div>
                </dl>
                <p className="case-record__result">
                  {c.result}
                  <span>{c.note}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASO A FONDO */}
      <section className="results-featured">
        <div className="container result-editorial__grid">
          <Reveal className="result-copy">
            <span className="mono-label">02 / UN CASO A FONDO — CLÍNICA DENTAL, VALENCIA</span>
            <h2>
              De 3 a 20 citas
              <br />
              <span className="serif-accent">al mes.</span>
            </h2>
            <p>
              Web lenta, sin formulario visible y sin campañas. Rehicimos la web enfocada a la reserva
              de cita y lanzamos Google Ads para su zona. Las solicitudes por la web crecieron de forma
              sostenida durante el primer trimestre.
            </p>
            <Link href="/diseno-web" className="editorial-link">
              Cómo trabajamos el diseño web <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>

          <Reveal className="result-data">
            <div className="result-data__label">
              <span>EJEMPLO ILUSTRATIVO · CITAS / MES</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="result-number">
              <span>3</span>
              <span className="result-number__arrow" aria-hidden="true">↗</span>
              <strong>20</strong>
            </div>
            <div className="result-bars" aria-hidden="true">
              <span style={{ height: "18%" }} />
              <span style={{ height: "100%" }} />
            </div>
            <div className="result-data__foot">
              <span>ANTES → PRIMER TRIMESTRE</span>
              <span>Escenario de ejemplo</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EL NÚMERO QUE MIRAS */}
      <section className="results-metrics">
        <div className="container">
          <Reveal className="section-heading">
            <span className="mono-label">03 / EL NÚMERO QUE MIRAS</span>
            <div>
              <h2>
                Cada servicio,
                <br />
                <span className="serif-accent">un número claro.</span>
              </h2>
              <p>Sin métricas de vanidad. El dato que le importa a tu negocio en cada frente.</p>
            </div>
            <span className="heading-asterisk" aria-hidden="true">✳</span>
          </Reveal>

          <div className="service-list">
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <Link href={`/${service.slug}`} className="service-row">
                  <span className="service-row__number">0{i + 1}</span>
                  <h3>{service.name}</h3>
                  <p>{service.metric}</p>
                  <span className="service-row__arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="services-foot">
            <span>Cada mes ves esos números y qué haremos el mes siguiente.</span>
            <Link href="/contacto">
              Pide tu diagnóstico gratuito <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="home-contact">
        <div className="container">
          <Reveal>
            <span className="mono-label">TU CASO PUEDE SER EL PRÓXIMO</span>
            <Link href="/contacto" className="contact-display">
              <span>
                ¿EMPEZAMOS<span className="serif-accent">?</span>
              </span>
              <span className="contact-display__arrow" aria-hidden="true">↗</span>
            </Link>
            <div className="home-contact__bottom">
              <p>
                Cuéntanos dónde estás hoy.
                <br />
                Te decimos qué resultado es realista y en cuánto tiempo.
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

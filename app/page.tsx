import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { HomeMotion } from "@/components/HomeMotion";
import { services } from "@/lib/site";

const descriptions = [
  "Diseño que enamora. Experiencias que convierten. Creamos tu mejor comercial, abierto las 24 horas.",
  "El mensaje correcto, delante de quien importa. Campañas en Google y Meta que convierten interés en clientes.",
  "Haz que te encuentren. En tu ciudad, en Google y en las nuevas respuestas de la inteligencia artificial.",
  "Una marca que se reconoce y se recuerda. Estrategia, contenido y una presencia que tiene algo que decir.",
];
const steps = [
  ["Escuchamos.", "Primero tu negocio. Revisamos dónde estás, qué necesitas y qué está frenando tu crecimiento."],
  ["Trazamos el plan.", "Una estrategia a medida, con prioridades claras. Sabrás qué vamos a hacer y por qué."],
  ["Lo lanzamos.", "Diseño, campañas y contenido trabajando juntos. Ejecutamos, medimos y afinamos cada detalle."],
  ["Vamos más allá.", "Cada mes, números claros y siguientes pasos. Lo que funciona se potencia. Lo que no, se cambia."],
];

export default function HomePage() {
  return (
    <div className="rocket-home">
      <HomeMotion />
      <section className="launch-hero" aria-labelledby="launch-title">
        <div className="container launch-hero__container">
          <div className="launch-meta"><span><i /> Agencia de marketing digital</span><span>Estrategia. Creatividad. Resultados.</span></div>
          <div className="launch-composition">
            <h1 id="launch-title" className="launch-title"><span>TU MARCA.</span><span>EN OTRA</span><span className="launch-title__pink">ÓRBITA<span className="title-dot">.</span></span></h1>
            <div className="launch-art" aria-hidden="true">
              <span className="art-coordinate">LAR / UNIVERSO CREATIVO</span>
              <div className="launch-art__image"><Image src="/images/orbit-chrome-transparent.png" alt="" fill priority sizes="(max-width: 700px) 70vw, 48vw" /></div>
              <span className="art-plus art-plus--one">+</span><span className="art-plus art-plus--two">+</span>
              <span className="art-caption">Ideas con fuerza de atracción.</span>
            </div>
            <Link href="/contacto" className="launch-link"><span>Hablemos de<br />tu próximo salto</span><span className="launch-link__arrow" aria-hidden="true">↗</span></Link>
          </div>
          <div className="launch-bottom"><a href="#servicios" className="scroll-cue"><span aria-hidden="true">↓</span> Explora el universo</a><p>Unimos diseño, estrategia y marketing digital<br className="desktop-break" /> para llevar tu negocio donde quieres estar.</p><span className="launch-bottom__note">DESPEGAMOS JUNTOS ↗</span></div>
        </div>
      </section>

      <div className="ticker" aria-label="Estrategia, diseño, impacto">
        <div className="ticker__track" aria-hidden="true">{[0, 1, 2, 3].map((i) => <span className="ticker__group" key={i}>ESTRATEGIA <b>✳</b> DISEÑO <b>✳</b> IMPACTO <b>✳</b></span>)}</div>
      </div>

      <section id="servicios" className="services-editorial">
        <div className="container">
          <Reveal className="section-heading"><span className="mono-label">01 / LO QUE HACEMOS</span><div><h2>Todo conectado.<br /><span className="serif-accent">Todo hacia arriba.</span></h2><p>Cuatro especialidades. Una misma dirección:<br />hacer crecer tu negocio.</p></div><span className="heading-asterisk" aria-hidden="true">✳</span></Reveal>
          <div className="service-list">{services.map((service, i) => <Reveal key={service.slug}><Link href={`/${service.slug}`} className="service-row"><span className="service-row__number">0{i + 1}</span><h3>{service.name}</h3><p>{descriptions[i]}</p><span className="service-row__arrow" aria-hidden="true">↗</span></Link></Reveal>)}</div>
          <div className="services-foot"><span>No necesitas hacerlo todo. Necesitas empezar por lo que importa.</span><Link href="/contacto">Encontramos tu punto de partida <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="container">
          <Reveal className="manifesto-top"><span className="mono-label">02 / NUESTRA FORMA DE PENSAR</span><span className="status-label"><i /> Ideas con los pies en la tierra</span></Reveal>
          <Reveal as="h2" className="manifesto-title">BONITO ES<br />EL PRINCIPIO.<br /><span className="outline-type">EFECTIVO</span><span className="manifesto-end"> ES EL OBJETIVO<span>.</span></span></Reveal>
          <div className="manifesto-bottom"><span className="manifesto-symbol" aria-hidden="true">↗</span><Reveal><p>Nos gusta el diseño que te hace parar.<br />Nos gusta aún más cuando te hace avanzar.</p><p className="muted">Somos un equipo cercano que conecta creatividad y negocio. Cada web, cada campaña y cada idea tienen un propósito: que te lleguen clientes.</p><Link href="/sobre-nosotros" className="editorial-link">Conoce a tu próximo equipo <span aria-hidden="true">↗</span></Link></Reveal></div>
        </div>
      </section>

      <section className="result-editorial">
        <div className="container result-editorial__grid"><Reveal className="result-copy"><span className="mono-label">03 / DEL PLAN AL RESULTADO</span><h2>Menos promesas.<br /><span className="serif-accent">Más llamadas.</span></h2><p>De visitas a oportunidades reales. Así conectamos una web orientada a reservas con campañas de captación local.</p><Link href="/resultados" className="editorial-link">Cómo medimos el impacto <span aria-hidden="true">↗</span></Link></Reveal><Reveal className="result-data"><div className="result-data__label"><span>EJEMPLO ILUSTRATIVO · CITAS / MES</span><span>↗</span></div><div className="result-number"><span>3</span><span className="result-number__arrow">↗</span><strong>20</strong></div><div className="result-bars" aria-hidden="true">{[15, 100].map((n, i) => <span key={i} style={{ height: `${n}%` }} />)}</div><div className="result-data__foot"><span>ANTES → PRIMER TRIMESTRE</span><span>Escenario de ejemplo</span></div></Reveal></div>
      </section>

      <section className="process-editorial"><div className="container"><Reveal className="process-heading"><span className="mono-label">04 / ASÍ DESPEGAMOS</span><h2>Un gran salto.<br /><span className="serif-accent">Cuatro pasos claros.</span></h2><p>Cerca de ti, de la primera conversación<br />al siguiente objetivo.</p></Reveal><div className="process-grid">{steps.map(([title, description], i) => <Reveal className="process-step" key={title} delay={i * 80}><span className="process-step__number">0{i + 1}<span aria-hidden="true">↗</span></span><h3>{title}</h3><p>{description}</p></Reveal>)}</div></div></section>

      <section className="home-contact"><div className="container"><Reveal><span className="mono-label">TU PRÓXIMO CAPÍTULO EMPIEZA AQUÍ</span><Link href="/contacto" className="contact-display"><span>¿DESPEGAMOS<span className="serif-accent">?</span></span><span className="contact-display__arrow" aria-hidden="true">↗</span></Link><div className="home-contact__bottom"><p>Cuéntanos dónde estás.<br />Imaginemos hasta dónde puedes llegar.</p><span>Diagnóstico gratuito. Sin compromiso.</span><Link href="/contacto" className="btn btn--primary">Hablemos de tu proyecto <span aria-hidden="true">↗</span></Link></div></Reveal></div></section>
    </div>
  );
}

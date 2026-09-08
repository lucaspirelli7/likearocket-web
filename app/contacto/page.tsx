import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto · Cuéntanos tu caso",
  description:
    "Reserva tu diagnóstico gratuito. Cuéntanos qué haces y qué quieres conseguir. Reunión corta, sin compromiso y respuesta en menos de 24 h.",
};

const whatsapp = `https://wa.me/${site.phoneHref.replace(/[^0-9]/g, "")}`;

export default function ContactoPage() {
  return (
    <div className="dark-page">
      {/* HERO */}
      <section className="page-hero" aria-labelledby="contact-title">
        <div className="container">
          <div className="page-hero__meta">
            <Link href="/#servicios">← Volver al inicio</Link>
            <span>CONTACTO</span>
            <span className="page-hero__edition">LIKE A ROCKET — HABLEMOS</span>
          </div>

          <div className="page-hero__stage">
            <h1 id="contact-title" className="page-hero__title">
              <span>CUÉNTANOS</span>
              <span>TU</span>
              <span className="page-hero__punch">CASO.</span>
            </h1>

            <Reveal className="page-hero__card">
              <div className="result-data__label">
                <span>CONTACTO DIRECTO</span>
                <span aria-hidden="true">✳</span>
              </div>
              <ul className="page-ficha">
                <li>
                  <span>Teléfono</span>
                  <b>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </b>
                </li>
                <li>
                  <span>Email</span>
                  <b>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </b>
                </li>
                <li>
                  <span>WhatsApp</span>
                  <b>
                    <a href={whatsapp} target="_blank" rel="noopener">
                      Escríbenos ↗
                    </a>
                  </b>
                </li>
                <li>
                  <span>Horario</span>
                  <b>{site.hours}</b>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="page-hero__bottom">
            <div className="page-hero__tags">
              <span>Gratis</span>
              <span>Sin compromiso</span>
              <span>Respuesta en 24 h</span>
            </div>
            <p>
              Cuéntanos qué haces y qué quieres conseguir. Con eso preparamos una reunión corta y sin
              rodeos. Y si prefieres hablar ya, el teléfono está aquí al lado.
            </p>
            <Link href="#formulario" className="page-hero__link" aria-label="Ir al formulario">
              <span>
                Ir al
                <br />
                formulario
              </span>
              <b aria-hidden="true">↓</b>
            </Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-label="Diagnóstico gratis, sin compromiso, respuesta en 24 h">
        <div className="ticker__track" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span className="ticker__group" key={i}>
              DIAGNÓSTICO GRATIS <b>✳</b> SIN COMPROMISO <b>✳</b> RESPUESTA EN 24 H <b>✳</b>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* FORMULARIO */}
      <section className="contact-section" id="formulario">
        <div className="container contact-layout">
          <Reveal className="contact-brief">
            <span className="mono-label">01 / RESERVA TU DIAGNÓSTICO</span>
            <h2>
              Cinco campos.
              <br />
              <span className="serif-accent">Nada más.</span>
            </h2>
            <p>
              Cuéntanos qué haces y qué quieres conseguir. Con eso preparamos una reunión corta,
              gratuita y sin compromiso. Te respondemos en menos de 24 h en días laborables.
            </p>
            <a href={site.phoneHref} className="editorial-link">
              O llámanos directamente <span aria-hidden="true">↗</span>
            </a>
          </Reveal>

          <Reveal className="contact-panel">
            <span className="mono-label">EL FORMULARIO</span>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

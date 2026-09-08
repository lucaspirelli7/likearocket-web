import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Callout, Eyebrow } from "@/components/ui/primitives";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y cita",
  description:
    "Reserva tu diagnóstico gratuito. Cuéntanos tu situación y te decimos por dónde empezar. Sin compromiso, respuesta en menos de 24 h.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <Reveal><Eyebrow>Contacto y cita</Eyebrow></Reveal>
          <Reveal as="h1" className="t-hero">
            Reserva tu <span className="text-grad">diagnóstico gratuito</span>.
          </Reveal>
          <Reveal as="p" className="lead">
            Cuéntanos tu situación y te decimos por dónde empezar. La reunión es corta, gratuita y sin
            compromiso.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split split--wide-left">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal as="aside" className="contact-info">
            <div className="contact-info__item">
              <span>Teléfono</span>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div className="contact-info__item">
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-info__item">
              <span>Horario</span>
              <p>
                Lunes a viernes
                <br />
                9:00 – 18:00
              </p>
            </div>
            <div className="contact-info__item">
              <span>Cómo trabajamos</span>
              <p className="muted" style={{ fontSize: "0.95rem" }}>
                En remoto, con clientes de toda España. Nos coordinamos por videollamada y correo.
              </p>
            </div>
            <Callout title="¿Prefieres hablar directamente?" tone="magenta">
              Llámanos o escríbenos por WhatsApp al{" "}
              <a href={site.phoneHref} style={{ color: "var(--cyan)" }}>
                {site.phone}
              </a>
              .
            </Callout>
          </Reveal>
        </div>
      </section>
    </>
  );
}

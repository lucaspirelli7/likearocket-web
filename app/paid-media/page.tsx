import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PaidArtwork, ServiceClose, ServiceExperience, ServiceHeading, ServiceHero, ServiceMetric, ServiceScope, ServiceTicker } from "@/components/services/ServiceEditorial";

export const metadata: Metadata = {
  title: "Paid Media · Hazte ver y elegir",
  description: "Campañas en Google y Meta que conectan tu negocio con nuevos clientes. Estrategia, creatividad, optimización e informes claros.",
};

export default function PaidMediaPage() {
  return <ServiceExperience theme="paid">
    <ServiceHero number="02" name="PAID MEDIA" lines={["HAZTE", "VER.", "Y ELEGIR."]} description="Tu próximo cliente está ahí fuera. Unimos estrategia, creatividad y campañas en Google y Meta para convertir su interés en acción." tags={["Google Ads", "Meta Ads", "Captación"]}><PaidArtwork /></ServiceHero>
    <ServiceTicker words={["EL MENSAJE", "LA PERSONA", "EL MOMENTO"]} />

    <section className="service-light paid-journey"><div className="container"><ServiceHeading label="01 / CADA CLIC TIENE UN DESPUÉS" title="No compramos atención." accent="Construimos el siguiente paso." description="La campaña es parte de un recorrido. El anuncio, la página y la respuesta de tu negocio tienen que trabajar juntos." /><div className="conversion-steps">{[
      ["01 / CONECTAR", "TE VEN.", "Un mensaje relevante para una persona que puede necesitarte."],
      ["02 / CONVENCER", "LES ENCAJA.", "Una oferta clara y una página que responde a sus preguntas."],
      ["03 / CONVERTIR", "TE LLAMAN.", "Un camino sencillo para pedir información, una cita o un presupuesto."],
    ].map(([label, title, text]) => <Reveal className="conversion-step" key={label}><span className="mono-label">{label}</span><h3>{title}</h3><p>{text}</p><span className="conversion-step__arrow" aria-hidden="true">↗</span></Reveal>)}</div></div></section>

    <ServiceScope title="La campaña se lanza." accent="El trabajo sigue." items={[
      { title: "Estrategia y montaje", text: "Estructuramos campañas, públicos, anuncios y medición desde cero. Definimos objetivos y conectamos las campañas con una página preparada para recibir contactos." },
      { title: "Gestión y optimización", text: "La campaña permanece activa y en seguimiento. Revisamos pujas, públicos y anuncios cada semana para aprender de lo que ocurre y ajustar la inversión." },
      { title: "Creatividad que evoluciona", text: "Cada trimestre entra material nuevo: vídeo vertical, mejoras en la landing o nuevas creatividades, según lo que necesite la campaña. Forma parte del servicio." },
      { title: "Informes y conversaciones", text: "Recibes un informe mensual con coste por contacto, llamadas y formularios. En una videollamada trimestral repasamos resultados y acordamos el siguiente plan." },
    ]} />

    <section className="paid-fit service-light"><div className="container"><ServiceHeading label="03 / ANTES DE PULSAR PUBLICAR" title="Para crecer, necesitamos" accent="un buen punto de partida." /><div className="fit-columns"><Reveal><span className="fit-sign" aria-hidden="true">↗</span><h3>Podemos hacer un buen equipo si…</h3><ul><li>Tu servicio tiene demanda y quieres captar nuevos clientes.</li><li>Puedes atender las llamadas y formularios que lleguen.</li><li>Estás dispuesto a invertir en medios durante varios meses.</li></ul></Reveal><Reveal><span className="fit-sign fit-sign--quiet" aria-hidden="true">↘</span><h3>Primero conviene resolver…</h3><ul><li>Una web que no facilita contactar o una oferta poco clara.</li><li>La falta de alguien que responda a los nuevos contactos.</li><li>La expectativa de resultados inmediatos y sin inversión.</li></ul></Reveal></div><div className="paid-notes"><p><strong>Tu inversión, bajo tu control.</strong> La publicidad se paga desde una cuenta tuya. Nuestro trabajo se cobra por separado.</p><p><strong>Un comienzo con recorrido.</strong> Contemplamos de dos a cuatro semanas de aprendizaje inicial. Los tiempos dependen de cada campaña.</p></div></div></section>
    <ServiceMetric label="RENDIMIENTO, EN CLARO" title="Menos métricas de escaparate." accent="Más oportunidades de negocio." description="Lo que importa es cuántas personas dan el paso y cuánto cuesta generar ese contacto. Los números de tu campaña, explicados sin rodeos." metrics={[{ value: "Coste", label: "Por contacto" }, { value: "Llamadas", label: "Y formularios" }]} />
    <ServiceClose current="paid-media" title="DA EL SIGUIENTE CLIC." description="Revisamos tu web, tu sector y tu margen para ver si la publicidad tiene sentido para ti ahora. Diagnóstico gratuito." />
  </ServiceExperience>;
}

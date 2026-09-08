import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SocialArtwork, ServiceClose, ServiceExperience, ServiceHeading, ServiceHero, ServiceMetric, ServiceScope, ServiceTicker } from "@/components/services/ServiceEditorial";

export const metadata: Metadata = {
  title: "Social Media · Para el scroll, conecta",
  description: "Estrategia, diseño y gestión de redes. Entre 4 y 6 publicaciones al mes, creadas para tu marca y aprobadas por ti antes de publicar.",
};

const concepts = [
  { channel: "INSTAGRAM", title: <>TU MARCA.<br /><em>Tu voz.</em></>, type: "IDENTIDAD / CONCEPTO" },
  { channel: "CARRUSEL", title: <>ESO QUE<br />QUIERES<br /><em>guardar.</em></>, type: "CONTENIDO ÚTIL / CONCEPTO" },
  { channel: "GOOGLE POST", title: <>ALGO<br /><em>bueno</em><br />MUY CERCA.</>, type: "NOVEDADES / CONCEPTO" },
  { channel: "FACEBOOK", title: <>HAY MUCHO<br />DE QUÉ<br /><em>hablar.</em></>, type: "COMUNIDAD / CONCEPTO" },
];

export default function SocialMediaPage() {
  return <ServiceExperience theme="social">
    <ServiceHero number="04" name="SOCIAL MEDIA" lines={["PARA EL", "SCROLL.", "CONECTA."]} description="Una marca con algo que decir merece una presencia a su altura. Creamos contenido con intención y mantenemos tus redes en movimiento." tags={["Estrategia", "Contenido", "Gestión"]}><SocialArtwork /></ServiceHero>
    <ServiceTicker words={["TU VOZ", "TU COMUNIDAD", "TU HUELLA"]} />

    <section className="service-light social-gallery"><div className="container"><ServiceHeading label="01 / CONTENIDO QUE TIENE ALGO QUE DECIR" title="Un universo propio." accent="En cada publicación." description="El formato cambia. Tu personalidad permanece. Conceptos visuales para explorar cómo se expresa una marca en diferentes canales." /><div className="social-poster-grid">{concepts.map((concept, i) => <Reveal className={`social-poster social-poster--${i}`} key={concept.channel} delay={i * 90}><div className="social-poster__top"><span>{concept.channel}</span><span aria-hidden="true">↗</span></div><h3>{concept.title}</h3><div className="social-poster__bottom"><span>like a rocket.</span><span className="mono-label">{concept.type}</span></div></Reveal>)}</div><div className="social-gallery__note"><span className="mono-label">DISEÑO QUE SE RECONOCE. CONTENIDO QUE SE RECUERDA.</span><span aria-hidden="true">✳</span></div></div></section>

    <section className="social-rhythm"><div className="container"><Reveal className="social-rhythm__number"><span className="mono-label">CADA MES, TU MARCA EN MOVIMIENTO</span><strong>4—6<span>↗</span></strong><span>publicaciones al mes</span></Reveal><Reveal className="social-rhythm__copy"><h2>Constancia.<br /><em>Con personalidad.</em></h2><p>Un calendario pensado para tu negocio, piezas diseñadas con coherencia y una presencia que no depende de que encuentres un hueco para publicar.</p><span className="mono-label">ESTRATEGIA → DISEÑO → APROBACIÓN → PUBLICACIÓN</span></Reveal></div></section>
    <ServiceScope title="Nosotros lo creamos." accent="Tú tienes la última palabra." items={[
      { title: "Un plan de contenido", text: "Definimos los temas y el calendario de cada mes. Elegimos qué contar y cómo hacerlo para mantener una presencia coherente con tu negocio." },
      { title: "Diseño y textos", text: "Creamos entre cuatro y seis publicaciones al mes, con textos y piezas visuales preparados para salir en los canales acordados." },
      { title: "Tu aprobación, antes de salir", text: "Recibes juntas todas las piezas del mes. Puedes comentar los cambios y ninguna publicación sale hasta que das el visto bueno." },
      { title: "Publicación y seguimiento", text: "Publicamos en las fechas acordadas y te entregamos un resumen mensual de lo que ha funcionado. El calendario sigue en marcha sin que tengas que perseguirlo." },
    ]} />
    <section className="service-light social-boundaries"><div className="container"><Reveal><span className="mono-label">UN ALCANCE CLARO DESDE EL PRINCIPIO</span><h2>Sabes qué entra.<br /><em>Y qué podemos sumar.</em></h2></Reveal><Reveal><p>El servicio se centra en planificar, crear y publicar contenido. La respuesta a mensajes y comentarios, las sesiones de fotos y las campañas de pago se contratan aparte.</p><p>Así puedes empezar con lo que necesitas y ampliar el trabajo cuando tenga sentido para tu negocio.</p></Reveal></div></section>
    <ServiceMetric label="UNA PRESENCIA QUE SE SOSTIENE" title="Que te reconozcan." accent="Que te recuerden." description="Seguimos las publicaciones del mes y la constancia de tu presencia. Revisamos qué contenido funciona para orientar el siguiente calendario." metrics={[{ value: "Tu voz", label: "En cada pieza" }, { value: "Cada mes", label: "Un plan claro" }]} />
    <ServiceClose current="social-media" title="TU MARCA TIENE MUCHO QUE CONTAR." description="Si tus redes llevan meses paradas, empecemos por el primer mes. Te mostramos un plan de contenido antes de decidir." />
  </ServiceExperience>;
}

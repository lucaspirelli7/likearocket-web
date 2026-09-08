import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { BrowserArtwork, ServiceClose, ServiceExperience, ServiceHeading, ServiceHero, ServiceMetric, ServiceScope, ServiceTicker } from "@/components/services/ServiceEditorial";
import { WebFormatPreview } from "@/components/services/ServicePreview";

export const metadata: Metadata = {
  title: "Diseño Web · Diseño que hace clic",
  description: "Webs a medida que conectan diseño y negocio. Landing de campaña o web completa, con dominio, alojamiento y una experiencia pensada para contactar.",
};

export default function DisenoWebPage() {
  return <ServiceExperience theme="web">
    <ServiceHero number="01" name="DISEÑO WEB" lines={["DISEÑO", "QUE HACE", "CLIC."]} description="La primera impresión cuenta. Lo que pasa después, también. Creamos webs con personalidad que convierten visitas en conversaciones." tags={["Diseño a medida", "Experiencia", "Conversión"]}><BrowserArtwork /></ServiceHero>
    <ServiceTicker words={["BUEN DISEÑO", "MEJOR EXPERIENCIA", "MÁS CONEXIÓN"]} />

    <section className="service-light service-showcase"><div className="container">
      <ServiceHeading label="01 / UNA WEB CON TU FORMA" title="No hay dos negocios iguales." accent="Tampoco debería haber dos webs." description="De una campaña puntual a todo tu universo de marca. Explora tres formas de presentar tu negocio." />
      <Reveal><WebFormatPreview /></Reveal>
      <div className="web-principles">{[["01", "Se entiende.", "Tu visitante sabe qué ofreces y por qué elegirte."], ["02", "Se disfruta.", "Diseño cuidado, navegación sencilla y velocidad."], ["03", "Se mueve.", "Cada página conduce a un siguiente paso claro."]].map(([n, title, text]) => <Reveal key={n}><span className="mono-label">{n} /</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
    </div></section>

    <ServiceScope title="Del primer píxel" accent="al último detalle." items={[
      { title: "Una web a tu medida", text: "Una landing enfocada a una campaña o una web completa con servicios, secciones y blog. Definimos el alcance según tu negocio y presupuestamos cada proyecto de forma individual." },
      { title: "Diseño y experiencia", text: "Una identidad visual coherente, navegación clara y una experiencia adaptada a móvil y escritorio. La reserva, el formulario o la consulta ocupan el lugar que necesitan." },
      { title: "Textos que conectan", text: "Redactamos el contenido para que se entienda lo que haces, se reconozca tu diferencia y resulte fácil dar el siguiente paso." },
      { title: "Dominio, alojamiento y legales", text: "Dejamos la parte técnica montada: dominio, alojamiento y páginas de aviso legal, privacidad y cookies dentro del alcance acordado." },
    ]} />

    <section className="service-light web-process"><div className="container"><ServiceHeading label="03 / DEL BRIEF AL LANZAMIENTO" title="Tú traes la idea." accent="Juntos le damos forma." /><div className="service-timeline">{[
      ["Nos conocemos", "Tu logo, fotos si las hay, accesos y media hora para entender tu negocio."],
      ["Ves la dirección", "Una primera propuesta de la página principal para empezar a darle forma juntos."],
      ["Afinamos", "Dos rondas de ajustes sobre la propuesta acordada. Cada detalle, con intención."],
      ["Publicamos", "Comprobamos carga, navegación y medición. Todo listo para recibir visitas."],
    ].map(([title, text], i) => <Reveal key={title} delay={i * 70}><span className="service-timeline__number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <ServiceMetric label="LA MÉTRICA QUE NOS MUEVE" title="Que entren está bien." accent="Que contacten, mejor." description="Medimos cuántas visitas se convierten en contactos. Esa es la conversación que queremos tener contigo cada vez que miramos tu web." metrics={[{ value: "Visitas", label: "El punto de partida" }, { value: "Contactos ↗", label: "El siguiente paso" }]} />
    <ServiceClose current="diseno-web" title="TU PRÓXIMA WEB EMPIEZA AQUÍ." description="¿Empiezas de cero o necesitas un cambio? Vemos tu caso y te decimos por dónde empezar. Sin compromiso." />
  </ServiceExperience>;
}

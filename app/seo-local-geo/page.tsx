import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SeoArtwork, ServiceClose, ServiceExperience, ServiceHeading, ServiceHero, ServiceMetric, ServiceScope, ServiceTicker } from "@/components/services/ServiceEditorial";
import { SearchPreview } from "@/components/services/ServicePreview";

export const metadata: Metadata = {
  title: "SEO Local & GEO · Tu zona, tu nombre, tu lugar",
  description: "Trabajamos la presencia de tu negocio en búsquedas locales y respuestas de IA. Ficha de Google, reseñas, directorios e información coherente.",
};

export default function SeoLocalGeoPage() {
  return <ServiceExperience theme="seo">
    <ServiceHero number="03" name="SEO LOCAL & GEO" lines={["TU ZONA.", "TU NOMBRE.", "TU LUGAR."]} description="Cuando alguien busca lo que haces, quieres estar en esa conversación. Trabajamos tu presencia en Google y en los buscadores de inteligencia artificial." tags={["Búsqueda local", "Google Business", "GEO / IA"]}><SeoArtwork /></ServiceHero>
    <ServiceTicker words={["CERCA", "RELEVANTE", "PRESENTE"]} />

    <section className="service-light seo-discovery"><div className="container"><ServiceHeading label="01 / DOS CAMINOS PARA ENCONTRARTE" title="La pregunta cambia." accent="Tu negocio sigue siendo la respuesta." description="Una búsqueda en el mapa. Una pregunta a un asistente. Trabajamos la información que permite descubrirte por ambos caminos." /><Reveal><SearchPreview /></Reveal><div className="seo-duality"><Reveal><span className="mono-label">SEO LOCAL / EL MAPA</span><h3>Cerca de donde<br /><em>te necesitan.</em></h3><p>Tener ficha es el comienzo. La optimización, las reseñas y la coherencia de tus datos ayudan a que esa presencia sea útil y relevante.</p></Reveal><Reveal><span className="mono-label">GEO / LA CONVERSACIÓN</span><h3>En las fuentes<br /><em>que dan respuestas.</em></h3><p>Estructuramos la información de tu negocio y reforzamos sus fuentes para facilitar que los buscadores de IA la entiendan y puedan citarla.</p></Reveal></div></div></section>

    <ServiceScope title="Tu presencia local." accent="Sin cabos sueltos." items={[
      { title: "Ficha de Google", text: "Optimizamos categorías, servicios y fotos. Mantenemos la información al día para que una persona encuentre lo que necesita antes de contactar." },
      { title: "Publicaciones y reseñas", text: "Publicamos novedades y ofertas con regularidad. Preparamos un sistema para solicitar reseñas y trabajamos la respuesta a las que llegan." },
      { title: "Directorios y datos coherentes", text: "Revisamos los directorios relevantes de tu sector. Corregimos inconsistencias para que nombre, dirección y teléfono coincidan en tus puntos de presencia." },
      { title: "Información preparada para la IA", text: "Organizamos la información del negocio y reforzamos fuentes relevantes. Observamos qué dicen los buscadores de tu marca y de tu competencia para detectar oportunidades." },
    ]} />

    <section className="seo-statement"><div className="container"><Reveal><span className="mono-label">VISIBILIDAD CON DIRECCIÓN</span><h2>NO SE TRATA<br />DE ESTAR <span>EN TODO.</span><br /><em>Se trata de estar</em><br />DONDE IMPORTA.</h2></Reveal><div className="seo-statement__foot"><span aria-hidden="true">↗</span><p>Priorizamos las búsquedas y las fuentes relevantes para tu negocio. La presencia se trabaja de forma continua; las posiciones y las menciones de IA dependen también de cada plataforma.</p></div></div></section>
    <ServiceMetric label="VISIBILIDAD QUE SE PUEDE SEGUIR" title="Del «cerca de mí»" accent="al «quiero contactar»." description="Seguimos las visualizaciones, las llamadas desde tu ficha y la posición en el mapa para las búsquedas que te interesan. El rediseño web, el blog y las campañas de pago se trabajan aparte." metrics={[{ value: "Presencia", label: "En búsquedas relevantes" }, { value: "Llamadas ↗", label: "Desde tu ficha" }]} />
    <ServiceClose current="seo-local-geo" title="PONGAMOS TU NEGOCIO EN EL MAPA." description="Miramos cómo apareces hoy y qué podemos mejorar en tu zona. Tu primer diagnóstico es gratuito y sin compromiso." />
  </ServiceExperience>;
}

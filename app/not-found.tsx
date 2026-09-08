import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container hero__inner" style={{ minHeight: "40vh" }}>
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="t-hero">Esta página se fue a otra galaxia.</h1>
        <p className="lead">El enlace no existe o ha cambiado. Volvamos a lo importante.</p>
        <div className="hero__actions">
          <Button href="/" size="lg">Ir al inicio</Button>
          <Button href="/contacto" variant="ghost" size="lg">Contacto</Button>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/primitives";
import { site } from "@/lib/site";

export function CtaBand({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="section cta-band">
      <div className="container">
        <Reveal><Eyebrow>El siguiente paso</Eyebrow></Reveal>
        <Reveal as="h2" className="t-h1">{title}</Reveal>
        <Reveal as="p" className="lead">{text}</Reveal>
        <Reveal className="hero__actions">
          <Button href={site.cta.primary.href} size="lg">{site.cta.primary.label}</Button>
          <Button href={`mailto:${site.email}`} variant="ghost" size="lg">Prefiero escribir un email ↗</Button>
        </Reveal>
      </div>
    </section>
  );
}

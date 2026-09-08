import Link from "next/link";
import { services, site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid"><div><Link className="brand-wordmark" href="/" aria-label="Like A Rocket — inicio"><span>like a<br />rocket<span className="brand-period">.</span></span><span className="brand-arrow" aria-hidden="true">↗</span></Link><p className="muted footer-intro">Estrategia con dirección.<br />Creatividad con intención.</p></div>
      <div className="footer-col"><h4>Explora</h4>{services.map((s) => <Link key={s.slug} href={`/${s.slug}`}>{s.name}</Link>)}</div>
      <div className="footer-col"><h4>Conecta</h4><Link href="/sobre-nosotros">Sobre nosotros</Link><Link href="/resultados">Resultados</Link><Link href="/blog">Blog</Link><Link href="/contacto">Hablemos ↗</Link></div>
      <div className="footer-col"><h4>Estamos al otro lado</h4><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.phoneHref}>{site.phone}</a><p>{site.hours}</p></div></div>
    <div className="footer-signature" aria-hidden="true">like a rocket<span>↗</span></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.legalName}</span><span><Link href="/aviso-legal">Aviso legal</Link> · <Link href="/privacidad">Privacidad</Link> · <Link href="/cookies">Cookies</Link></span><a href="#main-content">Volver arriba ↑</a></div>
  </div></footer>;
}

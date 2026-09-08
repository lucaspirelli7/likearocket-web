import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog · Notas sin humo",
  description:
    "Ideas prácticas sobre diseño web, publicidad en Google y Meta, SEO local y GEO para pymes que quieren más clientes. Sin jerga.",
};

const dateFmt = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <div className="dark-page">
      {/* HERO */}
      <section className="page-hero" aria-labelledby="blog-title">
        <div className="container">
          <div className="page-hero__meta">
            <Link href="/#servicios">← Volver al inicio</Link>
            <span>BLOG</span>
            <span className="page-hero__edition">LIKE A ROCKET — NOTAS DE TRABAJO</span>
          </div>

          <div className="page-hero__stage">
            <h1 id="blog-title" className="page-hero__title">
              <span>NOTAS</span>
              <span>SIN</span>
              <span className="page-hero__punch">HUMO.</span>
            </h1>

            <Reveal className="page-hero__card">
              <div className="result-data__label">
                <span>DE QUÉ ESCRIBIMOS</span>
                <span aria-hidden="true">✳</span>
              </div>
              <ul className="page-ficha">
                <li>
                  <span>01</span>
                  <b>Diseño web</b>
                </li>
                <li>
                  <span>02</span>
                  <b>Paid media</b>
                </li>
                <li>
                  <span>03</span>
                  <b>SEO local &amp; GEO</b>
                </li>
                <li>
                  <span>04</span>
                  <b>Medición ↗</b>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="page-hero__bottom">
            <div className="page-hero__tags">
              <span>Práctico</span>
              <span>Para pymes</span>
              <span>Sin jerga</span>
            </div>
            <p>
              Ideas para que tu presencia digital traiga clientes, explicadas como se lo contaríamos
              a un amigo con un negocio. Nada de posts de relleno para salir en Google.
            </p>
            <Link href="#articulos" className="page-hero__link" aria-label="Ver los artículos">
              <span>
                Ver los
                <br />
                artículos
              </span>
              <b aria-hidden="true">↓</b>
            </Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-label="Diseño web, paid media, SEO local, GEO, medición">
        <div className="ticker__track" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span className="ticker__group" key={i}>
              DISEÑO WEB <b>✳</b> PAID MEDIA <b>✳</b> SEO LOCAL <b>✳</b> GEO <b>✳</b> MEDICIÓN <b>✳</b>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ARTÍCULOS */}
      <section className="blog-list" id="articulos">
        <div className="container">
          <Reveal className="section-heading">
            <span className="mono-label">01 / EN EL HORNO</span>
            <div>
              <h2>
                Cuatro en camino.
                <br />
                <span className="serif-accent">Ninguna de relleno.</span>
              </h2>
              <p>Publicamos cuando tenemos algo que de verdad ayude, no para llenar un calendario.</p>
            </div>
            <span className="heading-asterisk" aria-hidden="true">✳</span>
          </Reveal>

          <div className="post-list">
            {posts.map((post, i) => {
              const inner = (
                <>
                  <span className="post-row__number">0{i + 1}</span>
                  <div>
                    <span className="post-row__status">
                      {post.tag} · {post.date ? dateFmt.format(new Date(post.date)) : "Próximamente"}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <span className="post-row__arrow" aria-hidden="true">↗</span>
                </>
              );
              return (
                <Reveal key={post.slug} delay={i * 60}>
                  {post.published ? (
                    <Link href={`/blog/${post.slug}`} className="post-row">
                      {inner}
                    </Link>
                  ) : (
                    <div className="post-row" aria-disabled="true">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="home-contact">
        <div className="container">
          <Reveal>
            <span className="mono-label">MIENTRAS TANTO</span>
            <Link href="/contacto" className="contact-display">
              <span>
                ¿LO VEMOS<span className="serif-accent">?</span>
              </span>
              <span className="contact-display__arrow" aria-hidden="true">↗</span>
            </Link>
            <div className="home-contact__bottom">
              <p>
                Te hacemos un diagnóstico gratuito de tu web,
                <br />
                tus campañas y tu ficha de Google.
              </p>
              <span>Sin compromiso. Respuesta en 24 h.</span>
              <Link href="/contacto" className="btn btn--primary">
                Hablemos de tu proyecto <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

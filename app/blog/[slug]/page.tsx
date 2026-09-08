import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { getPost, posts } from "@/lib/blog";

const dateFmt = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" });

export function generateStaticParams() {
  return posts.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !post.published) notFound();

  return (
    <div className="dark-page">
      {/* HERO */}
      <article>
        <header className="article-hero">
          <div className="container">
            <div className="article-hero__meta">
              <Link href="/blog">← Volver al blog</Link>
              <span>{post.tag.toUpperCase()}</span>
            </div>
            <h1 className="article-hero__title">{post.title}</h1>
            <div className="article-hero__tags">
              <span>{post.tag}</span>
              {post.date && <span>{dateFmt.format(new Date(post.date))}</span>}
              <span>Lectura corta</span>
            </div>
          </div>
        </header>

        {/* CUERPO */}
        <section className="article-body">
          <div className="container">
            <Reveal className="article-body__inner">
              {post.body?.map((block, i) => {
                if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
                if (block.type === "ul")
                  return (
                    <ul key={i}>
                      {block.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  );
                return <p key={i}>{block.text}</p>;
              })}
              <p className="article-body__back">
                <Link href="/blog">
                  <span aria-hidden="true">←</span> Volver al blog
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      </article>

      {/* CIERRE */}
      <section className="home-contact">
        <div className="container">
          <Reveal>
            <span className="mono-label">¿TE APLICA A TI?</span>
            <Link href="/contacto" className="contact-display">
              <span>
                LO VEMOS<span className="serif-accent">.</span>
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

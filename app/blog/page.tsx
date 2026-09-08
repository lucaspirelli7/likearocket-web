import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/primitives";
import { CtaBand } from "@/components/CtaBand";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ideas prácticas sobre diseño web, publicidad en Google y Meta, SEO local y GEO para pymes que quieren más clientes.",
};

const dateFmt = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <Reveal><Eyebrow>Blog</Eyebrow></Reveal>
          <Reveal as="h1" className="t-hero">
            Notas sobre webs, <span className="text-grad">anuncios y buscadores</span>.
          </Reveal>
          <Reveal as="p" className="lead">
            Ideas prácticas para pymes que quieren que su presencia digital traiga clientes. Sin humo.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container measure">
          {posts.map((post) => (
            <Reveal as="article" className="post" key={post.slug}>
              <time>{post.date ? dateFmt.format(new Date(post.date)) : "Próximamente"}</time>
              <h3>
                {post.date ? (
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                ) : (
                  post.title
                )}
              </h3>
              <p>{post.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="¿Prefieres que lo revisemos contigo?"
        text="Te hacemos un diagnóstico gratuito de tu web, tus campañas y tu ficha."
      />
    </>
  );
}

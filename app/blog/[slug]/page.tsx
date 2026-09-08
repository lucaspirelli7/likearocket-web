import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/primitives";
import { CtaBand } from "@/components/CtaBand";
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
    <>
      <section className="hero">
        <div className="container hero__inner">
          <Reveal><Eyebrow>Blog</Eyebrow></Reveal>
          <Reveal as="h1" className="t-hero">{post.title}</Reveal>
          {post.date && (
            <Reveal as="p" className="muted">{dateFmt.format(new Date(post.date))}</Reveal>
          )}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="prose">
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
            <p style={{ marginTop: "2.5rem" }}>
              <Link href="/blog" className="link-arrow">
                <span aria-hidden>&larr;</span> Volver al blog
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="¿Prefieres que lo revisemos contigo?"
        text="Te hacemos un diagnóstico gratuito de tu web, tus campañas y tu ficha."
      />
    </>
  );
}

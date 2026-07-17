"use client";

import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BLOG_POSTS } from "@/lib/blogData";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
});

interface ClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: ClientProps) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  // Filter out the current post to show other recommendations
  const recommendedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className={`post-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .post-scope {
          --bg:#17181A;
          --bg-soft:#1E2022;
          --paper:#F3EEE3;
          --paper-dim:#E7E0D0;
          --ink:#EDEAE2;
          --ink-dim:#A7A9AC;
          --ink-dark:#17181A;
          --accent:#E62B2B;
          --accent-dim:#b01d1d;
          --stamp:#FFC145;
          --steel:#5C7A93;
          --line:#34373A;
          --line-paper:#D8CFB8;
          --radius:2px;

          background: var(--bg);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          position: relative;
          z-index: 10;
        }
        .post-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .post-scope img { max-width: 100%; display: block; object-fit: cover; }
        .post-scope a { color: inherit; text-decoration: none; }
        .post-scope ul { list-style: none; }
        .post-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .post-scope h1, .post-scope h2, .post-scope h3, .post-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.1;
          font-weight: 600;
        }
        .post-scope .wrap { max-width: 800px; margin: 0 auto; padding: 0 24px; }
        
        /* ===== BREADCRUMB ===== */
        .post-scope .breadcrumb {
          padding: 20px 0;
          border-bottom: 1px solid var(--line);
        }
        .post-scope .breadcrumb nav {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--ink-dim);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .post-scope .breadcrumb a {
          color: var(--ink-dim);
          transition: color .15s ease;
        }
        .post-scope .breadcrumb a:hover { color: var(--accent); }
        .post-scope .breadcrumb .sep { color: var(--line); }
        .post-scope .breadcrumb .current { color: var(--paper); }

        /* ===== POST HEADER ===== */
        .post-scope .post-header {
          padding: 60px 0 40px;
        }
        .post-scope .post-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
          text-transform: uppercase;
        }
        .post-scope .post-category-tag {
          color: var(--accent);
          border: 1px solid var(--accent);
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
        }
        .post-scope .post-header h1 {
          font-size: 42px;
          color: var(--paper);
          margin-bottom: 30px;
          line-height: 1.15;
        }
        
        /* Author info */
        .post-scope .author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 16px 0;
        }
        .post-scope .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--line);
        }
        .post-scope .author-info h4 {
          font-size: 14px;
          color: var(--paper);
          text-transform: none;
          letter-spacing: 0;
        }
        .post-scope .author-info span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
        }

        /* ===== BANNER IMAGE ===== */
        .post-scope .post-banner {
          width: 100%;
          height: 420px;
          border-radius: 4px;
          border: 1px solid var(--line);
          overflow: hidden;
          margin-bottom: 50px;
        }
        .post-scope .post-banner img {
          width: 100%;
          height: 100%;
        }

        /* ===== CONTENT BODY ===== */
        .post-scope .post-body {
          font-size: 16px;
          color: var(--paper-dim);
          line-height: 1.75;
          margin-bottom: 80px;
        }
        .post-scope .post-body p {
          margin-bottom: 24px;
        }
        .post-scope .post-body h3 {
          font-size: 26px;
          color: var(--paper);
          margin: 44px 0 18px;
          border-bottom: 1px solid var(--line);
          padding-bottom: 8px;
        }
        .post-scope .post-body ul {
          margin-bottom: 28px;
          padding-left: 20px;
          list-style: square;
        }
        .post-scope .post-body li {
          margin-bottom: 12px;
          color: var(--paper-dim);
        }

        /* ===== RECOMMENDED SECTION ===== */
        .post-scope .recommended-section {
          padding: 60px 0 80px;
          border-top: 1px solid var(--line);
          background: var(--bg-soft);
        }
        .post-scope .recommended-section h3.section-title {
          font-size: 24px;
          color: var(--paper);
          margin-bottom: 30px;
          text-align: center;
        }
        .post-scope .recommended-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .post-scope .post-card {
          background: var(--bg);
          border: 1px solid var(--line);
          padding: 24px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s, transform 0.15s;
        }
        .post-scope .post-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .post-scope .post-card h4 {
          font-size: 20px;
          color: var(--paper);
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .post-scope .post-card p {
          font-size: 13.5px;
          color: var(--ink-dim);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .post-scope .read-link {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ===== FINAL CTA ===== */
        .post-scope .final-cta {
          text-align: center;
          padding: 90px 0;
          background: linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
          border-top: 1px solid var(--line);
        }
        .post-scope .final-cta h2 { font-size: 38px; color: var(--paper); max-width: 700px; margin: 0 auto 16px;}
        .post-scope .final-cta p { color: var(--ink-dim); margin-bottom: 32px; max-width: 560px; margin-left: auto; margin-right: auto;}
        .post-scope .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius);
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .post-scope .btn-primary { background: var(--accent); color: #17181A; }
        .post-scope .btn-primary:hover { background: #eb4d4d; transform: translateY(-2px); }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 750px) {
          .post-scope .post-header h1 { font-size: 30px; }
          .post-scope .post-banner { height: 280px; margin-bottom: 30px; }
          .post-scope .recommended-grid { grid-template-columns: 1fr; }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb">
        <div className="wrap">
          <nav>
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span className="current">{post.title.substring(0, 24)}...</span>
          </nav>
        </div>
      </div>

      {/* ===== ARTICLE BODY CONTAINER ===== */}
      <article className="wrap" style={{ maxWidth: '720px' }}>
        
        {/* Header */}
        <header className="post-header">
          <div className="post-meta-row">
            <span className="post-category-tag">{post.category}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          
          <div className="author-row">
            <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
            <div className="author-info">
              <h4>{post.author.name}</h4>
              <span>{post.author.role}</span>
            </div>
          </div>
        </header>

        {/* Banner */}
        <div className="post-banner">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Dynamic content */}
        <section className="post-body">
          {post.content.map((sec, idx) => {
            if (sec.type === "paragraph") {
              return <p key={idx}>{sec.text}</p>;
            } else if (sec.type === "heading") {
              return <h3 key={idx}>{sec.text}</h3>;
            } else if (sec.type === "list" && sec.items) {
              return (
                <ul key={idx}>
                  {sec.items.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </section>

      </article>

      {/* ===== RECOMMENDED ARTICLES ===== */}
      <section className="recommended-section">
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <h3 className="section-title">Keep Reading</h3>
          <div className="recommended-grid">
            {recommendedPosts.map((rec) => (
              <div className="post-card" key={rec.slug}>
                <span className="mono" style={{ fontSize: '10px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{rec.category} · {rec.date}</span>
                <h4><Link href={`/blog/${rec.slug}`}>{rec.title}</Link></h4>
                <p>{rec.excerpt.substring(0, 110)}...</p>
                <Link href={`/blog/${rec.slug}`} className="read-link">
                  Read Article <span className="mono">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Ready to schedule maintenance?</h2>
          <p>Get a highly experienced mechanic at your home or office. Flat rates, full transparency, and a 15-day labor warranty on all models.</p>
          <Link href="/book" className="btn btn-primary">Book Doorstep Service Now →</Link>
        </div>
      </section>

    </div>
  );
}

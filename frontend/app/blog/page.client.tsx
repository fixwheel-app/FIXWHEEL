"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BLOG_POSTS } from "@/lib/blogData";
import { cn } from "@/lib/utils";
import Breadcrumb from "@/components/Breadcrumb";

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

export default function BlogHubClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Maintenance", "Tips & Tricks", "EV Corner", "Buying Guide"];

  // Filter posts based on active category and search query
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0]; // First post as featured post

  return (
    <div className={`blog-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-scope {
          --bg:#17181A;
          --bg-soft:#1E2022;
          --paper:#F3EEE3;
          --paper-dim:#E7E0D0;
          --ink:#EDEAE2;
          --ink-dim:#6B6E72;
          --ink-dark:#17181A;
          --accent:#ff3b30;
          --accent-dim:#d32f2f;
          --stamp:#FFC145;
          --steel:#5C7A93;
          --line:rgba(255,255,255,0.12);
          --line-paper:#D8CFB8;
          --radius:2px;

          background: var(--paper);
          color: var(--ink-dark);
          font-family: 'Inter', sans-serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          position: relative;
          z-index: 10;
        }
        .blog-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .blog-scope img { max-width: 100%; display: block; object-fit: cover; }
        .blog-scope a { color: inherit; text-decoration: none; }
        .blog-scope ul { list-style: none; }
        .blog-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .blog-scope h1, .blog-scope h2, .blog-scope h3, .blog-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .blog-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .blog-scope .eyebrow {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .blog-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .blog-scope .btn {
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
        .blog-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .blog-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }
        .blog-scope .btn-dark { background: var(--ink-dark); border: 1px solid var(--line); color: var(--paper); }
        .blog-scope .btn-dark:hover { background: #000; transform: translateY(-2px); }

        /* ===== BREADCRUMB ===== */

        /* ===== HERO ===== */
        .blog-scope .hero {
          position: relative;
          padding: 72px 0 48px;
          background: var(--bg);
          color: var(--paper);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .blog-scope .hero::before {
          content: ""; position: absolute; inset: 0;
          background: repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px), radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }
        .blog-scope .hero h1 { font-size: 60px; margin: 0 0 16px; color: var(--paper); }
        .blog-scope .hero p.lead { font-size: 16px; color: #A7A9AC; max-width: 580px; }

        /* ===== FEATURED CARD ===== */
        .blog-scope .featured-section {
          padding: 48px 0;
          border-bottom: 1px solid var(--line-paper);
          background: var(--paper);
        }
        .blog-scope .featured-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 0;
          transition: border-color 0.2s, transform 0.2s;
        }
        .blog-scope .featured-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .blog-scope .featured-image-wrapper {
          height: 100%;
          min-height: 380px;
          overflow: hidden;
          border-right: 1px solid var(--line-paper);
        }
        .blog-scope .featured-image-wrapper img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s;
        }
        .blog-scope .featured-card:hover .featured-image-wrapper img {
          transform: scale(1.02);
        }
        .blog-scope .featured-info {
          padding: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .blog-scope .post-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #5A5D62;
          text-transform: uppercase;
        }
        .blog-scope .post-category-tag {
          color: var(--accent);
          border: 1px solid var(--accent);
          padding: 2px 10px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
        }
        .blog-scope .featured-info h2 {
          font-family: 'Inter', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--ink-dark);
          margin-bottom: 16px;
          line-height: 1.25;
          text-transform: none;
          letter-spacing: -0.02em;
        }
        .blog-scope .featured-info p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #5C6066;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .blog-scope .read-btn {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.04em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          transition: color 0.15s;
        }
        .blog-scope .read-btn:hover {
          color: #ff5252;
        }

        /* ===== CONTROLS STRIP ===== */
        .blog-scope .controls-strip {
          padding: 24px 0;
          border-bottom: 1px solid var(--line-paper);
          background: var(--paper-dim);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .blog-scope .category-tabs {
          display: flex;
          gap: 6px;
        }
        .blog-scope .category-tab-btn {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: #5A5D62;
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          padding: 8px 16px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .blog-scope .category-tab-btn:hover {
          border-color: var(--accent);
          color: var(--ink-dark);
        }
        .blog-scope .category-tab-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #FFFFFF;
        }
        .blog-scope .search-box {
          position: relative;
          min-width: 260px;
        }
        .blog-scope .search-box input {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 30px;
          padding: 9px 16px 9px 38px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 11.5px;
          color: var(--ink-dark);
          outline: none;
          transition: border-color 0.15s;
        }
        .blog-scope .search-box input:focus {
          border-color: var(--accent);
        }
        .blog-scope .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #6B6E72;
          font-size: 13px;
        }

        /* ===== BLOG GRID ===== */
        .blog-scope .blog-grid-section {
          padding: 60px 0 90px;
          background: var(--paper);
        }
        .blog-scope .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 32px;
        }
        .blog-scope .blog-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
        }
        .blog-scope .blog-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }
        .blog-scope .blog-card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-bottom: 1px solid var(--line-paper);
          position: relative;
        }
        .blog-scope .blog-card-image img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s;
        }
        .blog-scope .blog-card:hover .blog-card-image img {
          transform: scale(1.04);
        }
        .blog-scope .blog-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-scope .blog-card-content .post-meta-row {
          margin-bottom: 14px;
        }
        .blog-scope .blog-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: var(--ink-dark);
          margin-bottom: 12px;
          line-height: 1.35;
          text-transform: none;
          letter-spacing: -0.01em;
        }
        .blog-scope .blog-card-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #5C6066;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }
        .blog-scope .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px dashed var(--line-paper);
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #6B6E72;
        }
        .blog-scope .blog-card-footer a.author-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-family: var(--font-jetbrains), monospace;
          color: var(--ink-dark);
        }
        .blog-scope .blog-card-footer a.author-link img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid var(--accent);
        }
        .blog-scope .no-posts {
          text-align: center;
          padding: 80px 24px;
          border: 1px dashed var(--line);
          border-radius: 4px;
          background: var(--bg-soft);
        }
        .blog-scope .no-posts h3 {
          font-size: 20px;
          color: var(--paper);
          margin-bottom: 8px;
        }
        .blog-scope .no-posts p {
          color: var(--ink-dim);
          font-size: 13.5px;
        }

        /* ===== FINAL CTA ===== */
        .blog-scope .final-cta {
          text-align: center;
          padding: 90px 0;
          background: linear-gradient(180deg, transparent, rgba(230,43,43,0.05));
          border-top: 1px solid var(--line);
        }
        .blog-scope .final-cta h2 { font-size: 38px; color: var(--paper); max-width: 700px; margin: 0 auto 16px;}
        .blog-scope .final-cta p { color: var(--ink-dim); margin-bottom: 32px; max-width: 560px; margin-left: auto; margin-right: auto;}

        /* ===== RESPONSIVE ===== */
        @media (max-width: 990px) {
          .blog-scope .featured-card { grid-template-columns: 1fr; }
          .blog-scope .featured-image-wrapper { border-right: none; border-bottom: 1px solid var(--line); min-height: 280px; }
          .blog-scope .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 650px) {
          .blog-scope .hero h1 { font-size: 40px; }
          .blog-scope .blog-grid { grid-template-columns: 1fr; }
          .blog-scope .controls-strip { flex-direction: column; align-items: flex-start; }
          .blog-scope .search-container { width: 100%; }
          .blog-scope .featured-info { padding: 28px; }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb" style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0" }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Fixwheel Gazette · Mechanics & Riders</div>
          <h1>FixWheel Blog</h1>
          <p className="lead">Expert tips, maintenance walkthroughs, EV battery hacks, and two-wheeler news curated by the automotive mechanics at FixWheel.</p>
        </div>
      </section>

      {/* ===== FEATURED ARTICLE ===== */}
      <section className="featured-section">
        <div className="wrap">
          <div className="featured-card">
            <div className="featured-image-wrapper">
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
            <div className="featured-info">
              <div className="post-meta-row">
                <span className="post-category-tag">{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2><Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link></h2>
              <p>{featuredPost.excerpt}</p>
              <Link href={`/blog/${featuredPost.slug}`} className="read-btn">
                Read Featured Article <span className="mono">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTROLS STRIP ===== */}
      <div className="controls-strip">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cn("category-tab-btn", activeCategory === cat && "active")}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-container">
            <span className="search-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search articles & keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ===== BLOG GRID ===== */}
      <section className="blog-grid-section">
        <div className="wrap">
          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <h3>No articles found</h3>
              <p>Try refining your search keyword or switching categories.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <div className="blog-card" key={post.slug}>
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-card-content">
                    <div className="post-meta-row">
                      <span className="post-category-tag">{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="blog-card-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    
                    <div className="blog-card-footer">
                      <Link href={`/author/${post.author.slug || 'zakir-hussain'}`} className="author-link">
                        <img src={post.author.avatar} alt={post.author.name} />
                        <span>{post.author.name}</span>
                      </Link>
                      <Link href={`/blog/${post.slug}`} className="read-btn">
                        Read <span className="mono">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Tired of doing it yourself?</h2>
          <p>Skip the grease. Book a verified doorstep mechanic from FixWheel for flat rates, transparent inspection, and a 15-day warranty.</p>
          <Link href="/book" className="btn btn-primary">Book Doorstep Service Now →</Link>
        </div>
      </section>
    </div>
  );
}

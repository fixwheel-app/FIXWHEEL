"use client";

import { useState } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { AUTHORS_DB } from "@/lib/authorData";
import { BLOG_POSTS } from "@/lib/blogData";
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

interface AuthorClientProps {
  slug: string;
}

export default function AuthorClientPage({ slug }: AuthorClientProps) {
  const author = AUTHORS_DB[slug] || AUTHORS_DB["zakir-hussain"];

  // Get all posts authored by this author (or all if zakir-hussain)
  const authorPosts = BLOG_POSTS.filter((post) => {
    if (post.author.slug) {
      return post.author.slug === author.slug;
    }
    return post.author.name.toLowerCase() === author.name.toLowerCase() || author.slug === "zakir-hussain";
  });

  return (
    <div className={`author-scope ${oswald.variable} ${jetbrains.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .author-scope {
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
        .author-scope * { box-sizing: border-box; margin: 0; padding: 0; }
        .author-scope img { max-width: 100%; display: block; object-fit: cover; }
        .author-scope a { color: inherit; text-decoration: none; }
        .author-scope ul { list-style: none; }
        .author-scope .mono { font-family: var(--font-jetbrains), monospace; }
        .author-scope h1, .author-scope h2, .author-scope h3, .author-scope h4 {
          font-family: var(--font-oswald), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.08;
          font-weight: 600;
        }
        .author-scope .wrap { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .author-scope .eyebrow {
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
        .author-scope .eyebrow::before {
          content: "";
          width: 24px; height: 1px; background: var(--accent);
        }
        .author-scope .btn {
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
        .author-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .author-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }

        /* ===== BREADCRUMB ===== */

        /* ===== HERO HEADER ===== */
        .author-scope .author-hero {
          position: relative;
          padding: 64px 0 56px;
          background: var(--bg);
          color: var(--paper);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .author-scope .author-hero::before {
          content: "";
          position: absolute; inset: 0;
          background: repeating-linear-gradient(135deg, rgba(230,43,43,0.05) 0 2px, transparent 2px 14px), radial-gradient(600px 300px at 85% 0%, rgba(230,43,43,0.10), transparent 70%);
          pointer-events: none;
        }

        .author-scope .author-card-hero {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 36px;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        .author-scope .author-avatar-lg {
          width: 190px;
          height: 190px;
          border-radius: 6px;
          border: 3px solid var(--accent);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6);
        }
        .author-scope .author-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--stamp);
          color: #3a2c00;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 14px;
        }
        .author-scope .author-card-hero h1 {
          font-size: 42px;
          color: var(--paper);
          margin-bottom: 6px;
        }
        .author-scope .author-subtitle {
          font-family: var(--font-jetbrains), monospace;
          font-size: 14px;
          color: #A7A9AC;
          margin-bottom: 20px;
        }

        /* Stats Strip */
        .author-scope .author-stats {
          display: flex;
          gap: 24px;
          padding: 18px 22px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--line);
          border-radius: 4px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .author-scope .stat-box {
          display: flex;
          flex-direction: column;
        }
        .author-scope .stat-box b {
          font-family: var(--font-jetbrains), monospace;
          font-size: 20px;
          color: var(--paper);
        }
        .author-scope .stat-box span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #A7A9AC;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .author-scope .author-bio-text {
          font-size: 15.5px;
          color: #C2C5CB;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .author-scope .tag-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .author-scope .spec-tag {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11.5px;
          background: rgba(230,43,43,0.12);
          border: 1px solid rgba(230,43,43,0.3);
          color: #FF8F8F;
          padding: 5px 12px;
          border-radius: 20px;
        }

        /* ===== MAIN CONTENT SECTION ===== */
        .author-scope .articles-section {
          padding: 76px 0;
          background: var(--paper);
        }
        .author-scope .section-head {
          margin-bottom: 40px;
        }
        .author-scope .section-head h2 {
          font-size: 32px;
          color: var(--ink-dark);
          margin-bottom: 8px;
        }
        .author-scope .section-head p {
          color: #5A5D62;
          font-size: 15px;
        }

        .author-scope .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .author-scope .blog-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
        }
        .author-scope .blog-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }
        .author-scope .blog-card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-bottom: 1px solid var(--line-paper);
        }
        .author-scope .blog-card-image img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s;
        }
        .author-scope .blog-card:hover .blog-card-image img {
          transform: scale(1.04);
        }
        .author-scope .blog-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .author-scope .blog-card-meta {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #6B6E72;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .author-scope .blog-card-cat {
          color: var(--accent);
          border: 1px solid var(--accent);
          padding: 1px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 700;
        }
        .author-scope .blog-card-title {
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 12px;
          line-height: 1.25;
        }
        .author-scope .blog-card-excerpt {
          font-size: 13.5px;
          color: #5A5D62;
          line-height: 1.55;
          margin-bottom: 20px;
          flex: 1;
        }
        .author-scope .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 14px;
          border-top: 1px dashed var(--line-paper);
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--accent);
          font-weight: 700;
        }

        /* ===== FINAL CTA ===== */
        .author-scope .final-cta {
          text-align: center;
          padding: 90px 0;
          background: var(--bg);
          color: var(--paper);
          border-top: 1px solid var(--line);
        }
        .author-scope .final-cta h2 { font-size: 38px; color: var(--paper); max-width: 700px; margin: 0 auto 16px; }
        .author-scope .final-cta p { color: #A7A9AC; margin-bottom: 32px; max-width: 560px; margin-left: auto; margin-right: auto; }

        @media (max-width: 900px) {
          .author-scope .author-card-hero { grid-template-columns: 1fr; justify-items: center; text-align: center; }
          .author-scope .author-stats { justify-content: center; }
          .author-scope .tag-group { justify-content: center; }
          .author-scope .blog-grid { grid-template-columns: 1fr; }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb" style={{ background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 0" }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: author.name }]} />
        </div>
      </div>

      {/* ===== AUTHOR PROFILE HERO ===== */}
      <section className="author-hero">
        <div className="wrap">
          <div className="author-card-hero">
            <img src={author.avatar} alt={author.name} className="author-avatar-lg" />
            <div>
              <span className="author-badge">Verified Lead Mechanic ★</span>
              <h1>{author.name}</h1>
              <div className="author-subtitle">{author.role} — {author.location}</div>

              {/* Stats Bar */}
              <div className="author-stats">
                <div className="stat-box">
                  <b>{author.experience}</b>
                  <span>Field Experience</span>
                </div>
                <div className="stat-box">
                  <b>{authorPosts.length} Guides</b>
                  <span>Articles Written</span>
                </div>
              </div>

              <p className="author-bio-text">{author.bio}</p>

              {/* Specialization Tags */}
              <div className="tag-group">
                {author.specializations.map((spec, i) => (
                  <span key={i} className="spec-tag">✓ {spec}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLES AUTHORED ===== */}
      <section className="articles-section">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Expert Guides & Insights</div>
            <h2>Technical Articles by {author.name}</h2>
            <p>Practical, battle-tested two-wheeler maintenance and repair guides written directly from field experience in Delhi-NCR.</p>
          </div>

          <div className="blog-grid">
            {authorPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-cat">{post.category}</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span>Read Technical Guide →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Get Your Two-Wheeler Serviced by {author.name}&apos;s Team</h2>
          <p>Book a doorstep service in 60 seconds. Our verified mechanics bring genuine OEM parts and complete labor warranty to your home or office.</p>
          <Link href="/book" className="btn btn-primary">Book Doorstep Repair Now →</Link>
        </div>
      </section>
    </div>
  );
}

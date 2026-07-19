"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BLOG_POSTS } from "@/lib/blogData";
import { supabase } from "@/lib/supabase";

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

interface CommentItem {
  id: string;
  blog_slug: string;
  name: string;
  email: string;
  comment: string;
  created_at: string;
}

function getInitials(name: string): string {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

function formatDate(dateString: string): string {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  } catch {
    return "Recently";
  }
}

export default function BlogPostClient({ slug }: ClientProps) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loadingComments, setLoadingComments] = useState<boolean>(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  // Fetch comments from Supabase on mount
  useEffect(() => {
    async function fetchComments() {
      try {
        setLoadingComments(true);
        const { data, error } = await supabase
          .from("comments")
          .select("*")
          .eq("blog_slug", slug)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching comments from Supabase:", error);
        } else if (data) {
          setComments(data as CommentItem[]);
        }
      } catch (err) {
        console.error("Failed to load comments:", err);
      } finally {
        setLoadingComments(false);
      }
    }

    if (slug) {
      fetchComments();
    }
  }, [slug]);

  // Handle comment submit
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!name.trim() || !email.trim() || !commentText.trim()) {
      setFeedback({ type: "error", msg: "Please fill in all fields (Name, Email, and Comment)." });
      return;
    }

    try {
      setSubmitting(true);
      const newCommentData = {
        blog_slug: slug,
        name: name.trim(),
        email: email.trim(),
        comment: commentText.trim(),
      };

      const { data, error } = await supabase
        .from("comments")
        .insert([newCommentData])
        .select();

      if (error) {
        console.error("Supabase insert error:", error);
        setFeedback({ type: "error", msg: "Failed to post comment. Please try again." });
      } else {
        const createdComment = data && data[0] ? data[0] : {
          id: Date.now().toString(),
          ...newCommentData,
          created_at: new Date().toISOString()
        };

        setComments((prev) => [createdComment as CommentItem, ...prev]);
        setName("");
        setEmail("");
        setCommentText("");
        setFeedback({ type: "success", msg: "Your comment has been posted successfully!" });
      }
    } catch (err) {
      console.error("Comment submit error:", err);
      setFeedback({ type: "error", msg: "An unexpected error occurred." });
    } finally {
      setSubmitting(false);
    }
  };

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
          margin-bottom: 40px;
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

        /* ===== COMMENTS SECTION ===== */
        .post-scope .comments-section {
          padding: 50px 0;
          border-top: 1px solid var(--line);
          margin-top: 20px;
        }
        .post-scope .comments-section h3.comments-title {
          font-size: 26px;
          color: var(--paper);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .post-scope .comment-badge {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          background: var(--accent);
          color: #17181A;
          padding: 2px 10px;
          border-radius: 12px;
          font-weight: 700;
        }
        .post-scope .comment-form {
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 28px;
          margin-bottom: 40px;
        }
        .post-scope .comment-form h4 {
          font-size: 18px;
          color: var(--paper);
          margin-bottom: 20px;
        }
        .post-scope .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .post-scope .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .post-scope .input-group label {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .post-scope .input-group input,
        .post-scope .input-group textarea {
          background: var(--bg);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 12px 14px;
          color: var(--paper);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          transition: border-color 0.15s;
        }
        .post-scope .input-group input:focus,
        .post-scope .input-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .post-scope .submit-btn {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: var(--accent);
          color: #17181A;
          border: none;
          padding: 14px 26px;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .post-scope .submit-btn:hover {
          background: #eb4d4d;
          transform: translateY(-2px);
        }
        .post-scope .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .post-scope .feedback-msg {
          padding: 12px 16px;
          border-radius: 4px;
          font-size: 13px;
          font-family: var(--font-jetbrains), monospace;
          margin-bottom: 16px;
        }
        .post-scope .feedback-msg.success {
          background: rgba(46, 204, 113, 0.15);
          border: 1px solid rgba(46, 204, 113, 0.4);
          color: #2ecc71;
        }
        .post-scope .feedback-msg.error {
          background: rgba(230, 43, 43, 0.15);
          border: 1px solid rgba(230, 43, 43, 0.4);
          color: #e62b2b;
        }

        .post-scope .comments-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .post-scope .comment-card {
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 20px;
        }
        .post-scope .comment-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .post-scope .comment-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .post-scope .comment-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--accent);
          color: #17181A;
          font-family: var(--font-oswald), sans-serif;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
        }
        .post-scope .comment-name {
          font-family: var(--font-oswald), sans-serif;
          font-size: 16px;
          color: var(--paper);
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .post-scope .comment-date {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: var(--ink-dim);
        }
        .post-scope .comment-text {
          font-size: 14.5px;
          color: var(--paper-dim);
          line-height: 1.6;
        }
        .post-scope .no-comments {
          padding: 36px 20px;
          text-align: center;
          background: var(--bg-soft);
          border: 1px dashed var(--line);
          border-radius: 4px;
          color: var(--ink-dim);
          font-size: 14px;
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
          .post-scope .form-row { grid-template-columns: 1fr; gap: 0; }
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

        {/* ===== COMMENTS SECTION ===== */}
        <section className="comments-section">
          <h3 className="comments-title">
            Comments
            <span className="comment-badge">{comments.length}</span>
          </h3>

          {/* Comment Form */}
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <h4>Leave a Reply</h4>
            <p style={{ color: 'var(--ink-dim)', fontSize: '13px', marginBottom: '20px' }}>
              Your email address will not be published. Required fields are marked *
            </p>

            {feedback && (
              <div className={`feedback-msg ${feedback.type}`}>
                {feedback.msg}
              </div>
            )}

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="comment">Comment *</label>
              <textarea
                id="comment"
                rows={4}
                placeholder="Share your thoughts or questions about this article..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Posting..." : "Post Comment →"}
            </button>
          </form>

          {/* Comments List */}
          <div className="comments-list">
            {loadingComments ? (
              <div className="no-comments">Loading discussion...</div>
            ) : comments.length === 0 ? (
              <div className="no-comments">
                No comments yet. Be the first to share your thoughts on this guide!
              </div>
            ) : (
              comments.map((item) => (
                <div className="comment-card" key={item.id}>
                  <div className="comment-header">
                    <div className="comment-author">
                      <div className="comment-avatar">{getInitials(item.name)}</div>
                      <div>
                        <div className="comment-name">{item.name}</div>
                        <div className="comment-date">{formatDate(item.created_at)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-text">{item.comment}</div>
                </div>
              ))
            )}
          </div>
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

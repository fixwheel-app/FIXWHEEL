"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Oswald, JetBrains_Mono } from "next/font/google";
import { BLOG_POSTS } from "@/lib/blogData";
import { supabase } from "@/lib/supabase";
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
        .post-scope .wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
        
        /* ===== BREADCRUMB ===== */
        .post-scope .breadcrumb {
          padding: 20px 0;
          background: #111214;
          border-bottom: 1px solid var(--line);
        }
        .post-scope .breadcrumb nav {
          font-family: var(--font-jetbrains), monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: #A7A9AC;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .post-scope .breadcrumb a {
          color: #A7A9AC;
          transition: color .15s ease;
        }
        .post-scope .breadcrumb a:hover { color: var(--accent); }
        .post-scope .breadcrumb .sep { color: #5C6066; }
        .post-scope .breadcrumb .current { color: var(--accent); font-weight: 700; }

        /* ===== POST HEADER ===== */
        .post-scope .post-header {
          padding: 20px 0 30px;
          background: transparent;
          color: var(--ink-dark);
          position: relative;
        }
        .post-scope .post-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #6B6E72;
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
          font-size: 38px;
          color: var(--ink-dark);
          margin-bottom: 24px;
          line-height: 1.18;
        }
        
        /* Author info */
        .post-scope .author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid var(--line-paper);
          border-bottom: 1px solid var(--line-paper);
          padding: 14px 0;
        }
        .post-scope .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid var(--accent);
        }
        .post-scope .author-info h4 {
          font-size: 14px;
          color: var(--ink-dark);
          text-transform: none;
          letter-spacing: 0;
        }
        .post-scope .author-info span {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11px;
          color: #6B6E72;
        }

        /* ===== LAYOUT GRID & TOC ===== */
        .post-scope .post-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 300px;
          gap: 52px;
          align-items: start;
          padding: 40px 0 80px;
        }
        .post-scope .post-main-col {
          min-width: 0;
        }
        .post-scope .post-sidebar {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .post-scope .toc-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 24px;
        }
        .post-scope .toc-card h4 {
          font-size: 16px;
          color: var(--ink-dark);
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--line-paper);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .post-scope .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .post-scope .toc-link {
          font-size: 13.5px;
          color: #5A5D62;
          line-height: 1.4;
          display: block;
          padding: 4px 0 4px 12px;
          border-left: 2px solid transparent;
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .post-scope .toc-link:hover {
          color: var(--accent);
          border-left-color: var(--accent);
          padding-left: 16px;
        }

        .post-scope .recent-blogs-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 22px 20px;
        }
        .post-scope .recent-blogs-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--line-paper);
        }
        .post-scope .recent-blogs-header h4 {
          font-size: 15px;
          color: var(--ink-dark);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .post-scope .latest-blog-badge-box {
          background: rgba(230, 43, 43, 0.05);
          border: 1px solid rgba(230, 43, 43, 0.2);
          border-radius: 6px;
          padding: 14px;
          margin-bottom: 16px;
        }
        .post-scope .latest-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-jetbrains), monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          background: var(--accent);
          padding: 3px 8px;
          border-radius: 12px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .post-scope .latest-blog-title {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--ink-dark);
          line-height: 1.4;
          display: block;
          margin-bottom: 6px;
          transition: color 0.15s ease;
        }
        .post-scope .latest-blog-title:hover {
          color: var(--accent);
        }
        .post-scope .latest-blog-meta {
          font-family: var(--font-jetbrains), monospace;
          font-size: 10.5px;
          color: #6B6E72;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .post-scope .recent-blogs-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .post-scope .recent-blog-item {
          display: block;
          padding-bottom: 12px;
          border-bottom: 1px dashed var(--line-paper);
          transition: transform 0.15s ease;
        }
        .post-scope .recent-blog-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .post-scope .recent-blog-item:hover {
          transform: translateX(3px);
        }
        .post-scope .recent-blog-cat {
          font-family: var(--font-jetbrains), monospace;
          font-size: 9.5px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 3px;
        }
        .post-scope .recent-blog-item-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--ink-dark);
          line-height: 1.35;
          margin-bottom: 4px;
          transition: color 0.15s ease;
        }
        .post-scope .recent-blog-item:hover .recent-blog-item-title {
          color: var(--accent);
        }
        .post-scope .recent-blog-time {
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          color: #8A8D93;
        }
        .post-scope .view-all-blogs-link {
          font-family: var(--font-jetbrains), monospace;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid var(--line-paper);
          width: 100%;
          transition: transform 0.15s ease;
        }
        .post-scope .view-all-blogs-link:hover {
          transform: translateX(4px);
        }

        .post-scope .author-bio-box {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-left: 4px solid var(--accent);
          border-radius: 4px;
          padding: 28px;
          margin: 40px 0;
          display: flex;
          gap: 20px;
          align-items: start;
        }
        .post-scope .author-bio-box img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          flex-shrink: 0;
        }
        .post-scope .author-bio-box h4 {
          font-size: 18px;
          color: var(--ink-dark);
          margin-bottom: 4px;
        }
        .post-scope .author-bio-box p {
          font-size: 14px;
          color: #5A5D62;
          line-height: 1.55;
          margin-bottom: 14px;
        }

        /* ===== CONTENT BODY ===== */
        .post-scope .post-body {
          font-size: 16.5px;
          color: #3A3D42;
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .post-scope .post-body p {
          margin-bottom: 24px;
        }
        .post-scope .post-body h3 {
          font-size: 26px;
          color: var(--ink-dark);
          margin: 44px 0 18px;
          border-bottom: 1px solid var(--line-paper);
          padding-bottom: 10px;
          scroll-margin-top: 110px;
        }
        .post-scope .post-body ul {
          margin-bottom: 28px;
          padding-left: 20px;
          list-style: square;
        }
        .post-scope .post-body li {
          margin-bottom: 12px;
          color: #4A4D52;
        }

        /* ===== COMMENTS SECTION ===== */
        .post-scope .comments-section {
          padding: 50px 0;
          border-top: 1px solid var(--line-paper);
          margin-top: 20px;
        }
        .post-scope .comments-section h3.comments-title {
          font-size: 26px;
          color: var(--ink-dark);
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
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 28px;
          margin-bottom: 40px;
        }
        .post-scope .comment-form h4 {
          font-size: 18px;
          color: var(--ink-dark);
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
          color: #5A5D62;
          text-transform: uppercase;
        }
        .post-scope .input-group input,
        .post-scope .input-group textarea {
          background: var(--paper);
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 12px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--ink-dark);
          outline: none;
          transition: border-color 0.15s;
        }
        .post-scope .input-group input:focus,
        .post-scope .input-group textarea:focus {
          border-color: var(--accent);
        }

        .post-scope .comment-card {
          background: #FFFFFF;
          border: 1px solid var(--line-paper);
          border-radius: 4px;
          padding: 20px 24px;
          margin-bottom: 16px;
        }
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
          background: #ff5252;
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
          color: #ff3b30;
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
        .post-scope .btn-primary { background: var(--accent); color: #FFFFFF; }
        .post-scope .btn-primary:hover { background: #ff5252; transform: translateY(-2px); }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 750px) {
          .post-scope .post-header h1 { font-size: 30px; }
          .post-scope .post-banner { height: 280px; margin-bottom: 30px; }
          .post-scope .recommended-grid { grid-template-columns: 1fr; }
          .post-scope .form-row { grid-template-columns: 1fr; gap: 0; }
        }
      ` }} />

      {/* ===== BREADCRUMB ===== */}
      <div className="breadcrumb" style={{ paddingTop: "84px", background: "#111214", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px" }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
        </div>
      </div>

      {/* ===== ARTICLE BODY & SIDEBAR CONTAINER ===== */}
      <div className="wrap">
        <div className="post-layout">
          
          {/* LEFT MAIN COLUMN */}
          <article className="post-main-col">
            
            {/* Header */}
            <header className="post-header">
              <div className="post-meta-row">
                <span className="post-category-tag">{post.category}</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h1>{post.title}</h1>
              
              <Link href={`/author/${post.author.slug || 'zakir-hussain'}`} className="author-row" style={{ display: 'inline-flex', cursor: 'pointer' }}>
                <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
                <div className="author-info">
                  <h4>{post.author.name} <span style={{ fontSize: '11px', color: 'var(--accent)', marginLeft: '6px' }}>✓ Author Profile</span></h4>
                  <span>{post.author.role}</span>
                </div>
              </Link>
            </header>

            {/* Banner */}
            <div className="post-banner" style={{ width: '100%', height: '420px', borderRadius: '4px', border: '1px solid var(--line-paper)', overflow: 'hidden', margin: '30px 0 40px' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Dynamic content */}
            <section className="post-body">
              {(() => {
                let hIdx = 0;
                return post.content.map((sec, idx) => {
                  if (sec.type === "paragraph") {
                    return <p key={idx}>{sec.text}</p>;
                  } else if (sec.type === "heading") {
                    const headingId = `heading-${hIdx}`;
                    hIdx++;
                    return <h3 key={idx} id={headingId}>{sec.text}</h3>;
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
                });
              })()}
            </section>

            {/* AUTHOR BIO BOX */}
            <div className="author-bio-box">
              <img src={post.author.avatar} alt={post.author.name} />
              <div>
                <h4>Written & Technical Review by <Link href={`/author/${post.author.slug || 'zakir-hussain'}`} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{post.author.name}</Link></h4>
                <p>Zakir Hussain is FixWheel&apos;s Senior Master Mechanic with over 14 years of hands-on experience diagnosing multi-brand two-wheelers across Delhi-NCR. He leads technical field training and writes authentic maintenance guides for Indian riders.</p>
                <Link href={`/author/${post.author.slug || 'zakir-hussain'}`} className="sidebar-author-link">
                  View Author Profile & All Technical Guides by {post.author.name} →
                </Link>
              </div>
            </div>

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

          {/* RIGHT SIDEBAR (TOC & AUTHOR CARD) */}
          <aside className="post-sidebar">
            {/* Table of Contents Card */}
            {(() => {
              const tocList = post.content
                .filter((sec) => sec.type === "heading" && sec.text)
                .map((sec, idx) => ({
                  id: `heading-${idx}`,
                  text: sec.text as string
                }));

              if (tocList.length === 0) return null;

              return (
                <div className="toc-card">
                  <h4>
                    <span style={{ color: 'var(--accent)' }}>📌</span> On This Page
                  </h4>
                  <ul className="toc-list">
                    {tocList.map((item) => (
                      <li key={item.id}>
                        <a
                          className="toc-link"
                          onClick={(e) => {
                            e.preventDefault();
                            const el = document.getElementById(item.id);
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* Recent Blogs Sidebar Card with Latest Article Suggestion */}
            {(() => {
              const latestPost = BLOG_POSTS[0];
              const recentPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

              return (
                <div className="recent-blogs-card">
                  <div className="recent-blogs-header">
                    <span style={{ fontSize: "16px" }}>📰</span>
                    <h4>Recent Articles</h4>
                  </div>

                  {/* LATEST/SUGGESTED ARTICLE BOX */}
                  {latestPost && latestPost.slug !== post.slug && (
                    <div className="latest-blog-badge-box">
                      <div className="latest-badge">
                        <span>✨</span> LATEST READ
                      </div>
                      <Link href={`/blog/${latestPost.slug}`} className="latest-blog-title">
                        {latestPost.title}
                      </Link>
                      <div className="latest-blog-meta">
                        <span>{latestPost.category}</span>
                        <span>•</span>
                        <span>{latestPost.readTime}</span>
                      </div>
                    </div>
                  )}

                  {/* RECENT ARTICLES LIST */}
                  <div className="recent-blogs-list">
                    {recentPosts.map((item) => (
                      <Link key={item.slug} href={`/blog/${item.slug}`} className="recent-blog-item">
                        <span className="recent-blog-cat">{item.category}</span>
                        <div className="recent-blog-item-title">{item.title}</div>
                        <span className="recent-blog-time">{item.readTime}</span>
                      </Link>
                    ))}
                  </div>

                  <Link href="/blog" className="view-all-blogs-link">
                    Explore All Articles & Guides →
                  </Link>
                </div>
              );
            })()}
          </aside>

        </div>
      </div>

      {/* ===== RECOMMENDED ARTICLES ===== */}
      <section className="recommended-section">
        <div className="wrap" style={{ maxWidth: '900px' }}>
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

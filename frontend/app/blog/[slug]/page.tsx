import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogData";
import BlogPostClient from "./page.client";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug.toLowerCase());
  if (!post) {
    return {
      title: "Article Not Found | FixWheel",
      description: "Blog article not found.",
    };
  }

  const titleText = `${post.title} | FixWheel Blog`;
  const descText = post.excerpt;

  return {
    title: titleText,
    description: descText,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `https://www.fixwheel.app/blog/${post.slug}`,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://www.fixwheel.app/blog/${post.slug}`,
      siteName: "FixWheel",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: `https://www.fixwheel.app${post.image}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug.toLowerCase());
  if (!post) {
    notFound();
  }

  return <BlogPostClient slug={params.slug.toLowerCase()} />;
}

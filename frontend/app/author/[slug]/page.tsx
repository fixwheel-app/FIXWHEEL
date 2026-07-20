import { Metadata } from "next";
import { notFound } from "next/navigation";
import AuthorClientPage from "./page.client";
import { AUTHORS_DB } from "@/lib/authorData";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const author = AUTHORS_DB[params.slug];
  if (!author) {
    return {
      title: "Author Not Found | FixWheel",
      description: "Author profile not found on FixWheel."
    };
  }

  return {
    title: `${author.name} - ${author.role} | FixWheel`,
    description: author.bio,
    keywords: [
      author.name,
      `${author.name} bike mechanic`,
      "FixWheel author",
      "motorcycle technical guides",
      ...author.specializations
    ],
    openGraph: {
      title: `${author.name} - ${author.role} | FixWheel`,
      description: author.bio,
      type: "profile",
      images: [{ url: author.avatar }]
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(AUTHORS_DB).map((slug) => ({
    slug,
  }));
}

export default function AuthorPage({ params }: PageProps) {
  const author = AUTHORS_DB[params.slug];
  if (!author) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.role,
    "worksFor": {
      "@type": "Organization",
      "name": "FixWheel"
    },
    "description": author.bio,
    "image": author.avatar
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuthorClientPage slug={params.slug} />
    </>
  );
}

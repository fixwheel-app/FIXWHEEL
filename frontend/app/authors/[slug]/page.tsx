import { redirect } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function AuthorsRedirectPage({ params }: PageProps) {
  redirect(`/author/${params.slug}`);
}

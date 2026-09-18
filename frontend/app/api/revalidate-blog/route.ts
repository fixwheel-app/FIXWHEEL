import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const secretFromQuery = searchParams.get("secret");

    let secretFromBody: string | undefined;
    let postSlug: string | undefined;

    try {
      const body = await req.json();
      secretFromBody = body?.secret;
      postSlug = body?.slug || body?.post?.post_name;
    } catch {
      // Body may be empty if triggered by standard webhook ping
    }

    const secret = secretFromQuery || secretFromBody || req.headers.get("x-webhook-secret");
    const validSecret = process.env.WORDPRESS_REVALIDATION_SECRET;

    if (!validSecret || secret !== validSecret) {
      return NextResponse.json({ message: "Invalid revalidation secret" }, { status: 401 });
    }

    // Purge cache tags for blog
    revalidateTag("blog");
    revalidateTag("blog-posts");
    revalidateTag("blog-slugs");
    revalidateTag("blog-categories");

    // Revalidate paths
    revalidatePath("/blog");
    revalidatePath("/blog/[slug]", "page");

    if (postSlug) {
      revalidatePath(`/blog/${postSlug}`);
    }

    return NextResponse.json({
      revalidated: true,
      message: "Blog cache successfully revalidated on Next.js frontend",
      slug: postSlug || "all",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json({ message: "Error revalidating blog cache", error: String(error) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Support simple browser/cron GET trigger as well
  return POST(req);
}

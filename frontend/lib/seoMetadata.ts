import type { Metadata } from "next";

const MIN_DESCRIPTION_LENGTH = 150;
const MAX_DESCRIPTION_LENGTH = 170;

const DESCRIPTION_ADDITIONS = [
  " Book online today.",
  " Book with FixWheel across Delhi NCR.",
  " Check service details and availability online.",
  " Verified mechanics and transparent pricing are included.",
  " Book verified doorstep two-wheeler service online.",
  " Doorstep support is available across Delhi NCR.",
];

function trimToLength(value: string, maxLength = MAX_DESCRIPTION_LENGTH) {
  if (value.length <= maxLength) return value;

  const target = value.slice(0, maxLength - 3);
  const lastSpace = target.lastIndexOf(" ");
  const trimmed = lastSpace >= MIN_DESCRIPTION_LENGTH - 3
    ? target.slice(0, lastSpace)
    : target;

  return `${trimmed.replace(/[\s,;:.-]+$/g, "")}...`;
}

export function fitMetaDescription(value: string) {
  let description = value.replace(/\s+/g, " ").trim();

  if (description.length > MAX_DESCRIPTION_LENGTH) {
    return trimToLength(description);
  }

  const unusedAdditions = [...DESCRIPTION_ADDITIONS];
  while (description.length < MIN_DESCRIPTION_LENGTH && unusedAdditions.length) {
    const finishingIndex = unusedAdditions.findIndex((addition) => {
      const length = description.length + addition.length;
      return length >= MIN_DESCRIPTION_LENGTH && length <= MAX_DESCRIPTION_LENGTH;
    });

    if (finishingIndex >= 0) {
      description += unusedAdditions.splice(finishingIndex, 1)[0];
      break;
    }

    const fitting = unusedAdditions
      .map((addition, index) => ({ addition, index }))
      .filter(({ addition }) => description.length + addition.length < MIN_DESCRIPTION_LENGTH)
      .sort((a, b) => b.addition.length - a.addition.length)[0];

    if (!fitting) break;
    description += fitting.addition;
    unusedAdditions.splice(fitting.index, 1);
  }

  return trimToLength(description);
}

function titleToString(title: Metadata["title"]) {
  if (typeof title === "string") return title;
  if (title && typeof title === "object" && "absolute" in title) {
    return title.absolute;
  }
  return undefined;
}

function canonicalToString(canonical: unknown) {
  if (typeof canonical === "string") return canonical;
  if (canonical instanceof URL) return canonical.toString();
  if (canonical && typeof canonical === "object" && "url" in canonical) {
    const url = canonical.url;
    if (typeof url === "string") return url;
    if (url instanceof URL) return url.toString();
  }
  return undefined;
}

/**
 * Keeps the canonical, standard metadata and Open Graph values aligned while
 * enforcing the site's 150-170 character meta-description policy.
 */
export function completePageMetadata(metadata: Metadata): Metadata {
  const title = titleToString(metadata.title);
  const description = typeof metadata.description === "string"
    ? fitMetaDescription(metadata.description)
    : undefined;
  const canonical = canonicalToString(metadata.alternates?.canonical);
  const openGraphType = metadata.openGraph && "type" in metadata.openGraph
    ? metadata.openGraph.type
    : "website";

  if (!title || !description || !canonical) {
    return {
      ...metadata,
      ...(description ? { description } : {}),
    };
  }

  return {
    ...metadata,
    description,
    alternates: {
      ...metadata.alternates,
      canonical,
    },
    openGraph: {
      ...(metadata.openGraph || {}),
      title,
      description,
      url: canonical,
      type: openGraphType,
    },
  };
}

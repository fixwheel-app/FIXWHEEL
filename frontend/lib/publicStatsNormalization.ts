export const normalizePublicCount = (value: unknown, fallback: number): number => {
  const normalizedFallback = Number.isInteger(fallback) ? Math.max(0, fallback) : 0;
  if (value === null || value === undefined || value === '') return normalizedFallback;

  const parsed = Number(value);
  return Number.isInteger(parsed) ? Math.max(0, parsed) : normalizedFallback;
};

export const normalizePublicRating = (value: unknown, fallback: number): number => {
  if (value === null || value === undefined || value === '') return fallback;

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 && parsed <= 5 ? parsed : fallback;
};

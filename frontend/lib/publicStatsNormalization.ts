export const normalizePublicCount = (value: unknown, fallback: number): number => {
  if (value === null || value === undefined || value === '') return fallback;

  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : fallback;
};

export const normalizePublicRating = (value: unknown, fallback: number): number => {
  if (value === null || value === undefined || value === '') return fallback;

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 && parsed <= 5 ? parsed : fallback;
};

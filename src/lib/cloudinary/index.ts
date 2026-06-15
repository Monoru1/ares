/**
 * Media resolver — Phase 1 fallback layer.
 *
 * - If a full http(s) URL is passed (Unsplash demo asset), it is returned as-is
 *   (Next/Image handles optimization).
 * - If a bare id is passed AND Cloudinary is configured, a Cloudinary delivery
 *   URL is built. Otherwise the id is returned untouched.
 *
 * This keeps Phase 1 fully functional with zero external config, while staying
 * forward-compatible with a Cloudinary swap in Phase 2.
 */
const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function media(src: string, width = 1600): string {
  if (/^https?:\/\//.test(src)) return src;
  if (CLOUD) {
    return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width}/${src}`;
  }
  return src;
}

export const isCloudinaryEnabled = Boolean(CLOUD);

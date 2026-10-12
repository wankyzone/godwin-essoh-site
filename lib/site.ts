export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "/godwin-essoh-site";

export const siteOrigin = process.env.SITE_URL
  ? new URL(process.env.SITE_URL)
  : undefined;

export function withBasePath(path: string): string {
  if (path === "/") {
    return `${basePath}/`;
  }

  return `${basePath}${path}`;
}

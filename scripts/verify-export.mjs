import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const output = join(process.cwd(), "out");
const requiredFiles = [
  "index.html",
  "profile.html",
  "research.html",
  "publications.html",
  "teaching.html",
  "leadership.html",
  "engagements.html",
  "cv.html",
  "contact.html",
  "google409afdf8b1fa1cf.html",
  ".nojekyll",
  "assets/shaw-university-campus.jpg",
  "assets/ou-norman-campus.jpg",
  "assets/uniabuja-campus.jpg",
  "css/main.css",
  "js/main.js",
  "robots.txt",
  "sitemap.xml",
];

const missing = requiredFiles.filter((file) => !existsSync(join(output, file)));
if (missing.length > 0) {
  throw new Error(`Static export is missing required files: ${missing.join(", ")}`);
}

for (const page of requiredFiles.filter((file) => file.endsWith(".html"))) {
  if (statSync(join(output, page)).size === 0) {
    throw new Error(`Static export contains an empty page: ${page}`);
  }
}

const homepage = readFileSync(join(output, "index.html"), "utf8");
if (homepage.includes("assets/profile.jpg") || homepage.includes("docs/godwin-essoh-cv.pdf")) {
  throw new Error("Homepage references a missing portrait or CV document.");
}
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const expectedPublicationsPath = `${basePath}/publications.html`;
if (!homepage.includes(expectedPublicationsPath)) {
  throw new Error(`Homepage links do not include the configured publications path: ${expectedPublicationsPath}`);
}

for (const page of readdirSync(output).filter((file) => file.endsWith(".html"))) {
  const pagePath = join(output, page);
  const html = readFileSync(pagePath, "utf8");
  const pdfLinks = html.matchAll(/<a\b[^>]*href=["']([^"']+\.pdf)["'][^>]*>/gi);

  for (const [, href] of pdfLinks) {
    if (/^https?:\/\//i.test(href)) {
      continue;
    }

    const localPath = resolve(dirname(pagePath), href.split(/[?#]/, 1)[0]);
    if (!existsSync(localPath)) {
      throw new Error(`${page} contains a link to a missing PDF: ${href}`);
    }
  }
}

console.log(`Verified static export: ${requiredFiles.length} required files.`);

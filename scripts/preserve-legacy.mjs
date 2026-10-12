import {
  cpSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = process.cwd();
const output = join(root, "out");
const legacyPages = [
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
];

for (const directory of ["assets", "css", "js"]) {
  cpSync(join(root, directory), join(output, directory), {
    recursive: true,
    force: true,
  });
}

for (const file of legacyPages) {
  const source = join(root, file);
  if (existsSync(source)) {
    mkdirSync(output, { recursive: true });
    copyFileSync(source, join(output, file));
  }
}

for (const page of legacyPages.filter((file) => file.endsWith(".html"))) {
  const destination = join(output, page);
  let html = readFileSync(destination, "utf8");
  const unavailableDocuments = new Set();

  if (page === "cv.html" && !existsSync(join(output, "docs/godwin-essoh-cv.pdf"))) {
    html = html.replace(
      "You may download the complete CV in PDF format below.",
      "The CV PDF is not available in this site repository.",
    );
  }

  html = html.replace(
    /<a\b[^>]*href=["']([^"']+\.pdf)["'][^>]*>[\s\S]*?<\/a>/gi,
    (link, href) => {
      if (/^https?:\/\//i.test(href)) {
        return link;
      }

      const localPath = resolve(dirname(destination), href.split(/[?#]/, 1)[0]);
      if (existsSync(localPath)) {
        return link;
      }

      if (page === "cv.html") {
        return "";
      }

      if (unavailableDocuments.has(href)) {
        return "";
      }
      unavailableDocuments.add(href);
      return '<span class="document-unavailable">PDF not available</span>';
    },
  );

  writeFileSync(destination, html);
}

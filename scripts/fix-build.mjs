import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const manifest = {
  "/_app": "pages/_app.js",
  "/_document": "pages/_document.js",
  "/_error": "pages/_error.js",
};

// Пути где нужно создать файл
const paths = [
  join(process.cwd(), ".next", "server", "pages-manifest.json"),
  join(
    process.cwd(),
    ".next",
    "standalone",
    ".next",
    "server",
    "pages-manifest.json",
  ),
];

for (const manifestPath of paths) {
  const dir = manifestPath.replace("/pages-manifest.json", "");
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✓ pages-manifest.json created in ${dir}/`);
}

console.log("✓ Build fix completed!");

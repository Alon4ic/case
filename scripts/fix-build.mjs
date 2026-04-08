import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// Создаём файл в том месте, где его ищет opennextjs-cloudflare
const standaloneManifestPath = join(
  process.cwd(),
  ".next",
  "standalone",
  ".next",
  "server",
  "pages-manifest.json",
);
const standaloneDir = join(
  process.cwd(),
  ".next",
  "standalone",
  ".next",
  "server",
);

// Также создаём в обычном месте для совместимости
const regularManifestPath = join(
  process.cwd(),
  ".next",
  "server",
  "pages-manifest.json",
);
const regularDir = join(process.cwd(), ".next", "server");

const manifest = {
  "/_app": "pages/_app.js",
  "/_document": "pages/_document.js",
  "/_error": "pages/_error.js",
};

// Создаём для standalone
if (!existsSync(standaloneDir)) {
  mkdirSync(standaloneDir, { recursive: true });
}
writeFileSync(standaloneManifestPath, JSON.stringify(manifest, null, 2));
console.log("✓ pages-manifest.json created in .next/standalone/.next/server/");

// Создаём для обычной директории
if (!existsSync(regularDir)) {
  mkdirSync(regularDir, { recursive: true });
}
writeFileSync(regularManifestPath, JSON.stringify(manifest, null, 2));
console.log("✓ pages-manifest.json created in .next/server/");

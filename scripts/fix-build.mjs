import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const manifestPath = join(
  process.cwd(),
  ".next",
  "server",
  "pages-manifest.json",
);
const dir = join(process.cwd(), ".next", "server");

if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

const manifest = {
  "/_app": "pages/_app.js",
  "/_document": "pages/_document.js",
  "/_error": "pages/_error.js",
};

writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log("✓ pages-manifest.json created");

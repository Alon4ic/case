import {
  writeFileSync,
  existsSync,
  mkdirSync,
  copyFileSync,
  readdirSync,
} from "fs";
import { join } from "path";

// Функция для рекурсивного копирования файлов
function copyFolderSync(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Создаём pages-manifest.json
const manifest = {
  "/_app": "pages/_app.js",
  "/_document": "pages/_document.js",
  "/_error": "pages/_error.js",
};

// 1. Создаём в обычной .next/server
const regularManifestPath = join(
  process.cwd(),
  ".next",
  "server",
  "pages-manifest.json",
);
const regularDir = join(process.cwd(), ".next", "server");
if (!existsSync(regularDir)) {
  mkdirSync(regularDir, { recursive: true });
}
writeFileSync(regularManifestPath, JSON.stringify(manifest, null, 2));
console.log("✓ pages-manifest.json created in .next/server/");

// 2. Копируем ВСЮ папку .next в .next/standalone/.next
const sourceDir = join(process.cwd(), ".next");
const destDir = join(process.cwd(), ".next", "standalone", ".next");

console.log("Copying .next to .next/standalone/.next...");
copyFolderSync(sourceDir, destDir);
console.log("✓ Complete .next copied to standalone");

// 3. Создаём pages-manifest.json в скопированной папке
const standaloneManifestPath = join(destDir, "server", "pages-manifest.json");
if (!existsSync(join(destDir, "server"))) {
  mkdirSync(join(destDir, "server"), { recursive: true });
}
writeFileSync(standaloneManifestPath, JSON.stringify(manifest, null, 2));
console.log("✓ pages-manifest.json created in .next/standalone/.next/server/");

console.log("✓ Build fix completed successfully!");

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, '.netlify-dist');

const includeNames = [
  'css',
  'images',
  'js',
  'netlify.toml',
  'index.html',
  'history.html',
  'church-history.html',
  'neskaivegen.html',
  'ulfsnesoy.html',
  'dark-tourism.html',
  'nature-industry.html',
];

const ensureDir = (target) => {
  if (!existsSync(target)) {
    mkdirSync(target, { recursive: true });
  }
};

const copyOne = (name) => {
  const source = path.join(root, name);
  const target = path.join(outDir, name);
  cpSync(source, target, { recursive: true });
};

if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true });
}
ensureDir(outDir);

includeNames.forEach(copyOne);

const walk = (dir) => {
  let total = 0;
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      total += walk(fullPath);
    } else {
      total += stat.size;
    }
  }
  return total;
};

const bytes = walk(outDir);
console.log(`Build complete: ${outDir}`);
console.log(`Total size: ${(bytes / 1024 / 1024).toFixed(2)} MB`);

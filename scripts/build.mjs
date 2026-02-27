import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
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
];

const ensureDir = (target) => {
  if (!existsSync(target)) {
    mkdirSync(target, { recursive: true });
  }
};

const copyRecursive = (source, target, shouldInclude) => {
  const sourceStat = statSync(source);
  if (!shouldInclude(source, sourceStat)) {
    return;
  }

  if (sourceStat.isDirectory()) {
    ensureDir(target);
    for (const entry of readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(target, entry), shouldInclude);
    }
    return;
  }

  ensureDir(path.dirname(target));
  copyFileSync(source, target);
};

const copyOne = (name) => {
  const source = path.join(root, name);
  const target = path.join(outDir, name);
  if (name !== 'images') {
    copyRecursive(source, target, () => true);
    return;
  }

  copyRecursive(source, target, (srcPath, stat) => {
    if (stat.isDirectory()) return true;
    if (!/\.(jpg|jpeg|png)$/i.test(srcPath)) return true;
    const webpSibling = srcPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return !existsSync(webpSibling);
  });
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

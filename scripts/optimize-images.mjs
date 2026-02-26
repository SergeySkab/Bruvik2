import { existsSync } from 'node:fs';
import sharp from 'sharp';

const images = [
  'images/Bruvik1.jpg',
  'images/Bruvik2.jpg',
  'images/Neskaivegen1.jpg',
  'images/Neskaivegen2.jpg',
  'images/Neskaivegen3.jpg',
  'images/Neskaivegen4.jpg',
  'images/Neskaivegen5.jpg',
  'images/Ulfsnesøy1.jpg',
  'images/Ulfsnesøy2.jpg',
  'images/Ulfsnesøy3.jpg',
  'images/Ulfsnesøy4.jpg',
];

for (const source of images) {
  if (!existsSync(source)) {
    continue;
  }
  const output = source.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  await sharp(source).webp({ quality: 82 }).toFile(output);
  console.log(`${source} -> ${output}`);
}


import { existsSync } from 'node:fs';
import sharp from 'sharp';

const images = [
  'images/Bruvik1.jpg',
  'images/Bruvik2.jpg',
  'images/Kossdalssvingene.jpg',
  'images/Neskaivegen1.jpg',
  'images/Neskaivegen2.jpg',
  'images/Neskaivegen3.jpg',
  'images/Neskaivegen4.jpg',
  'images/Neskaivegen5.jpg',
  'images/ubb-bs-ok-07396_xl.jpg',
  'images/ubb-jr-084-004_xl.jpg',
  'images/ubb-kk-nbx-0056_xl.jpg',
  'images/ubb-kk-pk-7000_xl.jpg',
  'images/ubb-kk-pk-7001_xl.jpg',
  'images/Ulfsnesøy1.jpg',
  'images/Ulfsnesøy2.jpg',
  'images/Ulfsnesøy3.jpg',
  'images/Ulfsnesøy4.jpg',
  'images/Выкуп цекви ради десятины.png',
  'images/Доставка гробов.png',
  'images/Новая церковь.png',
  'images/Ставкирке.png',
  'images/Упадок церкви.png',
];

for (const source of images) {
  if (!existsSync(source)) {
    continue;
  }
  const output = source.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  await sharp(source).webp({ quality: 82 }).toFile(output);
  console.log(`${source} -> ${output}`);
}

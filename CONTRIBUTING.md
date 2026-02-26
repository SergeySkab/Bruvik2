# Contributing

## General

- Use UTF-8 (no BOM) for all text files.
- Keep visual style stable unless explicitly requested.
- Do not edit `.netlify-dist` manually; generate via `npm run build`.

## i18n

- Update all 4 locales for any changed `data-i18n` key.
- Keep `Bruvik kyrkje`, `Ulfsnesøy`, `Neskaivegen` naming consistent.

## Images

- Add originals into `images/`.
- Run `npm run optimize:images` to generate `.webp` versions.
- Prefer `.webp` in HTML/CSS references when available.

## Quality Gate

Before commit or deploy:

1. `npm run lint`
2. `npm run build`
3. `npm run serve` and manual check of navigation/language switch/mobile menu
4. `npm run test:smoke`

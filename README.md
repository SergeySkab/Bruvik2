# Bruvik Longread

Multilingual longread website about Bruvik, with static frontend pages and Netlify Functions backend.

## Stack

- Static HTML/CSS/JS (ES modules)
- Netlify Functions (`netlify/functions`)
- Netlify Dev for local fullstack runtime
- Self-hosted local fonts (`css/fonts`) for strict CSP compatibility

## Commands

- `npm install` - install dependencies
- `npm run build` - build static publish folder into `.netlify-dist`
- `npm run serve` - start local site + functions with `netlify dev`
- `npm run lint` - run JS/CSS/HTML validation
- `npm run format` - format source files
- `npm run optimize:images` - generate optimized `.webp` images
- `npm run test:smoke` - check core localhost endpoints (requires `npm run serve` on `localhost:8888`)

## Project Structure

- `index.html`, `history.html`, `church-history.html`, `neskaivegen.html`, `ulfsnesoy.html` - pages
- `css/style.css` - global styles
- `css/fonts/` - self-hosted font assets
- `js/main.js` - frontend entrypoint
- `js/modules/` - app modules (`i18n`, `nav`, `effects`, `lightbox`)
- `netlify/functions/` - backend endpoints
- `scripts/` - build and QA automation
- `.netlify-dist/` - generated build output

## Content and i18n Rules

- Keep all user-facing UI strings in `js/modules/i18n.js`.
- Preserve the 4-language contract: `nn`, `ua`, `en`, `ru`.
- `Ulfsnesoy` is fixed spelling in UI labels.

## Backend Endpoints

- `netlify/functions/health.js` is the active runtime healthcheck endpoint.
- `netlify/functions/contact.js` is currently reserved and not wired to frontend UI yet.

## Deployment

Netlify reads `netlify.toml` and runs `npm run build`, publishing `.netlify-dist`.

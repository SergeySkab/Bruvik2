import { initI18n } from './modules/i18n.js';
import { initNav, initSectionSpy } from './modules/nav.js';
import { initImageLightbox } from './modules/lightbox.js';
import { initEffects } from './modules/effects.js';

const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const revealNodes = document.querySelectorAll('.reveal');
const heroSections = Array.from(document.querySelectorAll('.hero-overlap'));
const parallaxNodes = document.querySelectorAll('[data-parallax]');

const { I18N } = initI18n();

const requiredLocales = ['nn', 'ua', 'en', 'ru'];
const allKeys = new Set(Object.keys(I18N.nn || {}));
requiredLocales.forEach((locale) => {
  Object.keys(I18N[locale] || {}).forEach((key) => allKeys.add(key));
});

requiredLocales.forEach((locale) => {
  const missingKeys = Array.from(allKeys).filter((key) => !(key in (I18N[locale] || {})));
  if (missingKeys.length) {
    console.warn(`[i18n] Missing keys for ${locale}: ${missingKeys.join(', ')}`);
  }
});

initNav({ header, navToggle, navLinks });
initImageLightbox();
initEffects({ revealNodes, parallaxNodes, heroSections });
initSectionSpy({ navLinks });

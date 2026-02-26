export const initNav = ({ header, navToggle, navLinks }) => {
if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('menu-open', !expanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (header && header.classList.contains('menu-open')) {
      header.classList.remove('menu-open');
    }
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
};

export const initSectionSpy = ({ navLinks }) => {
const sections = Array.from(document.querySelectorAll('section[id], article[id]'));
if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const targetId = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href')?.endsWith(`#${targetId}`));
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
};

export const initEffects = ({ revealNodes, parallaxNodes, heroSections }) => {
if (revealNodes.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
}

if (parallaxNodes.length) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    let activeHero = null;
    const setHeroState = (nextActive) => {
      if (!heroSections.length || !nextActive) return;
      heroSections.forEach((section) => {
        section.classList.remove('is-active');
        section.classList.remove('is-near');
      });

      const activeIndex = heroSections.indexOf(nextActive);
      if (activeIndex < 0) return;

      nextActive.classList.add('is-active');
      if (heroSections[activeIndex - 1]) heroSections[activeIndex - 1].classList.add('is-near');
      if (heroSections[activeIndex + 1]) heroSections[activeIndex + 1].classList.add('is-near');
      activeHero = nextActive;
    };

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      parallaxNodes.forEach((node) => {
        const speed = Number(node.getAttribute('data-parallax')) || 0.15;
        const hero = node.closest('.hero');
        const rect = hero ? hero.getBoundingClientRect() : { top: 0, height: viewportHeight };
        const sectionCenter = rect.top + rect.height / 2;
        const distanceFromCenter = sectionCenter - viewportHeight / 2;
        const rawShift = -distanceFromCenter * speed * 0.08;
        const translateY = Math.max(-32, Math.min(32, rawShift));

        let scale = 1.045;
        if (hero && hero.classList.contains('is-active')) {
          scale = 1.01;
        } else if (hero && hero.classList.contains('is-near')) {
          scale = 1.02;
        }
        node.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      });
    };
    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });

    if (heroSections.length) {
      const heroRatios = new Map(heroSections.map((section) => [section, 0]));
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            heroRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
          });

          let bestHero = activeHero || heroSections[0];
          let bestRatio = -1;
          heroSections.forEach((section) => {
            const ratio = heroRatios.get(section) || 0;
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestHero = section;
            }
          });

          setHeroState(bestHero);
          heroSections.forEach((section) => {
            const ratio = heroRatios.get(section) || 0;
            section.style.setProperty('--hero-visible', ratio.toFixed(3));
            section.style.setProperty('--crossfade', (1 - Math.min(1, ratio)).toFixed(3));
          });
          updateParallax();
        },
        { threshold: [0, 0.12, 0.25, 0.4, 0.55, 0.7], rootMargin: '-10% 0px -10% 0px' }
      );

      setHeroState(heroSections[0]);
      heroSections.forEach((section) => heroObserver.observe(section));
    }
  }
}
};

(() => {
  const LANG_STORAGE_KEY = 'bruvik_lang';
  const LANG_META = {
    nn: { label: 'NN', htmlLang: 'nn' },
    ua: { label: 'UA', htmlLang: 'uk' },
    en: { label: 'EN', htmlLang: 'en' },
    ru: { label: 'RU', htmlLang: 'ru' },
  };

  const I18N = {
    nn: {
      skip_to_content: 'Hopp til innhald',
      aria_main_nav: 'Hovudnavigasjon',
      aria_open_menu: 'Opne meny',
      nav_home: 'Heim',
      nav_history: 'Historie',
      nav_dark_tourism: 'Mørk turisme',
      nav_nature_industry: 'Natur og industri',
      nav_contacts: 'Kontakt',
      hero_h1: 'Bruvik: Der vill natur testar kroppen, og hard historie gjer sjela djupare',
      hero_lead:
        'Ei longread-reise på Osterøy: frå den gamle Bruvik kyrkje til øyisolasjonen på Ulfsnesøy og hårnålssvingane på Kossdalsvegen med 27 % stigning.',
      hero_cta_history: 'Opn historia',
      hero_cta_route: 'Bruviknipa-ruta',
      section2_kicker: 'Kjøpt historie',
      section2_h2: 'Korleis fiskarar og bønder fekk kyrkja si tilbake',
      section2_body:
        'Visste du at det åndelege livet ditt kunne vere eigd av ein investor? I 1724, for å betale enorme gjeld etter den blodige store nordiske krigen, la den dansk-norske kongen Bruvik kyrkje ut på offentleg auksjon. I meir enn 140 år betalte lokale innbyggjarar tiende til private eigarar frå Bergen, medan dei såg kyrkja deira forfalle. Men historia om Bruvik er historia om ein ukuelig vilje. Bygda samla seg, kjøpte rettane tilbake og reiste i 1867 det storslegne arkitektoniske verket du kan stå i stilla i i dag. Kjenn krafta til menneske som tok lagnaden i eigne hender.',
      section2_cta: 'Utforsk kyrkjehistoria',
      section3_kicker: 'Alcatraz i fjorden',
      section3_h2: 'Mørke løyndomar i krystallklart vatn',
      section3_body:
        'Rett over frå den fredfulle kaia i Bruvik, omringa av iskalde fjordvatn, ligg Ulfsnesøy — ei øy med tunge løyndomar frå fortida. Frå 1881 var denne isolerte flekken ei streng oppsedingskoloni for hundrevis av «vanskelege» ungdomar frå heile Noreg, før han seinare vart gjort om til eit unikt ope, økologisk fengsel. Den kalde fjorden gjorde flukt nesten umogeleg og lét menneske vere åleine med naturkreftene og eigne tankar. I dag trekkjer den tomme øya blikk frå land og minner om dei harde, dramatiske kontrastane i skandinavisk historie. Bruvik inviterer deg til å sjå bak postkortfasaden.',
      section3_cta: 'Gå inn i øyhistoria',
      section4_kicker: 'Ingeniørkunst på grensa til vanvit',
      section4_h2: 'Kossdalssvingane fottur: 17 hårnålssvingar og 27 % stigning',
      section4_body:
        'Sjå føre deg loddrette fjell, hakker, dynamitt, tung pust frå hestar og reint sta mot. Den historiske Kossdalsvegen har 17 ekstreme hårnålssvingar, seks meter høge steinmurar lagde for hand utan ein dråpe sement, og ein vill stigning på 27 % som trassar tyngdekrafta. Det som for hundre år sidan var eit utmattande logistisk mareritt for bøndene, er i dag ein av Noregs mest rå og spektakulære turstiar. Har du styrken i kropp og vilje til å gå i spora etter dei som kom før?',
      section4_cta: 'Utfordre deg sjølv på ruta',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Kontakt: visit@bruvik.local',
      footer_route: 'Rute: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
    },
    ua: {
      skip_to_content: 'Перейти до контенту',
      aria_main_nav: 'Основна навігація',
      aria_open_menu: 'Відкрити меню',
      nav_home: 'Головна',
      nav_history: 'Історія',
      nav_dark_tourism: 'Темний туризм',
      nav_nature_industry: 'Природа й індустрія',
      nav_contacts: 'Контакти',
      hero_h1: 'Брувік: там, де дика природа випробовує тіло на міцність, а сувора історія поглиблює душу',
      hero_lead:
        'Лонгрід-мандрівка Остереєм: від давньої Bruvik kyrkje до острівної ізоляції Ulfsnesøy і серпантину Kossdalsvegen з ухилом 27%.',
      hero_cta_history: 'Відкрити хроніку',
      hero_cta_route: 'Маршрут Брувікніпа',
      section2_kicker: 'Куплена історія',
      section2_h2: 'Як рибалки й селяни повернули собі храм',
      section2_body:
        'Чи знали ви, що ваше духовне життя може належати інвестору? У 1724 році, щоб покрити колосальні борги після кривавої Великої Північної війни, дансько-норвезький король виставив церкву Брувіка на публічний аукціон. Понад 140 років місцеві жителі сплачували десятину приватним власникам із Бергена, спостерігаючи, як їхній храм поволі занепадає. Та історія Брувіка — це історія незламного духу. Громада об’єдналася, викупила свої права і в 1867 році звела величний архітектурний шедевр, у якому ви можете постояти в тиші вже сьогодні. Відчуйте силу людей, які взяли долю у власні руки.',
      section2_cta: 'Дослідити історію церкви',
      section3_kicker: 'Алькатрас фіордів',
      section3_h2: 'Темні таємниці кришталевих вод',
      section3_body:
        'Просто навпроти спокійної пристані Брувіка, серед крижаних вод фіорду, лежить Ульфснесей — острів із важкими таємницями минулого. З 1881 року цей ізольований клаптик землі був суворою колонією для сотень «важких» підлітків з усієї Норвегії, а згодом перетворився на унікальну еко-в’язницю відкритого типу. Холодний фіорд майже унеможливлював втечу, залишаючи людей наодинці зі стихією та власними думками. Сьогодні безлюдний острів притягує погляди з берега, нагадуючи про суворі й драматичні контрасти скандинавської історії. Брувік запрошує вас зазирнути за фасад листівкових пейзажів.',
      section3_cta: 'Зануритися в історію острова',
      section4_kicker: 'Інженерія на межі божевілля',
      section4_h2: 'Kossdalssvingane fottur: 17 шпильок і ухил 27%',
      section4_body:
        'Уявіть стрімкі скелі, кирки, динаміт, важке дихання коней і абсолютну впертість. Історична дорога Коссдалсвеген — це 17 екстремальних шпильок, шестиметрові кам’яні стіни, складені вручну без краплі цементу, і шалений ухил 27%, що кидає виклик гравітації. Те, що століття тому було виснажливим логістичним кошмаром для місцевих селян, сьогодні стало одним із найсуворіших і найефектніших пішохідних маршрутів Норвегії. Чи вистачить вам фізичної сили та сили волі пройти шляхом предків?',
      section4_cta: 'Кинути собі виклик на маршруті',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Контакт: visit@bruvik.local',
      footer_route: 'Маршрут: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
    },
    en: {
      skip_to_content: 'Skip to content',
      aria_main_nav: 'Main navigation',
      aria_open_menu: 'Open menu',
      nav_home: 'Home',
      nav_history: 'History',
      nav_dark_tourism: 'Dark tourism',
      nav_nature_industry: 'Nature & industry',
      nav_contacts: 'Contacts',
      hero_h1: 'Bruvik: where wild nature tests the body, and stark history deepens the soul',
      hero_lead:
        'A longread journey across Osterøy: from the historic Bruvik kyrkje to the island isolation of Ulfsnesøy and the Kossdalsvegen hairpins with a 27% gradient.',
      hero_cta_history: 'Open the chronicle',
      hero_cta_route: 'Bruviknipa route',
      section2_kicker: 'Bought history',
      section2_h2: 'How fishers and farmers reclaimed their church',
      section2_body:
        'Did you know your spiritual life could belong to an investor? In 1724, to cover massive debts after the bloody Great Northern War, the Danish-Norwegian king put Bruvik church up for public auction. For more than 140 years, locals paid tithes to private owners from Bergen while watching their church slowly decay. Yet Bruvik is a story of unbroken resolve. The community united, bought its rights back, and in 1867 raised the monumental architectural masterpiece where you can stand in silence today. Feel the strength of people who took their fate into their own hands.',
      section2_cta: 'Explore the church history',
      section3_kicker: 'Alcatraz of the fjords',
      section3_h2: 'Dark secrets of crystal waters',
      section3_body:
        'Directly across from Bruvik’s calm quay, surrounded by icy fjord waters, lies Ulfsnesøy — an island marked by difficult secrets of the past. Since 1881, this isolated patch of land served as a strict colony for hundreds of “troubled” youths from across Norway, later transformed into a unique open eco-prison. The cold fjord made escape nearly impossible, leaving people alone with the elements and their thoughts. Today, the deserted island draws the eye from the shore, reminding visitors of the harsh and dramatic contrasts of Scandinavian history. Bruvik invites you to look beyond postcard scenery.',
      section3_cta: 'Dive into the island history',
      section4_kicker: 'Engineering on the edge of madness',
      section4_h2: 'Kossdalssvingane hike: 17 hairpins and a 27% grade',
      section4_body:
        'Imagine sheer rock faces, pickaxes, dynamite, the heavy breath of horses, and sheer stubbornness. The historic Kossdalsvegen features 17 extreme hairpin turns, six-metre stone retaining walls built by hand without a drop of cement, and a staggering 27% incline that defies gravity. What was a punishing logistical nightmare for local farmers a century ago has become one of Norway’s most brutal and spectacular hiking routes. Do you have the physical strength and willpower to follow in your ancestors’ footsteps?',
      section4_cta: 'Challenge yourself on the route',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Contact: visit@bruvik.local',
      footer_route: 'Route: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
    },
    ru: {
      skip_to_content: 'Перейти к контенту',
      aria_main_nav: 'Основная навигация',
      aria_open_menu: 'Открыть меню',
      nav_home: 'Главная',
      nav_history: 'История',
      nav_dark_tourism: 'Тёмный туризм',
      nav_nature_industry: 'Природа и индустрия',
      nav_contacts: 'Контакты',
      hero_h1: 'Брувик: там, где дикая природа испытывает тело на прочность, а суровая история углубляет душу',
      hero_lead:
        'Лонгрид-путешествие по Osterøy: от древней Bruvik kyrkje до островной изоляции Ulfsnesøy и серпантина Kossdalsvegen с уклоном 27%.',
      hero_cta_history: 'Открыть хронику',
      hero_cta_route: 'Маршрут Брувикнипа',
      section2_kicker: 'Купленная история',
      section2_h2: 'Как рыбаки и крестьяне вернули свой храм',
      section2_body:
        'Знаете ли вы, что ваша духовная жизнь может принадлежать инвестору? В 1724 году, чтобы расплатиться с колоссальными долгами после кровопролитной Великой Северной войны, датско-норвежский король выставил церковь Брувика на публичный аукцион. Более 140 лет местные жители платили десятину частным владельцам из Бергена, наблюдая, как их храм медленно превращается в руины. Но история Брувика — это история несломленного духа. Община объединила усилия, выкупила свои права и в 1867 году возвела величественный архитектурный шедевр, в котором вы можете постоять в тишине уже сегодня. Почувствуйте силу людей, взявших судьбу в свои руки.',
      section2_cta: 'Исследовать историю церкви',
      section3_kicker: 'Алькатрас фьордов',
      section3_h2: 'Тёмные тайны кристальных вод',
      section3_body:
        'Прямо напротив спокойной пристани Брувика, среди ледяных вод фьорда, лежит Ульфснесёй — остров, хранящий тяжёлые секреты прошлого. С 1881 года этот изолированный клочок земли служил строгой колонией для сотен «трудных» подростков со всей Норвегии, а позже превратился в уникальную эко-тюрьму открытого типа. Холодный фьорд делал побег почти невозможным, оставляя людей наедине со стихией и собственными мыслями. Сегодня пустующий остров притягивает взгляды с берега, напоминая о суровых и драматичных контрастах скандинавской истории. Брувик приглашает вас заглянуть за фасад открыточных пейзажей.',
      section3_cta: 'Погрузиться в историю острова',
      section4_kicker: 'Инженерия на грани безумия',
      section4_h2: 'Kossdalssvingane fottur: 17 шпилек и уклон 27%',
      section4_body:
        'Представьте отвесные скалы, кирки, динамит, тяжёлое дыхание лошадей и абсолютное упрямство. Историческая дорога Коссдалсвеген — это 17 экстремальных шпилек, шестиметровые каменные стены, сложенные вручную без капли цемента, и безумный уклон 27%, бросающий вызов гравитации. То, что столетие назад было изнурительным логистическим кошмаром для местных крестьян, сегодня стало одним из самых брутальных и эффектных пешеходных маршрутов Норвегии. Хватит ли у вас физических сил и воли пройти по пути предков?',
      section4_cta: 'Бросить себе вызов на маршруте',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Контакт: visit@bruvik.local',
      footer_route: 'Маршрут: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
    },
  };

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const revealNodes = document.querySelectorAll('.reveal');
  const heroSections = Array.from(document.querySelectorAll('.hero-overlap'));
  const parallaxNodes = document.querySelectorAll('[data-parallax]');
  const langSwitch = document.getElementById('lang-switch');
  const langTrigger = langSwitch ? langSwitch.querySelector('.lang-trigger') : null;
  const langCurrent = document.getElementById('lang-current');
  const langOptions = langSwitch ? Array.from(langSwitch.querySelectorAll('.lang-option')) : [];

  const getText = (key, lang) => I18N[lang]?.[key] ?? I18N.nn[key] ?? key;
  const normalizeLang = (lang) => (LANG_META[lang] ? lang : 'nn');

  const setStoredLang = (lang) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (_err) {
      // Ignore storage errors.
    }
  };

  const getStoredLang = () => {
    try {
      return localStorage.getItem(LANG_STORAGE_KEY);
    } catch (_err) {
      return null;
    }
  };

  const applyLanguage = (requestedLang) => {
    const lang = normalizeLang(requestedLang);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = getText(key, lang);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const rules = element.dataset.i18nAttr.split('|');
      rules.forEach((rule) => {
        const [attr, key] = rule.split(':');
        if (!attr || !key) return;
        element.setAttribute(attr.trim(), getText(key.trim(), lang));
      });
    });

    const meta = LANG_META[lang];
    document.documentElement.lang = meta.htmlLang;

    if (langCurrent) {
      langCurrent.textContent = meta.label;
    }

    langOptions.forEach((option) => {
      const selected = option.dataset.lang === lang;
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-selected', String(selected));
    });

    setStoredLang(lang);
  };

  if (langSwitch && langTrigger && langOptions.length) {
    const closeLangMenu = () => {
      langSwitch.classList.remove('open');
      langTrigger.setAttribute('aria-expanded', 'false');
    };

    const openLangMenu = () => {
      langSwitch.classList.add('open');
      langTrigger.setAttribute('aria-expanded', 'true');
    };

    applyLanguage(normalizeLang(getStoredLang() || 'nn'));

    langTrigger.addEventListener('click', () => {
      if (langSwitch.classList.contains('open')) {
        closeLangMenu();
      } else {
        openLangMenu();
      }
    });

    langOptions.forEach((option) => {
      option.addEventListener('click', () => {
        const selectedLang = normalizeLang(option.dataset.lang || 'nn');
        applyLanguage(selectedLang);
        closeLangMenu();
      });
    });

    document.addEventListener('click', (event) => {
      if (!langSwitch.contains(event.target)) {
        closeLangMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeLangMenu();
      }
    });
  } else {
    applyLanguage(normalizeLang(getStoredLang() || 'nn'));
  }

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
})();

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
      nav_history: 'Historie om Bruvik',
      nav_dark_tourism: 'Kyrkjehistorie',
      nav_neskaivegen: 'Neskaivegen',
      nav_nature_industry: 'Natur og industri',
      nav_contacts: 'Kontakt',
      hero_h1: 'Bruvik: Der vill natur testar kroppen, og hard historie gjer sjela djupare',
      hero_lead:
        'Ei longread-reise på Osterøy: frå den gamle Bruvik kyrkje til øyisolasjonen på Ulfsnesøy og hårnålssvingane på Kossdalsvegen med 27 % stigning.',
      hero_cta_history: 'Historia om Bruvik',
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
      section4_kicker: 'Historisk rute',
      section4_h2: 'Neskaivegen: Frå den kongelege postvegen til turistporten i Bruvik',
      section4_body:
        'Gå nedover Neskaivegen – ruta der kongelege kurerar reid for 300 år sidan, og der varer vart frakta ned til snøkvite dampbåtar for 100 år sidan. I dag er den gamle kaien ei roleg hamn og startpunktet for di reise inn i den ville naturen i Sørfjorden. Denne gata er ikkje berre ei topografisk linje på kartet over Osterøy; ho er eit historisk blodomløp som i hundreår har definert økonomien, klassehierarkiet og sambandet bygda hadde med omverda.',
      section4_cta: 'Utforsk Neskaivegen',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Kontakt: visit@bruvik.local',
      footer_route: 'Rute: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
      history_hero_kicker: 'Arkivkrønike',
      history_hero_title: 'Historia om Bruvik',
      history_hero_lead: 'Eitt fjordlandskap og ei fleirlagd historie om fellesskapet.',
      church_history_hero_kicker: 'Kyrkjekrønike',
      church_history_hero_title:
        'Den arkitektoniske og sosiokulturelle utviklinga til Bruvik kyrkje: Frå mellomalderkyrkjelyd til 1800-tals monumentalisme',
      church_history_hero_lead:
        'Ei fleirspråkleg forteljing om arkitektur, eigarskap, ritual og lokalt minne.',
      neskaivegen_hero_kicker: 'Kystkronikk',
      neskaivegen_hero_title: 'Neskaivegen',
      neskaivegen_hero_lead: 'Frå kongeleg postveg til turistporten i Bruvik.',
      history_sources_title: 'Biletkjelder',
      history_sources_note: 'Alle foto er henta frå Marcus ved Universitetsbiblioteket i Bergen.',
      church_history_footer_note: 'Tekst og illustrasjonar: kyrkjehistoria i Bruvik på fire språk.',
    },
    ua: {
      skip_to_content: 'Перейти до контенту',
      aria_main_nav: 'Основна навігація',
      aria_open_menu: 'Відкрити меню',
      nav_home: 'Головна',
      nav_history: 'Історія Брувіка',
      nav_dark_tourism: 'Історія церкви',
      nav_neskaivegen: 'Neskaivegen',
      nav_nature_industry: 'Природа й індустрія',
      nav_contacts: 'Контакти',
      hero_h1: 'Брувік: там, де дика природа випробовує тіло на міцність, а сувора історія поглиблює душу',
      hero_lead:
        'Лонгрід-мандрівка Остереєм: від давньої Bruvik kyrkje до острівної ізоляції Ulfsnesøy і серпантину Kossdalsvegen з ухилом 27%.',
      hero_cta_history: 'Історія Брувіка',
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
      section4_kicker: 'Історичний маршрут',
      section4_h2: 'Neskaivegen: Від королівського поштового тракту до туристичних воріт Брувіка',
      section4_body:
        'Спустіться вулицею Neskaivegen — маршрутом, яким 300 років тому скакали королівські курʼєри, а 100 років тому звозили товари до білосніжних пароплавів. Сьогодні старий причал — це тиха гавань і стартова точка для вашого занурення в дику природу Сьорфьорда. Ця вулиця не просто топографічна лінія на карті острова Остерей; це історична кровоносна система, що століттями визначала економіку, класову ієрархію та звʼязок села із зовнішнім світом.',
      section4_cta: 'Дослідити Neskaivegen',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Контакт: visit@bruvik.local',
      footer_route: 'Маршрут: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
      history_hero_kicker: 'Архівна хроніка',
      history_hero_title: 'Історія Брувіка',
      history_hero_lead: 'Один фіорд і багатошарова історія громади.',
      church_history_hero_kicker: 'Церковна хроніка',
      church_history_hero_title:
        'Архітектурна та соціокультурна еволюція церкви Брувіка: Від середньовічної парафії до монументалізму XIX століття',
      church_history_hero_lead:
        'Багатомовна розповідь про архітектуру, власність, обряди та пам’ять громади.',
      neskaivegen_hero_kicker: 'Прибережна хроніка',
      neskaivegen_hero_title: 'Neskaivegen',
      neskaivegen_hero_lead: 'Від королівського поштового тракту до туристичних воріт Брувіка.',
      history_sources_title: 'Джерела фотографій',
      history_sources_note: 'Усі фото взято з Marcus, Universitetsbiblioteket i Bergen.',
      church_history_footer_note: 'Текст і ілюстрації: церковна історія Брувіка чотирма мовами.',
    },
    en: {
      skip_to_content: 'Skip to content',
      aria_main_nav: 'Main navigation',
      aria_open_menu: 'Open menu',
      nav_home: 'Home',
      nav_history: 'History of Bruvik',
      nav_dark_tourism: 'Church History',
      nav_neskaivegen: 'Neskaivegen',
      nav_nature_industry: 'Nature & industry',
      nav_contacts: 'Contacts',
      hero_h1: 'Bruvik: where wild nature tests the body, and stark history deepens the soul',
      hero_lead:
        'A longread journey across Osterøy: from the historic Bruvik kyrkje to the island isolation of Ulfsnesøy and the Kossdalsvegen hairpins with a 27% gradient.',
      hero_cta_history: 'History of Bruvik',
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
      section4_kicker: 'Historic route',
      section4_h2: 'Neskaivegen: From the Royal Postal Route to the Tourist Gateway of Bruvik',
      section4_body:
        'Descend Neskaivegen—the route where royal couriers rode 300 years ago, and where goods were carted to snow-white steamboats a century ago. Today, the old pier serves as a quiet harbor and the starting point for immersion into the untamed nature of Sørfjorden. This street is not merely a topographical line on the map of Osterøy; it is a historical circulatory system that defined the local economy, class hierarchy, and the village connection to the outside world for centuries.',
      section4_cta: 'Explore Neskaivegen',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Contact: visit@bruvik.local',
      footer_route: 'Route: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
      history_hero_kicker: 'Archive chronicle',
      history_hero_title: 'History of Bruvik',
      history_hero_lead: 'One fjord and a multilayered story of the community.',
      church_history_hero_kicker: 'Church chronicle',
      church_history_hero_title:
        'The Architectural and Socio-Cultural Evolution of Bruvik Church: From Medieval Parish to 19th-Century Monumentalism',
      church_history_hero_lead:
        'A multilingual narrative on architecture, ownership, rituals, and community memory.',
      neskaivegen_hero_kicker: 'Coastal chronicle',
      neskaivegen_hero_title: 'Neskaivegen',
      neskaivegen_hero_lead: 'From the Royal Postal Route to the Tourist Gateway of Bruvik.',
      history_sources_title: 'Photo sources',
      history_sources_note: 'All images are sourced from Marcus at the University of Bergen Library.',
      church_history_footer_note: 'Text and illustrations: Bruvik church history in four languages.',
    },
    ru: {
      skip_to_content: 'Перейти к контенту',
      aria_main_nav: 'Основная навигация',
      aria_open_menu: 'Открыть меню',
      nav_home: 'Главная',
      nav_history: 'История Брувика',
      nav_dark_tourism: 'История Церкви',
      nav_neskaivegen: 'Neskaivegen',
      nav_nature_industry: 'Природа и индустрия',
      nav_contacts: 'Контакты',
      hero_h1: 'Брувик: там, где дикая природа испытывает тело на прочность, а суровая история углубляет душу',
      hero_lead:
        'Лонгрид-путешествие по Osterøy: от древней Bruvik kyrkje до островной изоляции Ulfsnesøy и серпантина Kossdalsvegen с уклоном 27%.',
      hero_cta_history: 'История Брувика',
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
      section4_kicker: 'Исторический маршрут',
      section4_h2: 'Neskaivegen: От королевского почтового тракта до туристических ворот Брувика.',
      section4_body:
        'Спуститесь по Neskaivegen — маршруту, по которому 300 лет назад скакали королевские курьеры, а 100 лет назад свозились товары к белоснежным пароходам. Сегодня старый причал — это тихая гавань и стартовая точка для вашего погружения в дикую природу Сёрфьорда. Эта улица не просто топографическая линия на карте острова Остерёй; это историческая кровеносная система, веками определявшая экономику, классовую иерархию и связь деревни с внешним миром.',
      section4_cta: 'Открыть Neskaivegen',
      footer_title: 'Bruvik Longread',
      footer_contact: 'Контакт: visit@bruvik.local',
      footer_route: 'Маршрут: Bruvik kyrkje • Ulfsnesøy • Kossdalsvegen • Bruviknipa',
      history_hero_kicker: 'Архивная хроника',
      history_hero_title: 'История Брувика',
      history_hero_lead: 'Один фьорд и многослойная история общины.',
      church_history_hero_kicker: 'Церковная хроника',
      church_history_hero_title:
        'Архитектурная и социокультурная эволюция церкви Брувика: От средневекового прихода до монументализма XIX века',
      church_history_hero_lead:
        'Мультиязычный рассказ об архитектуре, собственности, обрядах и памяти общины.',
      neskaivegen_hero_kicker: 'Прибрежная хроника',
      neskaivegen_hero_title: 'Neskaivegen',
      neskaivegen_hero_lead: 'От королевского почтового тракта до туристических ворот Брувика.',
      history_sources_title: 'Источники фотографий',
      history_sources_note: 'Все изображения взяты из Marcus при Universitetsbiblioteket i Bergen.',
      church_history_footer_note: 'Текст и иллюстрации: церковная история Брувика на четырех языках.',
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

    const langBlocks = document.querySelectorAll('[data-lang-block]');
    if (langBlocks.length) {
      langBlocks.forEach((element) => {
        const blockLang = normalizeLang(element.dataset.langBlock || 'nn');
        const isActive = blockLang === lang;
        element.hidden = !isActive;
        element.setAttribute('aria-hidden', String(!isActive));
      });
    }

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

  const initImageLightbox = () => {
    const collectBackgroundUrl = (element) => {
      const fromData = element.getAttribute('data-lightbox-src');
      if (fromData) return fromData;
      const styleValue = element.getAttribute('style') || '';
      const match = styleValue.match(/background-image\s*:\s*url\((['"]?)(.*?)\1\)/i);
      return match ? match[2] : '';
    };

    const rawTargets = [
      ...Array.from(document.querySelectorAll('.chronicle-figure img')),
      ...Array.from(document.querySelectorAll('.photo-panel')),
    ];
    if (!rawTargets.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.hidden = true;
    overlay.innerHTML = `
      <div class="lightbox-backdrop" data-lightbox-close></div>
      <div class="lightbox-shell" role="dialog" aria-modal="true" aria-label="Image viewer">
        <div class="lightbox-stage">
          <img class="lightbox-image" alt="">
        </div>
        <div class="lightbox-controls" role="toolbar" aria-label="Image controls">
          <button class="lightbox-btn" type="button" data-action="zoom-in" aria-label="Zoom in">+</button>
          <button class="lightbox-btn" type="button" data-action="zoom-out" aria-label="Zoom out">−</button>
          <button class="lightbox-btn lightbox-btn-reset" type="button" data-action="reset" aria-label="Reset zoom">Reset</button>
          <span class="lightbox-zoom-readout" aria-live="polite">100%</span>
          <button class="lightbox-btn lightbox-btn-close" type="button" data-action="close" aria-label="Close viewer">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const stage = overlay.querySelector('.lightbox-stage');
    const image = overlay.querySelector('.lightbox-image');
    const zoomReadout = overlay.querySelector('.lightbox-zoom-readout');
    const closeBtn = overlay.querySelector('[data-action="close"]');
    const focusables = () =>
      Array.from(overlay.querySelectorAll('button')).filter((button) => !button.disabled && button.offsetParent !== null);
    const inertSiblings = Array.from(document.body.children).filter((element) => element !== overlay);
    const inertSupport = 'inert' in HTMLElement.prototype;

    let activeTrigger = null;
    let activeSrc = '';
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    const minScale = 1;
    const maxScale = 6;
    let dragging = false;
    let dragPointerId = null;
    let dragStartX = 0;
    let dragStartY = 0;
    let startTranslateX = 0;
    let startTranslateY = 0;
    const pointers = new Map();
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    let pinchCenter = null;
    let lastTouchTap = 0;
    let previousBodyOverflow = '';

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const getImageMetrics = () => {
      const stageRect = stage.getBoundingClientRect();
      const naturalWidth = image.naturalWidth || 1;
      const naturalHeight = image.naturalHeight || 1;
      const fitScale = Math.min(stageRect.width / naturalWidth, stageRect.height / naturalHeight);
      return {
        stageWidth: stageRect.width,
        stageHeight: stageRect.height,
        baseWidth: naturalWidth * fitScale,
        baseHeight: naturalHeight * fitScale,
      };
    };

    const clampTranslation = () => {
      const { stageWidth, stageHeight, baseWidth, baseHeight } = getImageMetrics();
      const projectedWidth = baseWidth * scale;
      const projectedHeight = baseHeight * scale;
      const maxX = Math.max(0, (projectedWidth - stageWidth) / 2);
      const maxY = Math.max(0, (projectedHeight - stageHeight) / 2);
      translateX = clamp(translateX, -maxX, maxX);
      translateY = clamp(translateY, -maxY, maxY);
    };

    const paint = () => {
      clampTranslation();
      image.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
      overlay.classList.toggle('is-zoomed', scale > 1.001);
      stage.classList.toggle('is-dragging', dragging);
      if (zoomReadout) {
        zoomReadout.textContent = `${Math.round(scale * 100)}%`;
      }
    };

    const resetView = () => {
      scale = 1;
      translateX = 0;
      translateY = 0;
      dragging = false;
      dragPointerId = null;
      paint();
    };

    const zoomTo = (nextScale, pointX = 0, pointY = 0) => {
      const targetScale = clamp(nextScale, minScale, maxScale);
      if (Math.abs(targetScale - scale) < 0.001) return;
      const ratio = targetScale / scale;
      translateX = pointX - (pointX - translateX) * ratio;
      translateY = pointY - (pointY - translateY) * ratio;
      scale = targetScale;
      paint();
    };

    const getPointFromEvent = (event) => {
      const rect = stage.getBoundingClientRect();
      return {
        x: event.clientX - rect.left - rect.width / 2,
        y: event.clientY - rect.top - rect.height / 2,
      };
    };

    const open = (source, trigger) => {
      activeSrc = source;
      activeTrigger = trigger;
      image.src = source;
      image.alt = trigger.getAttribute('aria-label') || trigger.getAttribute('alt') || 'Article photo';
      overlay.hidden = false;
      overlay.classList.add('is-open');
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      if (inertSupport) {
        inertSiblings.forEach((element) => {
          element.inert = true;
        });
      }
      resetView();
      closeBtn.focus();
    };

    const close = () => {
      overlay.classList.remove('is-open');
      overlay.hidden = true;
      document.body.style.overflow = previousBodyOverflow;
      if (inertSupport) {
        inertSiblings.forEach((element) => {
          element.inert = false;
        });
      }
      pointers.clear();
      dragging = false;
      dragPointerId = null;
      if (activeTrigger) {
        activeTrigger.focus();
      }
      activeTrigger = null;
      activeSrc = '';
      image.src = '';
    };

    const extractSource = (element) => {
      if (element.matches('.chronicle-figure img')) {
        return element.currentSrc || element.src || '';
      }
      if (element.classList.contains('photo-panel')) {
        return collectBackgroundUrl(element);
      }
      return '';
    };

    rawTargets.forEach((element) => {
      const source = extractSource(element);
      if (!source) return;
      const label =
        element.getAttribute('alt') ||
        element.querySelector('img')?.getAttribute('alt') ||
        'Open image in viewer';
      element.setAttribute('data-lightbox', 'true');
      element.setAttribute('role', 'button');
      element.setAttribute('tabindex', '0');
      element.setAttribute('aria-label', label);
      element.classList.add('is-lightbox-target');

      element.addEventListener('click', () => open(source, element));
      element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(source, element);
        }
      });
    });

    image.addEventListener('load', () => {
      resetView();
    });

    stage.addEventListener(
      'wheel',
      (event) => {
        if (overlay.hidden) return;
        event.preventDefault();
        const { x, y } = getPointFromEvent(event);
        const direction = event.deltaY < 0 ? 1 : -1;
        zoomTo(scale + direction * 0.18, x, y);
      },
      { passive: false }
    );

    stage.addEventListener('dblclick', (event) => {
      if (overlay.hidden) return;
      const { x, y } = getPointFromEvent(event);
      const target = scale > 1.1 ? 1 : 2.5;
      zoomTo(target, x, y);
    });

    stage.addEventListener('pointerdown', (event) => {
      if (overlay.hidden) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (pointers.size === 1 && scale > 1) {
        dragging = true;
        dragPointerId = event.pointerId;
        dragStartX = event.clientX;
        dragStartY = event.clientY;
        startTranslateX = translateX;
        startTranslateY = translateY;
        stage.setPointerCapture(event.pointerId);
        paint();
      }

      if (pointers.size === 2) {
        const values = Array.from(pointers.values());
        const dx = values[0].x - values[1].x;
        const dy = values[0].y - values[1].y;
        pinchStartDistance = Math.hypot(dx, dy);
        pinchStartScale = scale;
        const rect = stage.getBoundingClientRect();
        pinchCenter = {
          x: (values[0].x + values[1].x) / 2 - rect.left - rect.width / 2,
          y: (values[0].y + values[1].y) / 2 - rect.top - rect.height / 2,
        };
      }
    });

    stage.addEventListener('pointermove', (event) => {
      if (overlay.hidden || !pointers.has(event.pointerId)) return;
      pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (pointers.size === 2 && pinchStartDistance > 0) {
        const values = Array.from(pointers.values());
        const dx = values[0].x - values[1].x;
        const dy = values[0].y - values[1].y;
        const distance = Math.hypot(dx, dy);
        const nextScale = pinchStartScale * (distance / pinchStartDistance);
        const pivot = pinchCenter || { x: 0, y: 0 };
        zoomTo(nextScale, pivot.x, pivot.y);
        return;
      }

      if (dragging && event.pointerId === dragPointerId) {
        event.preventDefault();
        translateX = startTranslateX + (event.clientX - dragStartX);
        translateY = startTranslateY + (event.clientY - dragStartY);
        paint();
      }
    });

    const stopPointer = (event) => {
      pointers.delete(event.pointerId);
      if (dragPointerId === event.pointerId) {
        dragging = false;
        dragPointerId = null;
        paint();
      }
      if (pointers.size < 2) {
        pinchStartDistance = 0;
        pinchCenter = null;
      }

      if (event.pointerType === 'touch') {
        const now = Date.now();
        if (now - lastTouchTap < 280) {
          const point = getPointFromEvent(event);
          const target = scale > 1.1 ? 1 : 2.5;
          zoomTo(target, point.x, point.y);
          lastTouchTap = 0;
        } else {
          lastTouchTap = now;
        }
      }
    };

    stage.addEventListener('pointerup', stopPointer);
    stage.addEventListener('pointercancel', stopPointer);
    stage.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'mouse') return;
      stopPointer(event);
    });

    overlay.addEventListener('click', (event) => {
      if (event.target.hasAttribute('data-lightbox-close')) {
        close();
      }
    });

    overlay.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        if (action === 'close') close();
        if (action === 'zoom-in') zoomTo(scale + 0.2);
        if (action === 'zoom-out') zoomTo(scale - 0.2);
        if (action === 'reset') resetView();
      });
    });

    overlay.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        zoomTo(scale + 0.2);
      }
      if (event.key === '-') {
        event.preventDefault();
        zoomTo(scale - 0.2);
      }
      if (event.key === '0') {
        event.preventDefault();
        resetView();
      }
      if (event.key === 'ArrowLeft' && scale > 1) {
        event.preventDefault();
        translateX += 36;
        paint();
      }
      if (event.key === 'ArrowRight' && scale > 1) {
        event.preventDefault();
        translateX -= 36;
        paint();
      }
      if (event.key === 'ArrowUp' && scale > 1) {
        event.preventDefault();
        translateY += 36;
        paint();
      }
      if (event.key === 'ArrowDown' && scale > 1) {
        event.preventDefault();
        translateY -= 36;
        paint();
      }

      if (event.key === 'Tab') {
        const controls = focusables();
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (!overlay.hidden) {
        paint();
      }
    });
  };

  initImageLightbox();

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

(function () {
  'use strict';

  var WHATSAPP = '237651276027';
  var EMAIL = 'info@starlandhotel.com';
  /* The hotel's booking engine. It reads checkin, checkout (YYYY-MM-DD), adults and children from the URL. */
  var BOOKING_SEARCH = 'https://letsbook.me/booking/starlandhotel';

  /* French copy. English lives in index.html; keys match its data-i18n attributes. */
  var fr = {
    'skip': 'Aller au contenu',
    'brand.label': 'Star Land Hotel, retour en haut de page',
    'nav.label': 'Navigation principale',
    'nav.rooms': 'Chambres &amp; Suites',
    'nav.dining': 'Restauration',
    'nav.events': 'Réunions &amp; Événements',
    'nav.facilities': 'Bien-être',
    'nav.location': 'Accès',
    'nav.menu': 'Menu',
    'lang.label': 'Langue',
    'cta.book': 'Réserver une chambre',
    'cta.bookNow': 'Réserver',
    'cta.availability': 'Voir les disponibilités',

    'hero.eyebrow': 'Un hôtel 4 étoiles à Bonapriso',
    'hero.title': 'Séjournez avec élégance au cœur de Bonapriso, à Douala.',
    'hero.lede': 'Chambres et suites élégantes, deux restaurants, un Sky Bar sur le toit et une piscine extérieure, pour vos séjours d’affaires comme de loisirs.',
    'hero.explore': 'Découvrir l’hôtel',

    'book.label': 'Vérifier la disponibilité des chambres',
    'book.checkin': 'Arrivée',
    'book.checkout': 'Départ',
    'book.guests': 'Voyageurs',
    'book.adults': 'Adultes',
    'book.children': 'Enfants',
    'book.search': 'Vérifier la disponibilité',

    'welcome.eyebrow': 'Bienvenue au Star Land Hotel',
    'welcome.title': 'Une adresse 4 étoiles à Bonapriso, Douala.',
    'welcome.link': 'Voir les services',
    'welcome.alt': 'Une famille arrive dans le hall pendant qu’un bagagiste apporte ses valises',
    'hotel.body': 'Pour vos moments en famille, vos colloques et séminaires, vos séjours ou vos événements, publics ou privés, notre équipe vous réserve son accueil, son expertise et un service à la hauteur de vos attentes.',
    'facts.checkin': 'Arrivée',
    'facts.checkinValue': 'À partir de 13 h',
    'facts.checkout': 'Départ',
    'facts.checkoutValue': 'Avant 12 h',
    'facts.reception': 'Réception',

    'rooms.eyebrow': 'Chambres &amp; suites',
    'rooms.title': 'Des espaces élégants pour un séjour mémorable',
    'rooms.view': 'Voir la chambre',
    'rooms.exec.name': 'Chambre Executive',
    'rooms.exec.body': 'Notre chambre classique, avec un lit king size et une salle de bain moderne. Au huitième étage, la version Premium offre une meilleure vue et une machine à expresso.',
    'rooms.junior.name': 'Suite Junior',
    'rooms.junior.body': 'Une suite de 40&nbsp;m² avec lit king size et coin salon, aménagée pour les personnes à mobilité réduite.',
    'rooms.deluxe.name': 'Chambre Deluxe',
    'rooms.deluxe.body': 'Une chambre plus spacieuse, avec lit king size et salle de bain. Une version est aménagée pour les personnes à mobilité réduite, avec davantage d’espace pour circuler.',
    'rooms.director.name': 'Suite Director',
    'rooms.director.body': 'Une chambre avec lit king size et sa salle de bain, un séjour séparé avec télévision et des toilettes pour les visiteurs.',
    'rooms.master.name': 'Suite Master',
    'rooms.master.body': 'La plus grande suite de l’hôtel : deux chambres reliées par une porte communicante, chacune avec lit king size et salle de bain, un grand séjour et des toilettes pour les visiteurs.',
    'spec.king': 'Lit king size',
    'spec.bath': 'Salle de bain privée',
    'spec.premium': 'Version Premium au 8e étage',
    'spec.premiumShort': 'Premium au 8e étage',
    'spec.sitting': 'Coin salon',
    'spec.mobility': 'Équipements pour mobilité réduite',
    'spec.accessible': 'Version accessible disponible',
    'spec.accessShort': 'Version accessible',
    'spec.living': 'Séjour séparé',
    'spec.visitor': 'Toilettes visiteurs',
    'spec.twoKing': 'Deux lits king size',
    'spec.twoBed': 'Deux chambres',
    'spec.twoBath': 'Deux salles de bain',
    'spec.livingLarge': 'Grand séjour',
    'sheet.close': 'Fermer',

    'dining.eyebrow': 'Restaurants &amp; bar',
    'dining.title': 'Du petit déjeuner au Sa’a aux cocktails sur le toit',
    'dining.sky.level': 'Sur le toit',
    'dining.sky.body': 'Une terrasse à ciel ouvert au-dessus de Bonapriso, avec bar, café et fauteuils lounge. À la nuit tombée, le toit s’illumine.',
    'dining.pepeh.level': 'Premier étage',
    'dining.pepeh.body': 'Repas à la carte et large choix de boissons, avec ou sans alcool.',
    'dining.open': 'Ouvert',
    'dining.pepeh.hours': 'De 10 h à 23 h',
    'dining.seats': 'Capacité',
    'dining.pepeh.seats': 'Jusqu’à 100 personnes',
    'dining.saa.level': 'Rez-de-chaussée',
    'dining.breakfast': 'Petit déjeuner',
    'dining.saa.breakfast': 'De 6 h 30 à 10 h 30',
    'dining.lunch': 'Déjeuner',
    'dining.saa.lunch': 'De 12 h à 15 h 30',
    'dining.saa.seats': 'Jusqu’à 150 personnes',
    'dining.reserve': 'Réserver une table',
    'dining.call': 'Appeler la réception',
    'dining.card.saa': 'Petit déjeuner et déjeuner au rez-de-chaussée',
    'dining.card.skyTitle': 'Sky Bar &amp; terrasse',
    'dining.card.sky': 'Un verre au-dessus des toits de Bonapriso',
    'dining.alt.terrace': 'La terrasse du Sky Bar avec vue sur Bonapriso',
    'dining.alt.night': 'Le Sky Bar illuminé à la nuit tombée',
    'dining.alt.saa': 'La salle du restaurant Le Sa’a',

    'events.eyebrow': 'Réunions &amp; événements',
    'events.title': 'Le cadre idéal pour vos rendez-vous d’affaires et vos grandes occasions',
    'events.lede': 'Quatre salles meublées accueillent séminaires, colloques, banquets et réceptions privées, de la salle de réunion de 40 places à la grande salle de 250 personnes.',
    'events.plan': 'Organiser votre événement',
    'events.alt': 'Une salle dressée en tables rondes pour un banquet',
    'ev.f1': 'Quatre salles, de 40 à 250 personnes',
    'ev.f2': 'Vidéoprojecteurs et écrans',
    'ev.f3': 'Sonorisation dans chaque salle',
    'ev.f4': 'Accès internet',
    'ev.f5': 'Blocs-notes, stylos et eau minérale',
    'events.hallsTitle': 'Choisissez votre salle',
    'events.upto': 'Jusqu’à',
    'events.guests': 'personnes',
    'events.view': 'Voir la salle',
    'events.ask': 'Demander cette salle',
    'events.kola.alt': 'Salle Kola',
    'events.kola.title': 'Kola, jusqu’à 40 personnes',
    'events.kola.body': 'Une salle de réunion meublée pour les ateliers, les formations et les conseils d’administration.',
    'events.bebey.alt': 'Auditorium Francis Bebey',
    'events.bebey.title': 'Francis Bebey, jusqu’à 75 personnes',
    'events.bebey.body': 'Un auditorium de 84&nbsp;m² aux sièges rabattables avec tablettes, qui porte le nom du musicien et écrivain né à Douala.',
    'events.molyko.alt': 'Salle Molyko',
    'events.molyko.title': 'Molyko, jusqu’à 150 personnes',
    'events.molyko.body': 'Une salle meublée, disposée en rangées pour une conférence ou en tables rondes pour un banquet.',
    'events.tamtam.alt': 'Salle Tam-Tam',
    'events.tamtam.title': 'Tam-Tam, jusqu’à 250 personnes',
    'events.tamtam.body': 'La plus grande salle de l’hôtel, pour les conférences et les grandes réceptions.',
    'eq.projector': 'Vidéoprojecteur',
    'eq.projectorScreen': 'Vidéoprojecteur et écran',
    'eq.projector3': '3 vidéoprojecteurs et 3 écrans',
    'eq.giant': 'Écran géant',
    'eq.seats': 'Sièges rabattables avec tablettes',
    'eq.flip1': '1 paperboard avec marqueurs',
    'eq.flip2': '2 paperboards avec marqueurs',
    'eq.flip5': '5 paperboards avec marqueurs',
    'eq.sound': 'Sonorisation',
    'eq.mics': 'Microphones',
    'eq.internet': 'Internet',
    'eq.pads': 'Blocs-notes et stylos',
    'eq.water': 'Eau minérale',

    'form.title': 'Demander une salle',
    'form.intro': 'Décrivez votre projet : notre équipe événementielle vous répondra sur les disponibilités.',
    'form.orCall': 'Ou appelez le',
    'form.hall': 'Salle',
    'form.hallAny': 'Pas encore décidé',
    'form.hallKola': 'Kola (40 personnes)',
    'form.hallBebey': 'Francis Bebey (75 personnes)',
    'form.hallMolyko': 'Molyko (150 personnes)',
    'form.hallTamtam': 'Tam-Tam (250 personnes)',
    'form.guests': 'Nombre de personnes',
    'form.start': 'Date de début',
    'form.end': 'Date de fin',
    'form.name': 'Votre nom',
    'form.contact': 'Téléphone ou e-mail',
    'form.details': 'Description de l’événement',
    'form.sendWhatsapp': 'Envoyer par WhatsApp',
    'form.sendEmail': 'Envoyer par e-mail',
    'form.note': 'L’envoi ouvre WhatsApp ou votre messagerie avec la demande déjà rédigée. Rien n’est envoyé tant que vous ne l’avez pas confirmé.',

    'fac.eyebrow': 'Bien-être &amp; détente',
    'fac.title': 'Détendez-vous et ressourcez-vous',
    'fac.pool.title': 'Piscine',
    'fac.pool.body': 'Une piscine extérieure dans la cour, bordée de transats et de parasols.',
    'fac.bar.title': 'Bar de la piscine',
    'fac.bar.body': 'Cocktails et boissons fraîches à quelques pas de l’eau.',
    'fac.lounge.title': 'Terrasse sur le toit',
    'fac.lounge.body': 'Un salon à ciel ouvert avec vue sur Bonapriso.',
    'fac.also': 'Également à l’hôtel',
    'am.fitness': 'Salle de fitness',
    'am.roomservice': 'Service en chambre',
    'am.shuttle': 'Navette aéroport',
    'am.concierge': 'Conciergerie',
    'am.wifi': 'Wi-Fi gratuit',
    'am.parking': 'Parking gratuit',
    'am.laundry': 'Blanchisserie',
    'am.business': 'Centre d’affaires',
    'am.access': 'Chambres accessibles',
    'pool.alt.night': 'La piscine de l’hôtel et son bar illuminés de nuit',
    'pool.alt.day': 'La piscine en journée, avec transats et parasols',
    'pool.alt.drinks': 'Cocktails au bord de la piscine',

    'rev.eyebrow': 'L’avis de nos clients',
    'rev.label': 'Très bien',
    'rev.google': 'D’après 1 565 avis sur Google',
    'rev.trip': '52 avis sur Trip.com',
    'rev.ta': '197 avis sur Tripadvisor',
    'rev.note': 'Notes affichées sur Google Maps en octobre 2026.',
    'rev.link': 'Lire les avis',

    'loc.eyebrow': 'Notre emplacement',
    'location.title': 'Au cœur de Bonapriso, à Douala',
    'location.body': 'Le Star Land Hotel se trouve rue Dominique Savio, à Bonapriso, à proximité des quartiers d’affaires de Bonanjo et d’Akwa et à courte distance en voiture de l’aéroport international de Douala.',
    'location.city': 'Douala, Cameroun',
    'loc.shuttle': 'Sur demande auprès de la réception',
    'location.openMaps': 'Ouvrir dans Google Maps',
    'location.whatsapp': 'Écrire sur WhatsApp',
    'location.mapTitle': 'Carte situant le Star Land Hotel Bonapriso',

    'footer.starsLabel': 'Hôtel 4 étoiles',
    'footer.contact': 'Nous contacter',
    'footer.links': 'Liens rapides',
    'footer.follow': 'Nous suivre',
    'footer.book': 'Réserver votre séjour',
    'footer.rights': 'Tous droits réservés.',
    'footer.yaounde': 'Star Land vous accueille aussi à Yaoundé, avenue de l’Ambassade d’Espagne : +237 673 44 49 49.',
    'chat.label': 'Écrire à l’hôtel sur WhatsApp'
  };

  /* Strings built in script, in both languages. */
  var ui = {
    en: {
      title: 'Star Land Hotel Bonapriso, Douala | Rooms, dining and events',
      photo: function (n, total) { return 'Photo ' + n + ' of ' + total; },
      adults: function (n) { return n + (n === 1 ? ' adult' : ' adults'); },
      children: function (n) { return n + (n === 1 ? ' child' : ' children'); },
      errStay: 'Choose a check-out date after your check-in date.',
      errName: 'Enter your name.',
      errContact: 'Enter a phone number or email address so we can reply.',
      errDates: 'The end date is before the start date.',
      readyWhatsapp: 'Your enquiry is ready in WhatsApp. Press send there to deliver it.',
      readyEmail: 'Your enquiry is ready in your email app. Press send there to deliver it.',
      msgTitle: 'Event enquiry, Star Land Hotel Bonapriso',
      msgHall: 'Hall',
      msgGuests: 'Guests',
      msgDates: 'Dates',
      msgTo: 'to',
      msgName: 'Name',
      msgContact: 'Contact',
      msgDetails: 'Details',
      msgUndecided: 'Not decided yet'
    },
    fr: {
      title: 'Star Land Hotel Bonapriso, Douala | Chambres, restaurants et événements',
      photo: function (n, total) { return 'Photo ' + n + ' sur ' + total; },
      adults: function (n) { return n + (n === 1 ? ' adulte' : ' adultes'); },
      children: function (n) { return n + (n > 1 ? ' enfants' : ' enfant'); },
      errStay: 'Choisissez une date de départ postérieure à la date d’arrivée.',
      errName: 'Indiquez votre nom.',
      errContact: 'Indiquez un numéro de téléphone ou une adresse e-mail pour que nous puissions vous répondre.',
      errDates: 'La date de fin précède la date de début.',
      readyWhatsapp: 'Votre demande est prête dans WhatsApp. Appuyez sur Envoyer pour la transmettre.',
      readyEmail: 'Votre demande est prête dans votre messagerie. Appuyez sur Envoyer pour la transmettre.',
      msgTitle: 'Demande d’événement, Star Land Hotel Bonapriso',
      msgHall: 'Salle',
      msgGuests: 'Personnes',
      msgDates: 'Dates',
      msgTo: 'au',
      msgName: 'Nom',
      msgContact: 'Contact',
      msgDetails: 'Précisions',
      msgUndecided: 'Pas encore décidé'
    }
  };

  var lang = 'en';
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function isoDate(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function parseIso(value) {
    var p = value.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function addDays(value, n) {
    var d = parseIso(value);
    d.setDate(d.getDate() + n);
    return isoDate(d);
  }
  var today = isoDate(new Date());

  /* Language */

  var textNodes = $$('[data-i18n]').map(function (el) {
    return { el: el, key: el.getAttribute('data-i18n'), en: el.innerHTML };
  });
  var attrNodes = [];
  $$('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
      var parts = pair.split(':');
      attrNodes.push({ el: el, attr: parts[0].trim(), key: parts[1].trim(), en: el.getAttribute(parts[0].trim()) });
    });
  });

  function plain(html) {
    return html.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
  }

  function setLang(next, remember) {
    lang = next === 'fr' ? 'fr' : 'en';
    document.documentElement.lang = lang;
    document.title = ui[lang].title;
    textNodes.forEach(function (n) {
      n.el.innerHTML = lang === 'fr' && fr[n.key] != null ? fr[n.key] : n.en;
    });
    attrNodes.forEach(function (n) {
      n.el.setAttribute(n.attr, lang === 'fr' && fr[n.key] != null ? plain(fr[n.key]) : n.en);
    });
    $$('.lang__btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
    $$('[data-gallery]').forEach(labelGallery);
    labelGuests();
    clearMessages();
    if (remember) {
      try { localStorage.setItem('starland-lang', lang); } catch (e) { /* private mode */ }
    }
  }

  $$('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang'), true); });
  });

  /* Mobile menu */

  var nav = $('#site-nav');
  var toggle = $('.menu-toggle');
  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  $$('.site-nav__list a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); }
  });

  /* Current section in the nav */

  if ('IntersectionObserver' in window) {
    var links = {};
    $$('.site-nav__list a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(links).forEach(function (id) {
          if (id === entry.target.id) links[id].setAttribute('aria-current', 'true');
          else links[id].removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* Availability bar: hands the dates and guests to the booking engine */

  var bookbar = $('#bookbar');
  var stay = { checkin: $('#b-in'), checkout: $('#b-out'), adults: $('#b-adults'), children: $('#b-children'), error: $('#b-error') };

  stay.checkin.min = today;
  stay.checkin.value = today;
  stay.checkout.min = addDays(today, 1);
  stay.checkout.value = addDays(today, 1);

  stay.checkin.addEventListener('change', function () {
    if (!stay.checkin.value) return;
    var earliest = addDays(stay.checkin.value, 1);
    stay.checkout.min = earliest;
    if (!stay.checkout.value || stay.checkout.value < earliest) stay.checkout.value = earliest;
    showStayError('');
  });
  stay.checkout.addEventListener('change', function () { showStayError(''); });

  function showStayError(message) {
    stay.error.textContent = message;
    stay.error.hidden = !message;
    if (message) stay.checkout.setAttribute('aria-invalid', 'true');
    else stay.checkout.removeAttribute('aria-invalid');
  }

  function labelGuests() {
    $$('option', stay.adults).forEach(function (o) { o.textContent = ui[lang].adults(+o.value); });
    $$('option', stay.children).forEach(function (o) { o.textContent = ui[lang].children(+o.value); });
  }

  bookbar.addEventListener('submit', function (e) {
    e.preventDefault();
    var params = [];
    if (stay.checkin.value && stay.checkout.value) {
      if (stay.checkout.value <= stay.checkin.value) {
        showStayError(ui[lang].errStay);
        stay.checkout.focus();
        return;
      }
      params.push('checkin=' + stay.checkin.value, 'checkout=' + stay.checkout.value);
    }
    params.push('adults=' + stay.adults.value, 'children=' + stay.children.value);
    showStayError('');
    window.open(BOOKING_SEARCH + '?' + params.join('&'), '_blank', 'noopener');
  });

  /* Detail sheet for rooms and halls */

  var sheet = $('#sheet');
  var opener = null;

  function openSheet(id, from) {
    $$('.panel', sheet).forEach(function (panel) { panel.hidden = panel.id !== id; });
    sheet.setAttribute('aria-labelledby', $('#' + id + ' .panel__title').id);
    opener = from;
    if (typeof sheet.showModal === 'function') sheet.showModal();
    else sheet.setAttribute('open', '');
    sheet.scrollTop = 0;
  }
  function closeSheet() {
    if (typeof sheet.close === 'function') sheet.close();
    else sheet.removeAttribute('open');
  }

  $$('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () { openSheet(btn.getAttribute('data-open'), btn); });
  });
  $('.sheet__close').addEventListener('click', closeSheet);
  sheet.addEventListener('click', function (e) { if (e.target === sheet) closeSheet(); });
  sheet.addEventListener('close', function () {
    if (opener) opener.focus({ preventScroll: true });
    opener = null;
  });

  /* Photo galleries inside the sheet */

  function labelGallery(gallery) {
    var thumbs = $$('.gallery__thumb', gallery);
    thumbs.forEach(function (thumb, i) {
      thumb.setAttribute('aria-label', ui[lang].photo(i + 1, thumbs.length));
    });
  }

  $$('[data-gallery]').forEach(function (gallery) {
    var main = $('.gallery__main', gallery);
    var thumbs = $$('.gallery__thumb', gallery);
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        if (thumb.getAttribute('aria-pressed') === 'true') return;
        thumbs.forEach(function (t) { t.setAttribute('aria-pressed', String(t === thumb)); });
        main.classList.remove('is-swapping');
        main.src = thumb.getAttribute('data-full');
        void main.offsetWidth;
        main.classList.add('is-swapping');
      });
    });
  });

  /* Event enquiry */

  var form = $('#enquiry-form');
  var status = $('#form-status');
  var fields = {
    hall: $('#f-hall'), guests: $('#f-guests'), start: $('#f-start'), end: $('#f-end'),
    name: $('#f-name'), contact: $('#f-contact'), details: $('#f-details')
  };

  fields.start.min = today;
  fields.end.min = today;
  fields.start.addEventListener('change', function () { fields.end.min = fields.start.value || today; });

  function setError(input, message) {
    var box = document.getElementById(input.id + '-error');
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      box.textContent = message;
      box.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      box.textContent = '';
      box.hidden = true;
    }
  }

  function clearMessages() {
    [fields.name, fields.contact, fields.end].forEach(function (input) { setError(input, ''); });
    status.textContent = '';
    showStayError('');
  }

  function formatDate(value) {
    if (!value) return '';
    return parseIso(value).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function buildMessage() {
    var t = ui[lang];
    var lines = [t.msgTitle, ''];
    lines.push(t.msgHall + ': ' + (fields.hall.value || t.msgUndecided));
    if (fields.guests.value) lines.push(t.msgGuests + ': ' + fields.guests.value);
    if (fields.start.value) {
      var dates = formatDate(fields.start.value);
      if (fields.end.value && fields.end.value !== fields.start.value) dates += ' ' + t.msgTo + ' ' + formatDate(fields.end.value);
      lines.push(t.msgDates + ': ' + dates);
    }
    lines.push(t.msgName + ': ' + fields.name.value.trim());
    lines.push(t.msgContact + ': ' + fields.contact.value.trim());
    if (fields.details.value.trim()) lines.push('', t.msgDetails + ': ' + fields.details.value.trim());
    return lines.join('\n');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var t = ui[lang];
    var channel = e.submitter && e.submitter.getAttribute('data-channel') === 'email' ? 'email' : 'whatsapp';
    status.textContent = '';

    setError(fields.name, fields.name.value.trim() ? '' : t.errName);
    setError(fields.contact, fields.contact.value.trim() ? '' : t.errContact);
    var badDates = fields.start.value && fields.end.value && fields.end.value < fields.start.value;
    setError(fields.end, badDates ? t.errDates : '');

    var firstInvalid = $('[aria-invalid="true"]', form);
    if (firstInvalid) { firstInvalid.focus(); return; }

    var message = buildMessage();
    if (channel === 'email') {
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(t.msgTitle) + '&body=' + encodeURIComponent(message);
      status.textContent = t.readyEmail;
    } else {
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
      status.textContent = t.readyWhatsapp;
    }
  });

  [fields.name, fields.contact, fields.end].forEach(function (input) {
    input.addEventListener('input', function () { if (input.hasAttribute('aria-invalid')) setError(input, ''); });
  });

  /* "Ask about this hall" closes the sheet and carries the hall into the form */
  $$('[data-pick-hall]').forEach(function (link) {
    link.addEventListener('click', function () {
      fields.hall.value = link.getAttribute('data-pick-hall');
      opener = null;
      closeSheet();
    });
  });

  /* Start-up */

  $('#year').textContent = String(new Date().getFullYear());

  var stored = null;
  try { stored = localStorage.getItem('starland-lang'); } catch (e) { /* private mode */ }
  var browserFrench = (navigator.language || '').toLowerCase().indexOf('fr') === 0;
  setLang(stored || (browserFrench ? 'fr' : 'en'), false);
})();

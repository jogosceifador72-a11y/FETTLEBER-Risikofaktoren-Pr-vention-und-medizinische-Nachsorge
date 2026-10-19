export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  badge?: string;
  color: string;
}

export const PRODUCT_DATA = {
  title: 'FETTLEBER',
  subtitle: 'Risikofaktoren, Prävention und medizinische Nachsorge',
  tagline: 'Verstehen Sie Ihre Leberwerte, erkennen Sie Risiken früh und unterstützen Sie Ihre Lebergesundheit Schritt für Schritt.',
  price: '27,81',
  currency: '€',
  originalPrice: '49,90 €',
  discountPercentage: '44% Rabatt',
  format: 'PDF (lesbar auf Smartphone, Tablet oder Computer)',
  pages: '30 Seiten',
  delivery: 'Per E-Mail direkt nach der Zahlungsbestätigung',
  checkoutUrl: 'https://pay.hotmart.com/O108024260W',
  
  description: {
    whatIsIt: 'Der Ratgeber „Fettleber" ist ein praktischer Leitfaden im PDF-Format. Auf 30 Seiten zeigt er Ihnen, wie eine Fettleber entsteht, woran Sie sie erkennen und was Sie im Alltag dagegen tun können. Ohne lange Theorie bietet er klare Erklärungen, Checklisten und konkrete Tipps zu Ernährung, Bewegung und Nachsorge, einfach und direkt in Ihrem eigenen Tempo.',
    endResult: 'Sie wissen nach der Lektüre genau, wie Sie Ihre Leber durch Kontrollen, Ernährung und Bewegung unterstützen können.'
  },

  socialLinks: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
      icon: 'instagram',
      color: 'hover:bg-pink-600 hover:text-white',
    },
    {
      name: 'Facebook Profil',
      url: 'https://www.facebook.com/share/1c8J76URqe/',
      icon: 'facebook',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      name: 'Facebook Seite',
      url: 'https://www.facebook.com/share/1DzZyfFWRL/',
      icon: 'facebook-page',
      badge: 'Offiziell',
      color: 'hover:bg-blue-700 hover:text-white',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@karinzeit',
      icon: 'tiktok',
      color: 'hover:bg-neutral-900 hover:text-white',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
      icon: 'youtube',
      color: 'hover:bg-red-600 hover:text-white',
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@karinzeit',
      icon: 'threads',
      color: 'hover:bg-stone-900 hover:text-white',
    },
    {
      name: 'Kwai',
      url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
      icon: 'kwai',
      color: 'hover:bg-orange-500 hover:text-white',
    },
  ],

  solves: [
    {
      id: 'symptoms',
      title: 'Unklare Symptome',
      highlight: 'Stumme Warnzeichen deuten',
      description: 'Beseitigt die quälende Unsicherheit bei stummen Warnzeichen wie diffuser Müdigkeit, Schweregefühl oder Leistungstiefs. Zeigt genau, worauf Sie achten sollten und wann ein gezielter Arztbesuch ratsam ist.',
      metric: 'Frühzeitige Einordnung vor Komplikationen'
    },
    {
      id: 'labs',
      title: 'Verwirrende Laborwerte',
      highlight: 'ALT, AST & GGT entschlüsseln',
      description: 'Beendet das Rätselraten um Ihre Blutwerte. Verständliche Erklärungen für Transaminasen, Gamma-GT und relevante Quotienten sowie ein klarer Kontrollplan für das nächste Arztgespräch auf Augenhöhe.',
      metric: 'Laborwerte eigenständig nachvollziehen'
    },
    {
      id: 'nutrition',
      title: 'Falsche Ernährung',
      highlight: 'Fructose- & Zucker-Fallen meiden',
      description: 'Bewahrt Sie vor Zeitverlust und Fehlern durch versteckte Zucker, Sirupe und vermeintlich „gesunde" Fertigprodukte dank praxiserprobter Do\'s and Don\'ts nach dem mediterranen Prinzip.',
      metric: 'Alltagstaugliche Ernährungsstrategie'
    },
    {
      id: 'roadmap',
      title: 'Konkreter Handlungsplan',
      highlight: 'Das messbare Endergebnis',
      description: 'Keine abstrakten Diät-Vorschriften: Sie wissen nach der Lektüre exakt, mit welchen konkreten Schritten bei Kontrollen, Lebensmitteln und Bewegung Sie Ihre Leber entlasten und regenerieren.',
      metric: 'Schritt-für-Schritt Fahrplan'
    }
  ],

  targetAudience: {
    forYou: [
      'Sie Ihre Lebergesundheit nachhaltig und ohne Komplikationen verbessern möchten.',
      'Sie Betroffene(r), Risikopatient(in) oder Angehörige(r) sind und klare, vertrauensvolle Orientierung suchen.',
      'Sie eine alltagstaugliche, praxisnahe Methode wollen, die Sie sofort ohne Vorwissen anwenden können.',
      'Sie beim nächsten Arztbesuch genau verstehen wollen, was Ihre Laborwerte bedeuten.'
    ],
    notForYou: [
      'Sie unrealistische Wunderergebnisse über Nacht erwarten, ohne selbst kleine Anpassungen im Alltag umzusetzen.',
      'Sie trockene, 400-seitige akademische Fachliteratur einem direkten, pragmatischen Leitfaden vorziehen.',
      'Sie medizinische Diagnosen und ärztliche Behandlungen komplett durch Selbstmedikation ersetzen möchten.'
    ]
  },

  modules: [
    {
      number: '01',
      title: 'Grundlagen & Ursachen verstehen',
      focus: 'Wie eine Fettleber entsteht und warum sie so oft unerkannt bleibt.',
      details: 'Physiologie der Leber, Entstehungsmechanismen (NAFLD/MASLD), Ursachen abseits von Alkohol, Warnsignale des Körpers.'
    },
    {
      number: '02',
      title: 'Das Laborwerte-Handbuch: ALT, AST, GGT',
      focus: 'Blutwerte verstehen und Arztgespräche zielgerichtet führen.',
      details: 'Was Transaminasen wirklich aussagen, Grenzwerte, De-Ritis-Quotient, welche zusätzlichen Marker (z. B. Triglyceride, Ferritin) wichtig sind.'
    },
    {
      number: '03',
      title: 'Mediterrane Leberküche & Fructose-Fallen',
      focus: 'Ernährung als stärkster Hebel zur Entfettung.',
      details: 'Do\'s and Don\'ts, gefährliche Zuckerfallen in Getränken und „Light"-Produkten, gesunde Fette (Olivenöl, Omega-3), Bitterstoffe und Ballaststoffe.'
    },
    {
      number: '04',
      title: 'Bewegung & Stoffwechsel-Aktivierung',
      focus: 'Gezielte Fettverbrennung in der Leber anregen.',
      details: 'Wie kurze Spaziergänge nach Mahlzeiten, moderates Krafttraining und Intervallpausen den Leberstoffwechsel nachweislich ankurbeln.'
    },
    {
      number: '05',
      title: 'Nachsorge, Kontrollplan & Checklisten',
      focus: 'Langfristige Absicherung und strukturierte Dokumentation.',
      details: 'Vorgefertigte Checklisten für den Alltag, Nachsorge-Intervalle, Vorlage für den nächsten Kontrolltermin bei Ihrem Hausarzt.'
    }
  ],

  labValues: [
    {
      code: 'ALT (GPT)',
      name: 'Alanin-Aminotransferase',
      role: 'Der leberspezifischste Enzymmarker',
      normal: 'Männer < 50 U/l · Frauen < 35 U/l',
      explanation: 'Befindet sich fast ausschließlich im Lebergewebe. Steigt bereits bei leichten Zellschäden oder Fettablagerungen in den Hepatozyten messbar an.'
    },
    {
      code: 'AST (GOT)',
      name: 'Aspartat-Aminotransferase',
      role: 'Zellulärer Tiefenmarker',
      normal: 'Männer < 50 U/l · Frauen < 35 U/l',
      explanation: 'Liegt zu 80% in den Mitochondrien der Leber- und Muskelzellen. Ein starker Anstieg im Verhältnis zu ALT deutet auf tiefergehende Belastung hin.'
    },
    {
      code: 'GGT (Gamma-GT)',
      name: 'Gamma-Glutamyltransferase',
      role: 'Gallenwegs- & Entgiftungsmarker',
      normal: 'Männer < 60 U/l · Frauen < 40 U/l',
      explanation: 'Sehr empfindlicher Indikator für Galleabfluss, toxische Belastung, Medikamenteneinflüsse und Fetteinlagerungen in den Gallenwegen.'
    },
    {
      code: 'AST/ALT Quotient',
      name: 'De-Ritis-Quotient',
      role: 'Verhältnis-Indikator für Schweregrad',
      normal: 'Wert < 1 (bei unkomplizierter Fettleber meist < 0,8)',
      explanation: 'Hilft Ihrem Arzt zu beurteilen, ob ein milder Reizzustand oder eine fortgeschrittene Gewebeschädigung vorliegt.'
    }
  ],

  faqs: [
    {
      question: 'Wie und wann erhalte ich das E-Book nach der Bezahlung?',
      answer: 'Direkt nach erfolgreicher Zahlungsbestätigung über Hotmart erhalten Sie automatisch eine E-Mail mit Ihrem persönlichen Download-Link. Sie können das E-Book sofort auf Smartphone, Tablet oder Computer als PDF öffnen und speichern.'
    },
    {
      question: 'Ersetzt der Ratgeber den Besuch bei meiner Ärztin oder meinem Arzt?',
      answer: 'Nein. Dieser Ratgeber dient der fundierten Information, Aufklärung und Orientierung im Alltag und ersetzt ausdrücklich keine ärztliche Diagnose, Beratung oder Therapie. Er befähigt Sie jedoch, Befunde besser zu verstehen und informierte Fragen beim nächsten Termin zu stellen.'
    },
    {
      question: 'Warum umfasst der Ratgeber genau 30 Seiten?',
      answer: 'Der Leitfaden wurde bewusst kompakt und handlungsorientiert gestaltet: Ohne langatmige medizintheoretische Exkurse vermittelt er auf 30 Seiten genau das, was Sie für die Praxis im Alltag wissen müssen – mit Checklisten, Tabellen und klaren Do\'s and Don\'ts.'
    },
    {
      question: 'Auf welchen Geräten kann ich das PDF lesen?',
      answer: 'Auf allen gängigen Endgeräten: Apple iPhone, iPad, Android-Smartphones und -Tablets, Mac, Windows-PC sowie allen PDF-fähigen E-Readern. Das Layout ist für angenehmes Lesen optimiert.'
    },
    {
      question: 'Welche Zahlungsmöglichkeiten stehen über Hotmart zur Verfügung?',
      answer: 'Hotmart ist eine der weltweit führenden, TÜV- und PCI-DSS-zertifizierten Plattformen für digitale Produkte. Sie können sicher per Kreditkarte, PayPal, SEPA-Lastschrift oder Sofortüberweisung bezahlen (je nach Land).'
    },
    {
      question: 'Gibt es ein wiederkehrendes Abonnement oder versteckte Kosten?',
      answer: 'Nein, keinesfalls! Es handelt sich um eine einmalige Zahlung von 27,81 €. Es entstehen keine Folgekosten und kein Abonnement.'
    }
  ],

  disclaimer: 'Wichtiger medizinischer Hinweis: Dieser Ratgeber dient ausschließlich Informations-, Bildungs- und Präventionszwecken und stellt keine medizinische Beratung oder Heilversprechen dar. Er ersetzt keinesfalls die professionelle Untersuchung, Diagnose oder Behandlung durch einen approbierten Arzt oder Facharzt. Bei gesundheitlichen Beschwerden oder abweichenden Laborwerten konsultieren Sie stets Ihren behandelnden Arzt.'
};

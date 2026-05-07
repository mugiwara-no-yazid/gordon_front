// ─────────────────────────────────────────────────────────────────────────────
// mockData.ts — Source unique de données pour tous les services Gordon Services
//
// Pour ajouter un nouveau service :
//   1. Ajouter une entrée dans SERVICES_DATA
//   2. Ajouter l'icône SVG dans ServicesPage.tsx et ServiceDetailPage.tsx
//   C'est tout — toutes les pages se mettent à jour automatiquement.
// ─────────────────────────────────────────────────────────────────────────────

export interface Prestation {
  titre: string;
  desc: string;
}

export interface ServiceData {
  slug: string;
  numero: string;
  titre: string;
  tagline: string;
  color: string;
  descriptionCourte: string;
  description: string;
  accroche: string;
  pourquoi: string;
  logo: string;
  image: string;
  prestations: Prestation[];
  avantages: string[];
  clients: string[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "immobilier",
    numero: "01",
    titre: "Gestion Immobilière",
    tagline: "Votre patrimoine, notre expertise",
    color: "#1B4F6B",
    logo: "/immo.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Gestion locative, vente & acquisition, gestion de patrimoine, maintenance et suivi administratif de vos biens.",
    description: "Gordon Services assure la gestion complète de votre patrimoine immobilier en République du Congo. De la gestion locative quotidienne à la valorisation de vos actifs, nous sommes votre interlocuteur unique pour tous vos biens.",
    accroche: "Gérer un bien immobilier en République du Congo exige une présence locale, une connaissance du marché et des processus rigoureux. Gordon Services cumule les trois.",
    pourquoi: "Nous intervenons sur l'ensemble du cycle immobilier avec des équipes dédiées, des reportings clairs et une gestion administrative transparente. Nos clients — groupes industriels, ambassades, ONG — nous confient leur patrimoine parce qu'ils savent que chaque bien sera géré avec le même soin qu'ils y apporteraient eux-mêmes.",
    prestations: [
      { titre: "Gestion locative", desc: "Recherche de locataires, rédaction des baux, encaissement des loyers, gestion des litiges et suivi administratif complet." },
      { titre: "Vente & Acquisition", desc: "Accompagnement dans vos projets d'achat ou de cession : estimation, négociation, due diligence et finalisation." },
      { titre: "Gestion de patrimoine", desc: "Optimisation de votre portefeuille immobilier, conseils en valorisation et stratégie d'investissement local." },
      { titre: "Maintenance & Travaux", desc: "Coordination des interventions techniques, suivi des prestataires, maintenance préventive et curative." },
      { titre: "Suivi administratif", desc: "Gestion des documents, assurances, fiscalité immobilière et conformité réglementaire." },
      { titre: "Gestion de résidences", desc: "Gestion complète de résidences collectives : espaces communs, gardiennage, entretien et gestion des charges." },
    ],
    avantages: ["Équipe locale disponible 6j/7", "Reporting mensuel détaillé", "Réseau de prestataires qualifiés", "Gestion numérisée et traçable", "Expérience avec clients diplomatiques et institutionnels", "Zéro impayé sur nos portefeuilles gérés en 2023"],
    clients: ["Ambassades & Consulats", "Groupes industriels", "ONG internationales", "Expatriés & cadres dirigeants"],
  },
  {
    slug: "vehicules",
    numero: "02",
    titre: "Location de Véhicules",
    tagline: "Flotte premium, service corporate",
    color: "#2E8BB8",
    logo: "/transport.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Flotte premium disponible en courte et longue durée. Chauffeurs professionnels et service corporate sur mesure.",
    description: "Une flotte de véhicules premium disponible en courte et longue durée, avec ou sans chauffeur. Des 4x4 tout-terrain aux berlines de représentation, Gordon Services équipe vos missions avec fiabilité et professionnalisme.",
    accroche: "Sur le terrain en République du Congo, le véhicule n'est pas un confort — c'est une nécessité opérationnelle. Notre flotte est entretenue, assurée et disponible quand vous en avez besoin.",
    pourquoi: "Nous ne louons pas simplement des véhicules. Nous proposons une solution de mobilité complète : véhicules inspectés, chauffeurs vérifiés, assistance en cas de panne et coordination logistique. Nos clients peuvent se concentrer sur leur mission — nous gérons le reste.",
    prestations: [
      { titre: "Location courte durée", desc: "Véhicules disponibles à la journée, à la semaine ou au mois. Livraison sur votre site possible." },
      { titre: "Location longue durée", desc: "Contrats sur plusieurs mois pour vos équipes permanentes. Entretien et assurance inclus." },
      { titre: "Chauffeurs professionnels", desc: "Chauffeurs formés, discrets, connaissant parfaitement les axes et protocoles de sécurité locaux." },
      { titre: "Transferts VIP", desc: "Accueil aéroport, transferts hôtel-bureau, déplacements officiels avec véhicules de standing." },
      { titre: "Service corporate", desc: "Contrats cadre pour entreprises : flotte dédiée, facturation mensuelle, interlocuteur unique." },
      { titre: "Véhicules spéciaux", desc: "4x4 pour zones difficiles, minibus pour groupes, véhicules blindés sur demande." },
    ],
    avantages: ["Flotte récente et régulièrement inspectée", "Chauffeurs bilingues disponibles", "Assurance tous risques incluse", "Assistance 24h/24 en cas de panne", "GPS et suivi en temps réel", "Facturation simplifiée pour entreprises"],
    clients: ["ONU & agences onusiennes", "ONG & humanitaire", "Sociétés pétrolières & minières", "Délégations officielles"],
  },
  {
    slug: "logistique",
    numero: "03",
    titre: "Logistique",
    tagline: "Transport & supply chain maîtrisés",
    color: "#C8A75E",
    logo: "/transport.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Transport, supply chain locale, gestion de projets logistiques et solutions personnalisées pour vos opérations.",
    description: "Gordon Services pilote vos opérations logistiques de bout en bout : transport de marchandises, gestion de la supply chain locale, acheminement en zones difficiles et coordination multi-acteurs.",
    accroche: "La logistique en République du Congo est complexe. Routes dégradées, formalités douanières, zones enclavées — nous connaissons chaque obstacle et avons les solutions pour les contourner.",
    pourquoi: "Notre réseau de transporteurs locaux, nos relations avec les autorités douanières et notre expérience des terrains difficiles font de Gordon Services le partenaire logistique de référence pour les opérations complexes en République du Congo et dans les pays voisins.",
    prestations: [
      { titre: "Transport de marchandises", desc: "Fret local et régional par route, coordination avec transporteurs aériens et maritimes." },
      { titre: "Supply chain locale", desc: "Planification, approvisionnement, gestion des stocks et optimisation des flux." },
      { titre: "Zones difficiles d'accès", desc: "Acheminement vers sites isolés, mines, zones forestières. Expertise des pistes et passages." },
      { titre: "Gestion douanière", desc: "Assistance au dédouanement, relations avec les autorités, gestion des documents d'importation." },
      { titre: "Entreposage", desc: "Solutions de stockage sécurisé, gestion des entrepôts et inventaire digitalisé." },
      { titre: "Logistique humanitaire", desc: "Expertise spécifique pour les missions d'urgence : mobilisation rapide, traçabilité stricte." },
    ],
    avantages: ["Réseau couvrant 5 pays d'Afrique centrale", "Mobilisation en 48h pour urgences", "Traçabilité GPS de chaque livraison", "Expérience humanitaire et industrielle", "Relations établies avec douanes locales", "Rapports de livraison détaillés"],
    clients: ["MSF & ONG humanitaires", "Sociétés minières", "Groupes industriels", "WFP & agences onusiennes"],
  },
  {
    slug: "securite",
    numero: "04",
    titre: "Sécurité",
    tagline: "Protection & sérénité opérationnelle",
    color: "#C40010",
    logo: "/secu.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Sécurité privée, surveillance, agents formés et gestion des risques pour vos sites et événements.",
    description: "Gordon Services déploie des dispositifs de sécurité complets pour vos sites, événements et personnels. Agents formés, protocoles rigoureux et gestion intégrée des risques pour vous garantir une sérénité opérationnelle totale.",
    accroche: "La sécurité n'est pas une option en République du Congo — c'est un prérequis. Nos agents sont formés, agréés et interviennent selon des protocoles alignés aux standards internationaux.",
    pourquoi: "Nous ne proposons pas simplement des agents de gardiennage. Nous concevons des dispositifs de sécurité sur mesure après analyse des risques spécifiques à votre site et à votre secteur. Notre expérience avec les sites industriels, pétroliers et diplomatiques nous place parmi les acteurs les plus fiables du secteur.",
    prestations: [
      { titre: "Sécurité de sites", desc: "Gardiennage de sites industriels, commerciaux, résidentiels. Contrôle d'accès et rondes." },
      { titre: "Agents formés & agréés", desc: "Personnel certifié, formé aux gestes de premiers secours, aux techniques de désescalade et aux protocoles d'urgence." },
      { titre: "Analyse des risques", desc: "Audit de sécurité préalable, cartographie des vulnérabilités, recommandations et plan de sécurité." },
      { titre: "Sécurité événementielle", desc: "Dispositifs temporaires pour conférences, réunions officielles, inaugurations et événements corporate." },
      { titre: "Protection rapprochée", desc: "Escortes et protection de personnalités, dirigeants et délégations officielles." },
      { titre: "Surveillance 24h/24", desc: "Rotation d'équipes pour une couverture continue. Rapports d'incident quotidiens." },
    ],
    avantages: ["Agrément Ministère de l'Intérieur", "Agents formés aux standards internationaux", "Disponibilité 24h/24, 7j/7", "Rapport d'incident systématique", "Expérience secteur pétrolier & diplomatique", "Protocoles alignés aux exigences des grands groupes"],
    clients: ["Groupes pétroliers & énergétiques", "Ambassades & résidences diplomatiques", "Sites miniers", "Organisateurs d'événements officiels"],
  },
  {
    slug: "personnel",
    numero: "05",
    titre: "Mise à Disposition de Personnel",
    tagline: "Les bons profils, au bon moment",
    color: "#1B4F6B",
    logo: "/interim.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Personnel qualifié, gestion RH externalisée, recrutement et formation adaptés à vos besoins opérationnels.",
    description: "Gordon Services vous fournit le personnel qualifié dont vous avez besoin, quand vous en avez besoin. Recrutement sur profil, vetting rigoureux, formation et gestion administrative — tout est pris en charge.",
    accroche: "Trouver du personnel qualifié et fiable en République du Congo est l'un des défis les plus fréquents de nos clients. Nous avons construit un vivier de talents et des processus de recrutement éprouvés pour y répondre.",
    pourquoi: "Notre expertise RH locale combinée aux exigences de nos clients internationaux nous a permis de développer un processus de recrutement et de vetting qui garantit des profils adaptés, vérifiés et opérationnels. Nous gérons également toute l'administration RH pour vous simplifier la vie.",
    prestations: [
      { titre: "Recrutement sur profil", desc: "Définition du besoin, sourcing, entretiens, vérification des références et présentation des candidats." },
      { titre: "Vetting & antécédents", desc: "Vérification des diplômes, antécédents professionnels et judiciaires selon les exigences clients." },
      { titre: "Mise à disposition temporaire", desc: "Personnel disponible pour missions courtes, remplacements ou pics d'activité." },
      { titre: "Gestion RH externalisée", desc: "Administration du personnel, contrats, paie, congés et conformité sociale." },
      { titre: "Formation & montée en compétences", desc: "Programmes de formation sur mesure : sécurité, protocoles spécifiques, langues, soft skills." },
      { titre: "Personnel spécialisé", desc: "Chauffeurs, agents de sécurité, assistants administratifs, techniciens, logisticiens." },
    ],
    avantages: ["Vivier de 500+ profils vérifiés", "Délai de mise à disposition moyen : 5 jours", "Vetting systématique de chaque candidat", "Gestion administrative complète incluse", "Formation aux protocoles clients possible", "Taux de satisfaction client 92% à 6 mois"],
    clients: ["ONG & organisations humanitaires", "Multinationales pétrolières", "Institutions publiques", "PME locales en croissance"],
  },
  {
    slug: "technologie",
    numero: "06",
    titre: "Technologie & Solutions Industrielles",
    tagline: "Innovation, traçabilité et performance numérique",
    color: "#2E8BB8",
    logo: "/logo.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Traçabilité des produits, solutions numériques sur mesure et hébergement sécurisé des données pour gouvernements et industries.",
    description: "Nous proposons des solutions industrielles et numériques intelligentes pour les gouvernements et les industries locales. Nos services combinent traçabilité des produits, technologies sur mesure et hébergement sécurisé des données locales, garantissant transparence, sécurité et performance optimale de vos chaînes de production.",
    accroche: "Les gouvernements et les industries locales ont besoin de solutions numériques robustes, souveraines et adaptées à leurs réalités. Gordon Services conçoit et déploie ces solutions.",
    pourquoi: "Nous intervenons à chaque étape, de l'audit technique à la mise en production, avec des équipes formées aux normes internationales. Nos solutions garantissent souveraineté des données, traçabilité bout en bout et performance optimale de vos chaînes de production.",
    prestations: [
      { titre: "Solutions de traçabilité", desc: "Suivi complet des produits pour une maîtrise totale de la chaîne de valeur, de la production à la distribution." },
      { titre: "Solutions industrielles sur mesure", desc: "Développement de technologies adaptées aux besoins spécifiques de chaque client, secteur et environnement opérationnel." },
      { titre: "Solutions numériques & hébergement local", desc: "Gestion sécurisée et locale des informations industrielles critiques. Souveraineté et confidentialité des données garanties." },
      { titre: "Audit technique", desc: "Évaluation de l'état de vos systèmes et équipements, identification des risques et recommandations d'amélioration." },
      { titre: "Intégration de systèmes", desc: "Interconnexion de vos outils et plateformes existants pour une vision unifiée et des flux de données optimisés." },
      { titre: "Formation & accompagnement", desc: "Formation des équipes internes et accompagnement dans la transformation numérique." },
    ],
    avantages: ["Solutions souveraines — données hébergées localement", "Technologies adaptées au contexte africain", "Traçabilité bout en bout de la chaîne de valeur", "Expertise industrie, gouvernement & secteur public", "Déploiement rapide et accompagnement post-lancement", "Conformité aux standards internationaux"],
    clients: ["Gouvernements & institutions publiques", "Opérateurs industriels & énergétiques", "Groupes agroalimentaires", "Entreprises en transformation numérique"],
  },
  {
    slug: "hotellerie",
    numero: "07",
    titre: "Hôtellerie & Hébergement",
    tagline: "Confort & accueil professionnel",
    color: "#5C4A8A",
    logo: "/immo.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Hébergement corporate, résidences pour expatriés, accueil de délégations et gestion hôtelière externalisée.",
    description: "Gordon Services propose des solutions d'hébergement sur mesure pour vos équipes, expatriés et délégations en mission en République du Congo. Gestion complète de résidences hôtelières et unités d'accueil corporate.",
    accroche: "Loger une équipe en mission, accueillir une délégation internationale ou gérer une résidence d'expatriés — chaque situation demande une réponse professionnelle et adaptée. C'est ce que nous faisons.",
    pourquoi: "Nous prenons en charge l'intégralité de la chaîne d'accueil : sélection et aménagement des logements, services aux occupants, entretien quotidien et coordination des prestataires. Nos clients internationaux apprécient la fiabilité de nos standards et la réactivité de nos équipes sur place.",
    prestations: [
      { titre: "Hébergement corporate", desc: "Logements meublés et équipés pour vos équipes en mission courte ou longue durée, avec services inclus." },
      { titre: "Résidences pour expatriés", desc: "Gestion complète de résidences destinées aux cadres étrangers : sécurité, entretien, services et assistance quotidienne." },
      { titre: "Accueil de délégations", desc: "Organisation de l'hébergement pour conférences, missions officielles, audits et visites institutionnelles." },
      { titre: "Gestion hôtelière externalisée", desc: "Prise en charge de la gestion opérationnelle de vos structures : personnel, approvisionnement, maintenance." },
      { titre: "Services aux occupants", desc: "Blanchisserie, restauration, transferts, conciergerie et assistance administrative pour vos résidents." },
      { titre: "Aménagement & équipement", desc: "Préparation, ameublement et équipement de logements selon vos standards et vos besoins spécifiques." },
    ],
    avantages: ["Standards internationaux en matière de confort", "Gestion clé en main de A à Z", "Équipe disponible 7j/7 pour les occupants", "Réseau de logements à Brazzaville et Pointe-Noire", "Flexibilité : courte, moyenne et longue durée", "Reporting mensuel sur l'état des biens"],
    clients: ["Ambassades & missions diplomatiques", "ONG & agences onusiennes", "Groupes pétroliers & miniers", "Entreprises multinationales"],
  },
  {
    slug: "espaces-verts",
    numero: "08",
    titre: "Entretien & Espaces Verts",
    tagline: "Environnements soignés, logo préservée",
    color: "#2D6A4F",
    logo: "/espVert.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Tonte, taille, aménagement paysager, nettoyage extérieur et entretien de piscines pour vos sites.",
    description: "Gordon Services assure l'entretien des espaces verts, jardins et extérieurs de vos sites résidentiels, industriels et institutionnels. Une prestation régulière et professionnelle pour un cadre toujours impeccable.",
    accroche: "Un site bien entretenu, c'est une logo soignée, un environnement de travail agréable et une valeur immobilière préservée. Nos équipes interviennent avec régularité et savoir-faire.",
    pourquoi: "Nous intervenons sur tous types de sites — résidences d'expatriés, ambassades, sites industriels, campus d'entreprises — avec des équipes formées, du matériel professionnel et un planning d'intervention rigoureux. Chaque prestation est documentée et validée avec le client.",
    prestations: [
      { titre: "Tonte & taille", desc: "Tonte régulière des pelouses, taille des haies, arbustes et arbres selon les normes paysagères." },
      { titre: "Entretien de jardins", desc: "Soins des massifs floraux, désherbage, arrosage et traitement phytosanitaire adapté au climat local." },
      { titre: "Aménagement paysager", desc: "Conception et création d'espaces verts : plantations, allées, clôtures végétales et aménagements extérieurs." },
      { titre: "Nettoyage des extérieurs", desc: "Nettoyage des voies, parkings, terrasses et zones extérieures. Gestion des déchets verts." },
      { titre: "Entretien de piscines", desc: "Traitement de l'eau, nettoyage, maintenance des équipements et vérification des normes sanitaires." },
      { titre: "Contrats d'entretien", desc: "Abonnements mensuels avec passages réguliers planifiés, rapport d'intervention et interlocuteur dédié." },
    ],
    avantages: ["Équipes formées aux techniques paysagères", "Matériel professionnel adapté au terrain", "Interventions planifiées et documentées", "Produits respectueux de l'environnement", "Contrats flexibles selon la fréquence souhaitée", "Expérience sur sites diplomatiques et industriels"],
    clients: ["Résidences d'expatriés & villas", "Ambassades & consulats", "Sites industriels & pétroliers", "Hôtels & résidences de standing"],
  },
  {
    slug: "plantation",
    numero: "09",
    titre: "Gordon Plantation – Cacao & Café",
    tagline: "Cultiver la terre, sublimer le goût",
    color: "#5C3D1E",
    logo: "/espVert.png",
    image: "/IlluLocVoit.jpg",
    descriptionCourte: "Production de fèves de cacao et de grains de café de qualité supérieure, avec traçabilité, innovation agricole et pratiques durables.",
    description: "Bienvenue au sein du Département Plantation Cacao & Café de Gordon Services. Ici, nous ne faisons pas que cultiver — nous cultivons l'excellence. Notre mission est de produire des fèves de cacao et des grains de café de qualité supérieure, en harmonie avec la terre et dans le respect de pratiques durables.",
    accroche: "Ce département incarne notre engagement pour l'innovation agricole, la traçabilité et la valorisation de nos produits, tout en préparant le terrain pour un futur premium et responsable.",
    pourquoi: "L'Afrique centrale dispose d'un terroir d'exception pour la culture du cacao et du café. Gordon Services s'engage à en exploiter tout le potentiel grâce à des méthodes agricoles modernes, une traçabilité totale de la plantation à la livraison, et une ambition claire : positionner nos produits sur les marchés premium internationaux.",
    prestations: [
      { titre: "Culture du cacao", desc: "Production de fèves de cacao de qualité supérieure selon des pratiques agricoles durables et des standards d'exportation internationaux." },
      { titre: "Culture du café", desc: "Cultivation et récolte de grains de café sélectionnés, traitement post-récolte soigné pour préserver les arômes et la qualité." },
      { titre: "Traçabilité de la plantation à la vente", desc: "Suivi complet du produit depuis la graine jusqu'à la livraison finale, garantissant transparence et confiance pour les acheteurs." },
      { titre: "Innovation agricole", desc: "Intégration de technologies modernes : irrigation optimisée, analyse de sol, gestion des rendements." },
      { titre: "Valorisation & transformation", desc: "Première transformation locale, conditionnement premium et préparation des lots pour l'export ou la vente en circuit court." },
      { titre: "Agriculture durable", desc: "Pratiques respectueuses de l'environnement, gestion responsable des sols et engagement pour la biodiversité locale." },
    ],
    avantages: ["Terroir d'Afrique centrale à fort potentiel aromatique", "Traçabilité certifiée de la plantation à la livraison", "Pratiques agricoles durables et responsables", "Ambition premium — marchés nationaux et internationaux", "Innovation et modernisation des techniques agricoles", "Valorisation des produits locaux congolais"],
    clients: ["Acheteurs premium nationaux", "Exportateurs & traders internationaux", "Industrie chocolatière & torréfacteurs", "Distributeurs spécialisés & épiceries fines"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Map slug → service — accès O(1) dans ServiceDetailPage */
export const SERVICES_MAP = Object.fromEntries(SERVICES_DATA.map((s) => [s.slug, s]));

/** Titres seuls — pour les selects des formulaires */
export const SERVICES_TITLES = SERVICES_DATA.map((s) => s.titre);
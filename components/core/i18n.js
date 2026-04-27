const translations = {

  /* ==========================================
     FRANÇAIS
     ========================================== */
  fr: {
    nav: {
      projets: 'Projets',
      experience: 'Expérience',
      competences: 'Compétences',
      contact: 'Contact',
      projets_menu: [
        { label: 'Distributeur à croquettes', lien: '/projets/distributeur' },
        { label: 'Validation UWB / NFC — NXP', lien: '/projets/nxp' },
        { label: 'Automatismes BUT GEII', lien: '/projets/automatismes' },
        { label: 'Station météo embarquée', lien: '/projets/meteo' },
        { label: 'Feu tricolore en Grafcet', lien: '/projets/grafcet' },
        { label: 'Projet Pilomo — Robot suiveur de ligne', lien: '/projets/robot' },
        { label: 'Vie associative — BDE', lien: '/projets/bde' },
      ]
    },
    hero: {
      tag: 'Ingénieur systèmes embarqués',
      desc: 'Étudiant ingénieur ENSICAEN — GPSE, passionné d\'électronique embarquée, de programmation et de nouvelles technologies.',
      btn_projets: 'Voir mes projets',
      btn_contact: 'Me contacter',
      dispo: 'Disponible · Ouvert à toute opportunité'
    },
    projets: {
      eyebrow: 'Réalisations',
      titre: 'Projets sélectionnés',
      wip: 'En cours',
      items: [
        {
          titre: 'Distributeur à croquettes',
          desc: 'Projet scolaire en équipe mené en parallèle des cours à l\'ENSICAEN, conception d\'un distributeur automatique de croquettes pour chat : PCB, programmation ESP32 et alimentation photovoltaïque.'
        },
        {
          titre: 'Site vitrine — MB Auto',
          desc: 'Site vitrine pour un garagiste indépendant, design épuré, présentation des services, formulaire de contact. Réalisé sur Wix.'
        },
        {
          titre: 'Validation UWB / NFC — NXP',
          desc: 'Développement d\'une fonction de lecture automatique de la configuration des bancs de test UWB/NFC, évitant les écritures répétées en mémoire ROM.'
        },
        {
          titre: 'Bras robotique industriel',
          desc: 'Projet de 6h en fin de troisième année BUT GEII, mise en place d\'un bras robotique pour futurs TPs, simulation des mouvements et mise en situation réelle d\'outils industriels.'
        },
        {
          titre: 'Automatismes BUT GEII',
          desc: 'Asservissement moteur sur automate, programmation d\'interfaces homme-machine et mise en réseau de machines en architecture maître/esclave.'
        },
        {
          titre: 'Station météo embarquée',
          desc: 'Projet axé sur le traitement du signal, les données sont générées en imitant le bruit de capteurs réels, filtrées puis affichées sur une IHM intégrée.'
        },
        {
          titre: 'Feu tricolore en Grafcet',
          desc: 'Conception de la carte électronique et programmation d\'un automate Schneider, modélisation Grafcet des séquences d\'états et temporisations.'
        },
        {
          titre: 'Projet Pilomo — Robot suiveur de ligne',
          desc: 'Robot autonome conçu et programmé durant le BUT GEII, conception de la carte de puissance, capteurs IR, commande PWM. 1ère place au concours IUT de Cherbourg.'
        },
        {
          titre: 'Vie associative — BDE',
          desc: 'Président du BDE du département GEII 2022-2023, organisation d\'événements : match de football, BBQ, accueil des premières années.'
        },
      ]
    },
    experience: {
      eyebrow: 'Parcours',
      titre: 'Expériences & Formation',
      items: [
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'École d\'ingénieur — GPSE',
          desc: 'Génie Physique et Systèmes Embarqués — électronique HF, STM32/FreeRTOS, systèmes temps réel, instrumentation, traitement du signal, conception PCB.',
          lien: '/experience/ensicaen'
        },
        {
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Alternant — Développement Firmware',
          desc: 'Développement en Python de tests automatisés pour la validation firmware UWB et NFC, contribution à la fonction "describe" permettant la lecture automatique de la configuration des bancs de test. Git et Jira en environnement Agile.',
          lien: '/experience/nxp'
        },
        {
          date: '2023 – 2024',
          company: 'EDF CNPE Flamanville',
          role: 'Alternant — Service Conduite',
          desc: 'Automatisation en VBA de la rédaction des états de la centrale lors des changements de quart, troisième année de BUT GEII en alternance sur la centrale EPR de Flamanville.',
          lien: '/experience/edf'
        },
        {
          date: 'Avr – Juin 2023',
          company: 'EDF CNPE Flamanville',
          role: 'Stagiaire — Service Conduite',
          desc: 'Conception et mise au point des vues industrielles de la salle de commande permettant une supervision à distance. Stage de fin de deuxième année de BUT GEII.',
          lien: '/experience/edf'
        },
        {
          date: '2021 – 2024',
          company: 'IUT Cherbourg — GON',
          role: 'BUT GEII — Automatisme & Informatique Industrielle',
          desc: 'Formation en génie électrique, électronique de puissance, automatismes et programmation embarquée. Président du BDE 2022-2023. 1er prix concours robot suiveur de ligne.',
          lien: '/experience/but-geii'
        }
      ]
    },
    competences: {
      eyebrow: 'Savoir-faire',
      titre: 'Compétences techniques'
    },
    contact: {
      eyebrow: 'Restons en contact',
      intro: 'Une opportunité à partager ?',
      sub: 'Étudiant ingénieur à l\'ENSICAEN, passionné de systèmes embarqués et toujours à l\'affût des nouvelles technologies.',
      dispo: 'Disponible · Ouvert aux opportunités',
      nom: 'Nom',
      email: 'Email',
      message: 'Message',
      envoyer: 'Envoyer',
      success: 'Message envoyé !',
      success_sub: 'Je vous répondrai dans les meilleurs délais.'
    },
    cv_url: 'assets/cv/CV Zoran CHIRU.pdf',

    robot: {
      badge: 'Robotique · BUT GEII · 2021–2022',
      h1_1: 'Projet Pilomo',
      h1_2: 'Robot suiveur de ligne',
      meta_equipe: 'Équipe — 4 membres',
      meta_duree: 'Durée — ~8 semaines',
      meta_robot: 'Projet Pilomo · IUT Cherbourg',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Un projet complet de A à Z',
      contexte_p1: 'Durant le second semestre de première année de BUT GEII à l\'IUT de Cherbourg, notre équipe a conçu et programmé un robot mobile autonome capable de suivre une ligne blanche au sol. Le projet couvrait l\'ensemble de la chaîne, de la conception de la carte électronique de puissance à la programmation des comportements du robot.',
      contexte_p2: 'Le châssis nous était fourni, l\'essentiel du travail portait sur la conception et le soudage de la carte de puissance, le câblage des capteurs et la logique de contrôle Arduino.',
      archi_eyebrow: 'Architecture technique',
      archi_titre: 'Conception électronique',
      archi_p: 'Le robot repose sur deux cartes distinctes : une carte de commande Arduino et une carte de puissance entièrement conçue, routée et soudée par notre équipe intégrant un régulateur 78L05 et un transistor MOSFET BUZ11 pour la commande des moteurs. Quatre capteurs GP2D/GP2G alignés sous le châssis détectent la ligne blanche par réflexion infrarouge.',
      photo1_caption: 'Vue générale — capteurs GP2D/GP2G et carte de puissance visibles',
      photo_pcb_caption: 'Conception de la carte de puissance — Projet Pilomo',
      photo_test_caption: 'Tests de composants — sélection du driver moteur',
      photo_equipe_caption: 'Jour de la compétition — IUT Cherbourg',
      code_eyebrow: 'Programmation',
      code_titre: 'Logique de contrôle Arduino',
      code_p: 'Le programme lit les valeurs analogiques des capteurs GP2G, les convertit en distance via une fonction de calibration, puis ajuste les vitesses PWM des moteurs gauche et droit. La fréquence PWM a été modifiée via les registres TCCR0B pour une meilleure réponse moteur.',
      resultats_eyebrow: 'Résultats',
      resultats_titre: '1ère place au concours IUT',
      resultats_p: 'Le jour de la compétition, notre robot a remporté la première place. Notre stratégie gagnante : l\'implémentation d\'un raccourci sur la piste que peu d\'équipes ont eu le temps de développer, les statuettes à renverser représentaient des points bonus, mais l\'objectif principal restait la vitesse sur le parcours.',
      video1_caption: 'Compétition IUT Cherbourg — 1er passage',
      video2_caption: 'Raccourci sur piste — stratégie gagnante',
    },

    grafcet: {
      badge: 'Automatisme · BUT GEII · 2022–2023',
      h1_1: 'Feu tricolore',
      h1_2: 'en Grafcet',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'De la carte à l\'automate',
      contexte_p1: 'En deuxième année de BUT GEII, on nous a demandé de concevoir un feu tricolore fonctionnel de A à Z, concevoir et souder la carte électronique, programmer l\'automate Schneider et modéliser le comportement en Grafcet.',
      contexte_p2: 'Le projet couvrait deux volets bien distincts : le hardware avec la carte de signalisation LED, et le software avec la logique de commande sur automate industriel.',
      photo1_caption: 'Vue d\'ensemble — automate Schneider, alimentation et cartes LED',
      realisation_eyebrow: 'Réalisation électronique',
      realisation_titre: 'Carte de signalisation soudée à la main',
      realisation_p1: 'La carte regroupe les LED rouge, orange et verte directement commandées par les sorties de l\'automate, chaque couleur correspond à un état du Grafcet, une relation directe entre la logique programmée et le composant physique.',
      realisation_p2: 'L\'automate Schneider gère les temporisations et les transitions : rouge → vert → orange → rouge, avec des durées paramétrables. Une petite carte annexe assure le conditionnement des signaux entre le 24V de l\'automate et les LED.',
      photo2_caption: 'Carte de signalisation LED — soudage et assemblage',
      modelisation_eyebrow: 'Modélisation Grafcet',
      modelisation_titre: 'La logique derrière le feu',
      modelisation_p1: 'Le Grafcet est un formalisme graphique qui décrit le comportement séquentiel d\'un automatisme. Chaque étape représente un état stable, "feu rouge allumé" par exemple, et les transitions définissent les conditions pour passer à l\'étape suivante : une temporisation écoulée, un signal reçu.',
      modelisation_p2: 'Notre Grafcet modélise le cycle complet avec gestion des temporisations et un mode dégradé en clignotement orange, tout ça programmé directement sur l\'automate Schneider.',
      photo3_caption: 'Phase de tests et validation du fonctionnement',
      video_caption: 'Démonstration du fonctionnement — feu tricolore en Grafcet',
    },

    meteo: {
      badge: 'Électronique · BUT GEII · 2022–2023',
      h1_1: 'Station météo',
      h1_2: 'embarquée',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Filtrer, traiter, afficher',
      contexte_p1: 'Ce projet de deuxième année BUT GEII était centré sur le traitement du signal, l\'objectif n\'était pas de mesurer de vraies données météo, mais de comprendre comment filtrer et exploiter des signaux bruités. Les données sont générées numériquement en imitant le comportement de capteurs réels.',
      contexte_p2: 'Travailler avec des données synthétiques permettait de maîtriser les conditions du signal, amplitude du bruit, fréquences parasites, pour mieux observer l\'effet des filtres appliqués.',
      photo1_caption: 'Station météo complète avec IHM intégrée',
      archi_eyebrow: 'Interface & affichage',
      archi_titre: 'Une petite IHM rouge pour tout afficher',
      archi_p1: 'L\'interface d\'affichage, un petit écran rouge, montre en temps réel les valeurs traitées après filtrage. Simple, lisible, efficace.',
      archi_p2: 'Le système permet de faire varier les paramètres du signal synthétique et d\'observer en direct l\'impact des filtres, un outil pédagogique concret pour comprendre le traitement du signal.',
      photo2_caption: 'Interface d\'affichage — IHM rouge en fonctionnement',
      galerie_eyebrow: 'Traitement du signal',
      galerie_titre: 'Filtrer le bruit des capteurs',
      photo3_caption: 'Analyse et filtration des signaux',
      filtre_p1: 'Les signaux générés imitent le comportement de capteurs analogiques réels, avec du bruit et des perturbations. Des filtres numériques sont appliqués pour extraire l\'information utile et stabiliser l\'affichage.',
      filtre_p2: 'En faisant varier les paramètres du bruit et le type de filtre, on peut observer directement l\'effet du traitement, ce qui rend le projet particulièrement formateur sur la chaîne acquisition → filtrage → affichage.',
      photo4_caption: 'Validation du système lors des tests',
    },

    automatismes: {
      badge: 'Automatisme · BUT GEII · 2021–2024',
      h1_1: 'Automatismes',
      h1_2: 'industriels',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Un environnement industriel exceptionnel',
      contexte_p: 'L\'IUT de Cherbourg est implanté dans un bassin industriel très riche — Naval Group, Orano, EDF — ce qui oriente naturellement la pédagogie vers les automatismes industriels. Les travaux pratiques simulaient des environnements réels : gestion maître/esclave, asservissement moteur, supervision par IHM, autant de compétences directement applicables sur site.',
      p1_eyebrow: 'Projet 1',
      p1_titre: 'Asservissement moteur sur automate',
      p1_p1: 'Mise en place d\'une boucle d\'asservissement en position et en vitesse sur un moteur DC commandé par automate industriel, le système intègre un encodeur pour la mesure du retour et un correcteur PID.',
      p1_p2: 'L\'objectif : obtenir une réponse précise et stable sans dépassement excessif, en ajustant les paramètres du correcteur par méthode expérimentale.',
      p1_caption: 'Système d\'asservissement moteur sur automate',
      p2_eyebrow: 'Projet 2',
      p2_titre: 'Interfaces Homme-Machine',
      p2_p1: 'Conception et programmation d\'IHM permettant à un opérateur de superviser et contrôler un procédé industriel, les vues incluent des synoptiques animés, des courbes de tendance et des alarmes.',
      p2_p2: 'Un travail similaire à ce que j\'ai réalisé en stage chez EDF CNPE Flamanville pour la salle de commande de la centrale EPR, c\'est exactement ce type d\'interface qu\'utilisent les opérateurs pour superviser l\'installation à distance.',
      p2_caption1: 'Interface opérateur — supervision et contrôle',
      p2_caption2: 'Vue de supervision — second écran opérateur',
      p2_caption3: 'Architecture réseau maître/esclave',
      p3_eyebrow: 'Projet 3',
      p3_titre: 'Réseau industriel maître / esclave',
      p3_p1: 'Mise en réseau de plusieurs machines en architecture maître/esclave, l\'automate maître coordonne les échanges de données avec les esclaves et surveille l\'état de chaque nœud du réseau.',
      p3_p2: 'Ce type d\'architecture est au cœur des systèmes SCADA, des plateformes de supervision industrielle utilisées dans les usines, les centrales d\'énergie et les infrastructures critiques pour piloter des installations à distance.',
    },

    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – En cours',
      h1_1: 'Distributeur',
      h1_2: 'à croquettes',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Un projet d\'école mené en équipe',
      contexte_p1: 'Projet scolaire réalisé en équipe de 4 en parallèle des cours à l\'ENSICAEN, concevoir et fabriquer un distributeur automatique de croquettes pour chat, de la conception PCB à la programmation de l\'ESP32. Notion sert de plateforme commune et Git gère le versionnage du code.',
      contexte_p2: 'L\'ESP32 tourne en temps réel et pilote l\'ensemble du système, pesée, distribution, communication. La modélisation 3D du boîtier a été réalisée par un camarade de l\'équipe.',
      photo1_caption: 'Modélisation 3D du distributeur automatique',
      archi_eyebrow: 'Alimentation',
      archi_titre: 'Secteur ou autonomie solaire',
      archi_p: 'Le système peut fonctionner sur secteur ou en autonomie via une batterie et un panneau photovoltaïque, une approche encore en développement qui permettrait de l\'utiliser sans accès au réseau électrique.',
    },

    nxp: {
      badge: 'Firmware · NXP Semiconductors · 2024–2025',
      h1_1: 'Validation UWB / NFC',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Dans les coulisses des puces sans fil',
      contexte_p1: 'NXP Semiconductors, leurs puces équipent des systèmes de paiement sans contact, des voitures connectées et des infrastructures industrielles partout dans le monde. J\'ai rejoint leur équipe de validation firmware à Caen dans le cadre de ma première année d\'alternance à l\'ENSICAEN.',
      contexte_p2: 'Mon travail consistait à tester et valider le firmware sur des puces UWB (Ultra Wide Band) et NFC (Near Field Communication), deux technologies aux applications très différentes : le NFC pour les transactions courte portée, l\'UWB pour la localisation précise.',
      photo_caption: 'Poste de travail — développement et validation firmware',
      mission_eyebrow: 'Mission principale',
      mission_titre: 'Lire le banc de test sans l\'user',
      mission_p1: 'Les bancs de test ont une mémoire de configuration qui s\'use à chaque écriture, à chaque session, les ingénieurs devaient réécrire manuellement la configuration, une opération répétitive qui réduit la durée de vie des puces.',
      mission_p2: 'J\'ai développé en Python une fonction "describe" qui lit automatiquement l\'état du banc : quelles cartes sont connectées, quelles puces sont présentes, quelle configuration est active, résultat affiché clairement, sans écrire une seule fois en mémoire.',
      archi_eyebrow: 'Environnement de travail',
      archi_titre: 'Agile, Git et beaucoup de Python',
      archi_p: 'Sprints de deux semaines, revues de code régulières, suivi sur Jira, chaque fonctionnalité passait par une branche Git dédiée avant d\'être intégrée. Un environnement professionnel qui m\'a appris autant sur les méthodes de travail que sur la technique.',
    },

    bde: {
      badge: 'Vie associative · IUT Cherbourg · 2022–2023',
      h1_1: 'Président du BDE',
      h1_2: 'département GEII',
      contexte_eyebrow: 'Engagement',
      contexte_titre: 'Une année à la tête du BDE GEII',
      contexte_p1: 'En deuxième année de BUT GEII, j\'ai été élu président du Bureau des Étudiants du département GEII de l\'IUT de Cherbourg. Ce rôle m\'a permis de développer des compétences en leadership, organisation et communication bien au-delà du cadre technique.',
      contexte_p2: 'En parallèle des cours, j\'ai coordonné une équipe de bénévoles pour organiser plusieurs événements qui ont marqué la vie du département cette année-là.',
      ev1_eyebrow: 'Événement 1',
      ev1_titre: 'Match de football inter-promotions',
      ev1_p1: 'Organisation d\'un match de football réunissant toutes les promotions du département GEII, logistique, communication, tout était géré par le BDE.',
      ev1_p2: 'Un bon moyen de créer des liens entre les étudiants de première, deuxième et troisième années qui ne se côtoyaient pas forcément au quotidien.',
      ev1_caption: 'Match de football BDE GEII — IUT Cherbourg',
      ev2_eyebrow: 'Événement 2',
      ev2_titre: 'Barbecue de fin d\'année',
      ev2_p1: 'Organisation du BBQ de fin d\'année.tudiants, enseignants et personnel administratif réunis pour clôturer l\'année dans une bonne ambiance. Gestion du budget, des approvisionnements et de la logistique sur site.',
      ev2_p2: 'Un moment convivial qui a rassemblé l\'ensemble de la communauté GEII.',
      ev2_caption: 'Barbecue de fin d\'année — département GEII',
      ev3_eyebrow: 'Événement 3',
      ev3_titre: 'Accueil des premières années',
      ev3_p1: 'Organisation de la journée d\'accueil et d\'intégration des nouveaux étudiants, présentation du département, des ressources disponibles, de la vie étudiante à Cherbourg.',
      ev3_p2: 'L\'objectif était de faciliter l\'intégration et de donner aux premiers arrivants les clés pour bien démarrer leur formation.',
      ev3_caption: 'Accueil des premières années — journée d\'intégration',
      presse_eyebrow: 'Presse',
      presse_titre: 'Une action remarquée',
      presse_caption: 'Article de presse — actions du BDE GEII',
    }
  },

  /* ==========================================
     ENGLISH
     ========================================== */
  en: {
    nav: {
      projets: 'Projects',
      experience: 'Experience',
      competences: 'Skills',
      contact: 'Contact',
      projets_menu: [
        { label: 'Automatic cat feeder', lien: '/projets/distributeur' },
        { label: 'UWB / NFC Validation — NXP', lien: '/projets/nxp' },
        { label: 'Industrial automation — BUT GEII', lien: '/projets/automatismes' },
        { label: 'Embedded weather station', lien: '/projets/meteo' },
        { label: 'Traffic light in Grafcet', lien: '/projets/grafcet' },
        { label: 'Pilomo Project — Line following robot', lien: '/projets/robot' },
        { label: 'Student life — BDE', lien: '/projets/bde' },
      ]
    },
    hero: {
      tag: 'Embedded Systems Engineer',
      desc: 'Engineering student at ENSICAEN — GPSE, passionate about embedded electronics, programming and new technologies.',
      btn_projets: 'View my projects',
      btn_contact: 'Contact me',
      dispo: 'Available · Looking for a 9-week+ internship abroad'
    },
    projets: {
      eyebrow: 'Work',
      titre: 'Selected projects',
      wip: 'In progress',
      items: [
        {
          titre: 'Automatic cat feeder',
          desc: 'Team school project at ENSICAEN — designing an automatic cat feeder from PCB layout to ESP32 programming and photovoltaic power supply.'
        },
        {
          titre: 'Showcase website — MB Auto',
          desc: 'Showcase website for an independent mechanic, clean design, service presentation, contact form. Built with Wix.'
        },
        {
          titre: 'UWB / NFC Validation — NXP',
          desc: 'Development of an automatic test bench configuration reader for UWB/NFC validation, reducing repetitive ROM writes.'
        },
        {
          titre: 'Industrial robotic arm',
          desc: '6-hour project at the end of third year BUT GEII, setting up a robotic arm for future lab sessions, movement simulation and real-world industrial tool demonstration.'
        },
        {
          titre: 'Industrial automation — BUT GEII',
          desc: 'Motor control on PLC, HMI programming and master/slave network architecture between machines.'
        },
        {
          titre: 'Embedded weather station',
          desc: 'Signal processing project, data is generated by simulating sensor noise, then filtered and displayed on an integrated HMI.'
        },
        {
          titre: 'Traffic light in Grafcet',
          desc: 'Electronic board design and Schneider PLC programming, Grafcet modeling of state sequences and timers.'
        },
        {
          titre: 'Pilomo Project — Line following robot',
          desc: 'Autonomous robot designed during BUT GEII, power board design, IR sensors, PWM motor control. 1st place at IUT Cherbourg competition.'
        },
        {
          titre: 'Student life — BDE',
          desc: 'President of the GEII student union 2022-2023, events: football match, BBQ, welcome day for new students.'
        },
      ]
    },
    experience: {
      eyebrow: 'Background',
      titre: 'Experience & Education',
      items: [
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'Engineering school — GPSE',
          desc: 'Physical Engineering and Embedded Systems — RF electronics, STM32/FreeRTOS, real-time systems, instrumentation, signal processing, PCB design.',
          lien: '/experience/ensicaen'
        },
        {
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Apprentice — Firmware Development',
          desc: 'Python test automation for UWB and NFC firmware validation, developed the "describe" function for automatic test bench configuration reading. Git and Jira in an Agile environment.',
          lien: '/experience/nxp'
        },
        {
          date: '2023 – 2024',
          company: 'EDF CNPE Flamanville',
          role: 'Apprentice — Operations',
          desc: 'VBA automation of shift handover reports at the EPR nuclear power plant, third year of BUT GEII work-study program.',
          lien: '/experience/edf'
        },
        {
          date: 'Apr – Jun 2023',
          company: 'EDF CNPE Flamanville',
          role: 'Intern — Operations',
          desc: 'Design and development of industrial control room views for remote supervision, end-of-year internship, 2nd year of BUT GEII.',
          lien: '/experience/edf'
        },
        {
          date: '2021 – 2024',
          company: 'IUT Cherbourg — GON',
          role: 'BUT GEII — Automation & Industrial IT',
          desc: 'Electrical engineering, power electronics, automation and embedded programming, student union president 2022-2023. 1st prize line-following robot competition.',
          lien: '/experience/but-geii'
        }
      ]
    },
    competences: {
      eyebrow: 'Expertise',
      titre: 'Technical skills'
    },
    contact: {
      eyebrow: 'Let\'s connect',
      intro: 'Got an opportunity to share?',
      sub: 'Engineering student at ENSICAEN, passionate about embedded systems and always keeping up with new technologies.',
      dispo: 'Available · Looking for a 9-week+ internship abroad',
      nom: 'Name',
      email: 'Email',
      message: 'Message',
      envoyer: 'Send',
      success: 'Message sent!',
      success_sub: 'I\'ll get back to you as soon as possible.'
    },
    cv_url: 'assets/cv/Resume_internship_Zoran_CHIRU.pdf',

    robot: {
      badge: 'Robotics · BUT GEII · 2021–2022',
      h1_1: 'Pilomo Project',
      h1_2: 'Line following robot',
      meta_equipe: 'Team — 4 members',
      meta_duree: 'Duration — ~8 weeks',
      meta_robot: 'Pilomo Project · IUT Cherbourg',
      contexte_eyebrow: 'Context',
      contexte_titre: 'A full end-to-end project',
      contexte_p1: 'During the second semester of our first year of BUT GEII at IUT Cherbourg, our team designed and programmed an autonomous mobile robot capable of following a white line on the ground. The project covered the entire chain, from power board design to robot behavior programming.',
      contexte_p2: 'The chassis was provided, the main work focused on designing and soldering the power board, wiring the sensors and implementing the Arduino control logic.',
      archi_eyebrow: 'Technical architecture',
      archi_titre: 'Electronic design',
      archi_p: 'The robot uses two boards: an Arduino control board and a power board fully designed, routed and soldered by our team, featuring a 78L05 regulator and a BUZ11 MOSFET transistor. Four GP2D/GP2G sensors aligned under the chassis detect the white line by infrared reflection.',
      photo1_caption: 'General view — GP2D/GP2G sensors and power board visible',
      photo_pcb_caption: 'Power board design — Pilomo Project',
      photo_test_caption: 'Component testing — motor driver selection',
      photo_equipe_caption: 'Competition day — IUT Cherbourg',
      code_eyebrow: 'Programming',
      code_titre: 'Arduino control logic',
      code_p: 'The program reads analog values from GP2G sensors, converts them to distance using a power-law calibration function, then adjusts PWM speeds for left and right motors. PWM frequency was modified via TCCR0B registers for better motor response.',
      resultats_eyebrow: 'Results',
      resultats_titre: '1st place at IUT competition',
      resultats_p: 'On competition day, our robot took first place. Our winning strategy: implementing a track shortcut that few teams had time to develop, knocking over figurines earned bonus points, but speed on the track was the main objective.',
      video1_caption: 'IUT Cherbourg competition — 1st run',
      video2_caption: 'Track shortcut — winning strategy',
    },

    grafcet: {
      badge: 'Automation · BUT GEII · 2022–2023',
      h1_1: 'Traffic light',
      h1_2: 'in Grafcet',
      contexte_eyebrow: 'Context',
      contexte_titre: 'From board to PLC',
      contexte_p1: 'In the second year of BUT GEII, we were asked to design a fully functional traffic light from scratch, design and solder the electronic board, program the Schneider PLC and model the behavior in Grafcet.',
      contexte_p2: 'The project covered two distinct parts: the hardware with the LED signaling board, and the software with the control logic on the industrial PLC.',
      photo1_caption: 'Overview — Schneider PLC, power supply and LED boards',
      realisation_eyebrow: 'Electronics',
      realisation_titre: 'Hand-soldered signaling board',
      realisation_p1: 'The board groups red, orange and green LEDs directly controlled by the PLC outputs, each color corresponds to a Grafcet state, a direct link between the programmed logic and the physical component.',
      realisation_p2: 'The Schneider PLC manages timers and transitions: red → green → orange → red, with configurable durations. An auxiliary board handles signal conditioning between the 24V PLC and the LEDs.',
      photo2_caption: 'LED signaling board — soldering and assembly',
      modelisation_eyebrow: 'Grafcet modeling',
      modelisation_titre: 'The logic behind the light',
      modelisation_p1: 'Grafcet is a graphical formalism describing the sequential behavior of an automation system. Each step represents a stable state, "red light on" for example, and transitions define the conditions to move to the next step.',
      modelisation_p2: 'Our Grafcet models the complete cycle with timer management and a degraded orange blinking mode, all programmed directly on the Schneider PLC.',
      photo3_caption: 'Testing and validation phase',
      video_caption: 'Demonstration — traffic light in Grafcet',
    },

    meteo: {
      badge: 'Electronics · BUT GEII · 2022–2023',
      h1_1: 'Embedded',
      h1_2: 'weather station',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Filter, process, display',
      contexte_p1: 'This second-year BUT GEII project focused on signal processing, the goal was not to measure real weather data, but to understand how to filter and exploit noisy signals. Data is generated digitally by simulating the behavior of real sensors.',
      contexte_p2: 'Working with synthetic data made it possible to control signal conditions, noise amplitude, parasitic frequencies, to better observe the effect of the applied filters.',
      photo1_caption: 'Complete station with integrated HMI',
      archi_eyebrow: 'Interface & display',
      archi_titre: 'A small red HMI to display everything',
      archi_p1: 'The display interface, a small red screen, shows in real time the processed values after filtering. Simple, readable, effective.',
      archi_p2: 'The system allows varying synthetic signal parameters and observing the impact of filters in real time, a concrete learning tool for understanding signal processing.',
      photo2_caption: 'Display interface — red HMI in operation',
      galerie_eyebrow: 'Signal processing',
      galerie_titre: 'Filtering sensor noise',
      photo3_caption: 'Signal analysis and filtering',
      filtre_p1: 'The generated signals mimic the behavior of real analog sensors, with noise and interference. Digital filters are applied to extract useful information and stabilize the display.',
      filtre_p2: 'By varying noise parameters and filter type, the effect of processing can be observed directly, making the project particularly instructive on the acquisition → filtering → display chain.',
      photo4_caption: 'System validation during testing',
    },

    automatismes: {
      badge: 'Automation · BUT GEII · 2021–2024',
      h1_1: 'Industrial',
      h1_2: 'automation',
      contexte_eyebrow: 'Context',
      contexte_titre: 'An exceptional industrial environment',
      contexte_p: 'IUT Cherbourg is located in a rich industrial basin — Naval Group, Orano, EDF — which naturally shapes the curriculum toward industrial automation. Lab sessions simulated real environments: master/slave management, motor control, HMI supervision, skills directly applicable on site.',
      p1_eyebrow: 'Project 1',
      p1_titre: 'Motor control on PLC',
      p1_p1: 'Implementation of a position and speed control loop on a DC motor controlled by an industrial PLC, the system integrates an encoder for feedback measurement and a PID controller.',
      p1_p2: 'The goal: achieve a precise and stable response without excessive overshoot, by adjusting controller parameters experimentally.',
      p1_caption: 'Motor control system on PLC',
      p2_eyebrow: 'Project 2',
      p2_titre: 'Human-Machine Interfaces',
      p2_p1: 'Design and programming of HMIs allowing an operator to supervise and control an industrial process, views include animated synoptics, trend curves and alarms.',
      p2_p2: 'Similar work to what I did during my internship at EDF CNPE Flamanville for the control room of the EPR nuclear plant, exactly the type of interface operators use to monitor the installation remotely.',
      p2_caption1: 'Operator interface — supervision and control',
      p2_caption2: 'Supervision view — second operator screen',
      p2_caption3: 'Master/slave network architecture',
      p3_eyebrow: 'Project 3',
      p3_titre: 'Industrial master/slave network',
      p3_p1: 'Networking of multiple machines in a master/slave architecture, the master PLC coordinates data exchanges with slaves and monitors each network node.',
      p3_p2: 'This architecture is at the heart of SCADA systems, industrial supervision platforms used in factories, power plants and critical infrastructure to remotely control installations.',
    },

    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – In progress',
      h1_1: 'Automatic',
      h1_2: 'cat feeder',
      contexte_eyebrow: 'Context',
      contexte_titre: 'A team school project',
      contexte_p1: 'School project built as a team of 4 alongside coursework at ENSICAEN, designing and building an automatic cat feeder from PCB to ESP32 programming. Notion serves as a shared workspace and Git handles code versioning.',
      contexte_p2: 'The ESP32 runs in real time and controls the entire system, weighing, dispensing, communication. The 3D modeling of the casing was done by a teammate.',
      photo1_caption: '3D modeling of the automatic dispenser',
      archi_eyebrow: 'Power supply',
      archi_titre: 'Mains or solar autonomy',
      archi_p: 'The system can run on mains power or autonomously via a battery and a photovoltaic panel, an approach still under development that would allow use without access to the electrical grid.',
    },

    nxp: {
      badge: 'Firmware · NXP Semiconductors · 2024–2025',
      h1_1: 'UWB / NFC Validation',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Behind the scenes of wireless chips',
      contexte_p1: 'NXP Semiconductors, their chips power contactless payment systems, connected cars and industrial infrastructure worldwide. I joined their firmware validation team in Caen as part of my first year of work-study at ENSICAEN.',
      contexte_p2: 'My work involved testing and validating firmware on UWB (Ultra Wide Band) and NFC (Near Field Communication) chips, two technologies with very different applications: NFC for short-range transactions, UWB for precise location.',
      photo_caption: 'Workstation — UWB/NFC firmware development and validation',
      mission_eyebrow: 'Main mission',
      mission_titre: 'Reading the test bench without wearing it out',
      mission_p1: 'Test benches have a configuration memory that wears with each write, each session, engineers had to manually rewrite the configuration, a repetitive operation that reduces chip lifespan.',
      mission_p2: 'I developed a Python "describe" function that automatically reads the bench state: which boards are connected, which chips are present, what configuration is active, result displayed clearly, without writing to memory even once.',
      archi_eyebrow: 'Work environment',
      archi_titre: 'Agile, Git and a lot of Python',
      archi_p: 'Two-week sprints, regular code reviews, progress tracking on Jira, each feature went through a dedicated Git branch before integration. A professional environment that taught me as much about working methods as about the technical side.',
    },

    bde: {
      badge: 'Student life · IUT Cherbourg · 2022–2023',
      h1_1: 'Student Union President',
      h1_2: 'GEII department',
      contexte_eyebrow: 'Commitment',
      contexte_titre: 'A year leading the GEII student union',
      contexte_p1: 'In my second year of BUT GEII, I was elected president of the Student Bureau of the GEII department at IUT Cherbourg. This role allowed me to develop leadership, organizational and communication skills well beyond the technical scope.',
      contexte_p2: 'Alongside coursework, I coordinated a team of volunteers to organize several events that marked the department\'s student life that year.',
      ev1_eyebrow: 'Event 1',
      ev1_titre: 'Inter-year football match',
      ev1_p1: 'Organization of a football match bringing together all GEII department year groups, logistics, communication, all managed by the student union.',
      ev1_p2: 'A good way to create bonds between first, second and third year students who didn\'t necessarily cross paths day to day.',
      ev1_caption: 'GEII BDE football match — IUT Cherbourg',
      ev2_eyebrow: 'Event 2',
      ev2_titre: 'End-of-year BBQ',
      ev2_p1: 'Organization of the end-of-year BBQ, students, teachers and administrative staff gathered to close the year on a good note. Budget management, supply procurement and on-site logistics.',
      ev2_p2: 'A convivial moment that brought the entire GEII community together.',
      ev2_caption: 'End-of-year BBQ — GEII department',
      ev3_eyebrow: 'Event 3',
      ev3_titre: 'First-year student welcome day',
      ev3_p1: 'Organization of the welcome and integration day for new students, presentation of the department, available resources, student life in Cherbourg.',
      ev3_p2: 'The goal was to help new students settle in and give them the keys to start their program well.',
      ev3_caption: 'First-year welcome day — integration event',
      presse_eyebrow: 'Press',
      presse_titre: 'Recognized work',
      presse_caption: 'Press article — GEII BDE activities',
    }
  },

  /* ==========================================
     ROMÂNĂ
     ========================================== */
  ro: {
    nav: {
      projets: 'Proiecte',
      experience: 'Experiență',
      competences: 'Competențe',
      contact: 'Contact',
      projets_menu: [
        { label: 'Distribuitor automat hrană pisică', lien: '/projets/distributeur' },
        { label: 'Validare UWB / NFC — NXP', lien: '/projets/nxp' },
        { label: 'Automatizări BUT GEII', lien: '/projets/automatismes' },
        { label: 'Stație meteo încorporată', lien: '/projets/meteo' },
        { label: 'Semafor în Grafcet', lien: '/projets/grafcet' },
        { label: 'Proiectul Pilomo — Robot urmăritor', lien: '/projets/robot' },
        { label: 'Viață asociativă — BDE', lien: '/projets/bde' },
      ]
    },
    hero: {
      tag: 'Inginer sisteme incorporate',
      desc: 'Student inginer la ENSICAEN — GPSE, pasionat de electronică încorporată, programare și tehnologii noi.',
      btn_projets: 'Vezi proiectele mele',
      btn_contact: 'Contactează-mă',
      dispo: 'Disponibil · Caut un stagiu de min. 9 săptămâni în străinătate'
    },
    projets: {
      eyebrow: 'Realizări',
      titre: 'Proiecte selectate',
      wip: 'În progres',
      items: [
        {
          titre: 'Distribuitor automat hrană pisică',
          desc: 'Proiect școlar în echipă la ENSICAEN, proiectarea unui distribuitor automat de hrană pentru pisică: PCB, programare ESP32 și alimentare fotovoltaică.'
        },
        {
          titre: 'Site de prezentare — MB Auto',
          desc: 'Site de prezentare pentru un mecanic independent, design curat, servicii, formular de contact. Realizat pe Wix.'
        },
        {
          titre: 'Validare UWB / NFC — NXP',
          desc: 'Dezvoltarea unei funcții de citire automată a configurației bancurilor de test UWB/NFC, reducând scrierile repetitive în memoria ROM.'
        },
        {
          titre: 'Braț robotic industrial',
          desc: 'Proiect de 6 ore la sfârșitul celui de-al treilea an BUT GEII, configurarea unui braț robotic pentru viitoarele lucrări practice, simularea mișcărilor și demonstrarea instrumentelor industriale reale.'
        },
        {
          titre: 'Automatizări BUT GEII',
          desc: 'Reglaj motor pe automat, programare interfețe om-mașină și rețea maestru/sclav între mașini industriale.'
        },
        {
          titre: 'Stație meteo încorporată',
          desc: 'Proiect axat pe procesarea semnalelor, datele sunt generate imitând zgomotul senzorilor reali, filtrate și afișate pe un IHM integrat.'
        },
        {
          titre: 'Semafor în Grafcet',
          desc: 'Proiectarea plăcii electronice și programarea unui automat Schneider, modelare Grafcet a secvențelor de stări și temporizări.'
        },
        {
          titre: 'Proiectul Pilomo — Robot urmăritor de linie',
          desc: 'Robot autonom proiectat în timpul BUT GEII, proiectarea plăcii de putere, senzori IR, control PWM. Locul 1 la concursul IUT Cherbourg.'
        },
        {
          titre: 'Viață asociativă — BDE',
          desc: 'Președinte al asociației studențești GEII 2022-2023, evenimente: meci de fotbal, BBQ, primirea studenților din primul an.'
        },
      ]
    },
    experience: {
      eyebrow: 'Parcurs',
      titre: 'Experiență & Formare',
      items: [
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'Școală de inginerie — GPSE',
          desc: 'Inginerie Fizică și Sisteme Incorporate — electronică RF, STM32/FreeRTOS, sisteme în timp real, instrumentare, procesarea semnalelor, proiectare PCB.',
          lien: '/experience/ensicaen'
        },
        {
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Apprentice — Dezvoltare Firmware',
          desc: 'Automatizare teste Python pentru validarea firmware UWB și NFC, dezvoltarea funcției "describe" pentru citirea automată a configurației bancurilor de test. Git și Jira în mediu Agile.',
          lien: '/experience/nxp'
        },
        {
          date: '2023 – 2024',
          company: 'EDF CNPE Flamanville',
          role: 'Apprentice — Serviciu Conducere',
          desc: 'Automatizare VBA a rapoartelor de schimb la centrala nucleară EPR Flamanville, al treilea an de BUT GEII în alternance.',
          lien: '/experience/edf'
        },
        {
          date: 'Apr – Iun 2023',
          company: 'EDF CNPE Flamanville',
          role: 'Stagiar — Serviciu Conducere',
          desc: 'Proiectarea vederilor industriale ale sălii de comandă pentru supraveghere la distanță, stagiu de sfârșit al celui de-al doilea an de BUT GEII.',
          lien: '/experience/edf'
        },
        {
          date: '2021 – 2024',
          company: 'IUT Cherbourg — GON',
          role: 'BUT GEII — Automatizare & Informatică Industrială',
          desc: 'Inginerie electrică, electronică de putere, automatizări și programare încorporată, președinte asociație studențească 2022-2023. Locul 1 concurs robot urmăritor de linie.',
          lien: '/experience/but-geii'
        }
      ]
    },
    competences: {
      eyebrow: 'Expertiză',
      titre: 'Competențe tehnice'
    },
    contact: {
      eyebrow: 'Să rămânem în contact',
      intro: 'Ai o oportunitate de împărtășit?',
      sub: 'Student inginer la ENSICAEN, pasionat de sisteme incorporate și mereu la curent cu noile tehnologii.',
      dispo: 'Disponibil · Caut un stagiu de min. 9 săptămâni în străinătate',
      nom: 'Nume',
      email: 'Email',
      message: 'Mesaj',
      envoyer: 'Trimite',
      success: 'Mesaj trimis!',
      success_sub: 'Îți voi răspunde cât mai curând.'
    },
    cv_url: 'assets/cv/CV Zoran CHIRU Romania.pdf',

    robot: {
      badge: 'Robotică · BUT GEII · 2021–2022',
      h1_1: 'Proiectul Pilomo',
      h1_2: 'Robot urmăritor de linie',
      meta_equipe: 'Echipă — 4 membri',
      meta_duree: 'Durată — ~8 săptămâni',
      meta_robot: 'Proiectul Pilomo · IUT Cherbourg',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Un proiect complet de la A la Z',
      contexte_p1: 'În al doilea semestru al primului an de BUT GEII la IUT Cherbourg, echipa noastră a proiectat și programat un robot mobil autonom capabil să urmeze o linie albă pe sol. Proiectul a acoperit întregul lanț, de la proiectarea plăcii de putere până la programarea comportamentelor robotului.',
      contexte_p2: 'Șasiul ne-a fost furnizat, munca principală s-a concentrat pe proiectarea și lipirea plăcii de putere, cablarea senzorilor și logica de control Arduino.',
      archi_eyebrow: 'Arhitectură tehnică',
      archi_titre: 'Proiectare electronică',
      archi_p: 'Robotul folosește două plăci: o placă de comandă Arduino și o placă de putere integral proiectată, rutată și lipită de echipa noastră, cu regulator 78L05 și tranzistor MOSFET BUZ11. Patru senzori GP2D/GP2G aliniați sub șasiu detectează linia albă prin reflexie infraroșie.',
      photo1_caption: 'Vedere generală — senzori GP2D/GP2G și placă de putere vizibile',
      photo_pcb_caption: 'Proiectarea plăcii de putere — Proiectul Pilomo',
      photo_test_caption: 'Teste de componente — selecția driverului de motor',
      photo_equipe_caption: 'Ziua competiției — IUT Cherbourg',
      code_eyebrow: 'Programare',
      code_titre: 'Logică de control Arduino',
      code_p: 'Programul citește valorile analogice ale senzorilor GP2G, le convertește în distanță printr-o funcție de calibrare, apoi ajustează vitezele PWM ale motoarelor stâng și drept. Frecvența PWM a fost modificată prin registrele TCCR0B pentru un răspuns mai bun.',
      resultats_eyebrow: 'Rezultate',
      resultats_titre: 'Locul 1 la concursul IUT',
      resultats_p: 'În ziua competiției, robotul nostru a câștigat primul loc. Strategia noastră câștigătoare: implementarea unei scurtături pe pistă pe care puține echipe au avut timp să o dezvolte, statuetele de răsturnat reprezentau puncte bonus, dar viteza pe pistă rămânea obiectivul principal.',
      video1_caption: 'Competiție IUT Cherbourg — prima cursă',
      video2_caption: 'Scurtătură pe pistă — strategie câștigătoare',
    },

    grafcet: {
      badge: 'Automatizare · BUT GEII · 2022–2023',
      h1_1: 'Semafor',
      h1_2: 'în Grafcet',
      contexte_eyebrow: 'Context',
      contexte_titre: 'De la placă la automat',
      contexte_p1: 'În al doilea an de BUT GEII, ni s-a cerut să proiectăm un semafor funcțional de la zero, proiectarea și lipirea plăcii electronice, programarea automatului Schneider și modelarea comportamentului în Grafcet.',
      contexte_p2: 'Proiectul a acoperit două aspecte distincte: hardware-ul cu placa de semnalizare LED și software-ul cu logica de comandă pe automatul industrial.',
      photo1_caption: 'Vedere de ansamblu — automat Schneider, alimentare și plăci LED',
      realisation_eyebrow: 'Electronică',
      realisation_titre: 'Placă de semnalizare lipită manual',
      realisation_p1: 'Placa grupează LED-urile roșu, portocaliu și verde comandate direct de ieșirile automatului, fiecare culoare corespunde unei stări Grafcet, o legătură directă între logica programată și componenta fizică.',
      realisation_p2: 'Automatul Schneider gestionează temporizările și tranzițiile: roșu → verde → portocaliu → roșu. O placă auxiliară asigură condiționarea semnalelor între automatul de 24V și LED-uri.',
      photo2_caption: 'Placă de semnalizare LED — lipire și asamblare',
      modelisation_eyebrow: 'Modelare Grafcet',
      modelisation_titre: 'Logica din spatele semaforului',
      modelisation_p1: 'Grafcet este un formalism grafic care descrie comportamentul secvențial al unui sistem de automatizare. Fiecare etapă reprezintă o stare stabilă, iar tranzițiile definesc condițiile de trecere la etapa următoare.',
      modelisation_p2: 'Grafcet-ul nostru modelează ciclul complet cu gestionarea temporizărilor și un mod degradat de clipire portocalie, totul programat direct pe automatul Schneider.',
      photo3_caption: 'Faza de teste și validare',
      video_caption: 'Demonstrație — semafor în Grafcet',
    },

    meteo: {
      badge: 'Electronică · BUT GEII · 2022–2023',
      h1_1: 'Stație meteo',
      h1_2: 'încorporată',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Filtrează, procesează, afișează',
      contexte_p1: 'Acest proiect din al doilea an BUT GEII era centrat pe procesarea semnalelor, obiectivul nu era măsurarea de date meteo reale, ci înțelegerea filtrării semnalelor bruiate. Datele sunt generate digital imitând comportamentul senzorilor reali.',
      contexte_p2: 'Lucrul cu date sintetice permite controlul condițiilor semnalului, amplitudinea zgomotului, frecvențele parazite, pentru a observa mai bine efectul filtrelor aplicate.',
      photo1_caption: 'Stație meteo completă cu IHM integrat',
      archi_eyebrow: 'Interfață și afișare',
      archi_titre: 'Un mic IHM roșu pentru tot',
      archi_p1: 'Interfața de afișare, un mic ecran roșu, afișează în timp real valorile procesate după filtrare. Simplu, lizibil, eficient.',
      archi_p2: 'Sistemul permite varierea parametrilor semnalului sintetic și observarea impactului filtrelor în timp real, un instrument pedagogic concret pentru înțelegerea procesării semnalelor.',
      photo2_caption: 'Interfață de afișare — IHM roșu în funcțiune',
      galerie_eyebrow: 'Procesarea semnalelor',
      galerie_titre: 'Filtrarea zgomotului senzorilor',
      photo3_caption: 'Analiza și filtrarea semnalelor',
      filtre_p1: 'Semnalele generate imită comportamentul senzorilor analogici reali, cu zgomot și perturbații. Se aplică filtre numerice pentru a extrage informația utilă și a stabiliza afișajul.',
      filtre_p2: 'Variind parametrii zgomotului și tipul de filtru, efectul procesării poate fi observat direct, ceea ce face proiectul deosebit de formativ pe lanțul achiziție → filtrare → afișare.',
      photo4_caption: 'Validarea sistemului în timpul testelor',
    },

    automatismes: {
      badge: 'Automatizare · BUT GEII · 2021–2024',
      h1_1: 'Automatizări',
      h1_2: 'industriale',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Un mediu industrial excepțional',
      contexte_p: 'IUT Cherbourg este situat într-un bazin industrial bogat — Naval Group, Orano, EDF — ceea ce orientează natural pedagogia spre automatizările industriale. Lucrările practice simulau medii reale: gestiune maestru/sclav, reglaj motor, supraveghere IHM, competențe direct aplicabile pe teren.',
      p1_eyebrow: 'Proiect 1',
      p1_titre: 'Reglaj motor pe automat',
      p1_p1: 'Implementarea unei bucle de reglaj în poziție și viteză pe un motor DC comandat de un automat industrial, sistemul integrează un encoder pentru măsurarea reacției și un corector PID.',
      p1_p2: 'Obiectivul: obținerea unui răspuns precis și stabil fără depășire excesivă, prin ajustarea parametrilor corectorului pe cale experimentală.',
      p1_caption: 'Sistem de reglaj motor pe automat',
      p2_eyebrow: 'Proiect 2',
      p2_titre: 'Interfețe Om-Mașină',
      p2_p1: 'Proiectarea și programarea IHM-urilor care permit unui operator să supravegheze și să controleze un proces industrial, vederile includ sinoptice animate, curbe de tendință și alarme.',
      p2_p2: 'Un lucru similar cu ceea ce am realizat în timpul stagiului la EDF CNPE Flamanville pentru sala de comandă a centralei EPR, exact tipul de interfață pe care operatorii îl folosesc pentru a supraveghea instalația de la distanță.',
      p2_caption1: 'Interfață operator — supraveghere și control',
      p2_caption2: 'Vedere de supraveghere — al doilea ecran operator',
      p2_caption3: 'Arhitectură rețea maestru/sclav',
      p3_eyebrow: 'Proiect 3',
      p3_titre: 'Rețea industrială maestru/sclav',
      p3_p1: 'Conectarea în rețea a mai multor mașini în arhitectură maestru/sclav, automatul maestru coordonează schimburile de date cu sclavii și monitorizează fiecare nod al rețelei.',
      p3_p2: 'Această arhitectură este la baza sistemelor SCADA, platforme de supraveghere industrială utilizate în fabrici, centrale electrice și infrastructuri critice pentru controlul de la distanță al instalațiilor.',
    },

    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – În progres',
      h1_1: 'Distribuitor automat',
      h1_2: 'hrană pisică',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Un proiect școlar în echipă',
      contexte_p1: 'Proiect școlar realizat în echipă de 4 în paralel cu cursurile la ENSICAEN, proiectarea și fabricarea unui distribuitor automat de hrană pentru pisică, de la PCB la programarea ESP32. Notion servește ca platformă comună și Git gestionează versionarea codului.',
      contexte_p2: 'ESP32 rulează în timp real și controlează întregul sistem, cântărire, distribuire, comunicare. Modelarea 3D a carcasei a fost realizată de un coleg din echipă.',
      photo1_caption: 'Modelare 3D a distributorului automat',
      archi_eyebrow: 'Alimentare',
      archi_titre: 'Rețea sau autonomie solară',
      archi_p: 'Sistemul poate funcționa la rețea sau autonom printr-o baterie și un panou fotovoltaic, o abordare încă în dezvoltare care ar permite utilizarea fără acces la rețeaua electrică.',
    },

    nxp: {
      badge: 'Firmware · NXP Semiconductors · 2024–2025',
      h1_1: 'Validare UWB / NFC',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Context',
      contexte_titre: 'În spatele cipurilor wireless',
      contexte_p1: 'NXP Semiconductors, cipurile lor echipează sisteme de plată fără contact, mașini conectate și infrastructuri industriale din întreaga lume. Am integrat echipa lor de validare firmware din Caen în cadrul primului meu an de alternance la ENSICAEN.',
      contexte_p2: 'Munca mea consta în testarea și validarea firmware-ului pe cipuri UWB și NFC, două tehnologii cu aplicații foarte diferite: NFC pentru tranzacții de proximitate, UWB pentru localizare precisă.',
      photo_caption: 'Stație de lucru — dezvoltare și validare firmware',
      mission_eyebrow: 'Misiunea principală',
      mission_titre: 'Citirea bancului de test fără a-l uza',
      mission_p1: 'Bancurile de test au o memorie de configurare care se uzează la fiecare scriere, la fiecare sesiune, inginerii trebuiau să rescrie manual configurația, o operație repetitivă care reduce durata de viață a cipurilor.',
      mission_p2: 'Am dezvoltat în Python o funcție "describe" care citește automat starea bancului: ce plăci sunt conectate, ce cipuri sunt prezente, ce configurație este activă, rezultat afișat clar, fără a scrie o singură dată în memorie.',
      archi_eyebrow: 'Mediu de lucru',
      archi_titre: 'Agile, Git și mult Python',
      archi_p: 'Sprinturi de două săptămâni, revizuiri de cod regulate, urmărire progres pe Jira, fiecare funcționalitate trecea printr-o ramură Git dedicată înainte de integrare. Un mediu profesional care m-a învățat la fel de mult despre metodele de lucru ca și despre tehnic.',
    },

    bde: {
      badge: 'Viață asociativă · IUT Cherbourg · 2022–2023',
      h1_1: 'Președinte BDE',
      h1_2: 'departamentul GEII',
      contexte_eyebrow: 'Angajament',
      contexte_titre: 'Un an în fruntea BDE GEII',
      contexte_p1: 'În al doilea an de BUT GEII, am fost ales președinte al Biroului Studențesc al departamentului GEII de la IUT Cherbourg. Acest rol mi-a permis să dezvolt competențe de leadership, organizare și comunicare dincolo de cadrul tehnic.',
      contexte_p2: 'Paralel cu cursurile, am coordonat o echipă de voluntari pentru organizarea mai multor evenimente care au marcat viața departamentului în acel an.',
      ev1_eyebrow: 'Eveniment 1',
      ev1_titre: 'Meci de fotbal inter-promoții',
      ev1_p1: 'Organizarea unui meci de fotbal reunind toate promoțiile departamentului GEII, logistică, comunicare, totul gestionat de asociație.',
      ev1_p2: 'Un bun mod de a crea legături între studenții din primul, al doilea și al treilea an care nu se intersectau neapărat zilnic.',
      ev1_caption: 'Meci fotbal BDE GEII — IUT Cherbourg',
      ev2_eyebrow: 'Eveniment 2',
      ev2_titre: 'Grătar de sfârșit de an',
      ev2_p1: 'Organizarea grătarului de sfârșit de an, studenți, profesori și personal administrativ reuniți pentru a încheia anul într-o atmosferă bună. Gestionarea bugetului, aprovizionărilor și logisticii.',
      ev2_p2: 'Un moment convivial care a reunit întreaga comunitate GEII.',
      ev2_caption: 'Grătar de sfârșit de an — departamentul GEII',
      ev3_eyebrow: 'Eveniment 3',
      ev3_titre: 'Primirea studenților din primul an',
      ev3_p1: 'Organizarea zilei de primire și integrare a noilor studenți, prezentarea departamentului, resurselor disponibile, vieții studențești la Cherbourg.',
      ev3_p2: 'Obiectivul era să faciliteze integrarea și să ofere noilor veniți cheile pentru un start bun în formare.',
      ev3_caption: 'Ziua de primire a primului an — eveniment de integrare',
      presse_eyebrow: 'Presă',
      presse_titre: 'O muncă remarcată',
      presse_caption: 'Articol de presă — activitățile BDE GEII',
    }
  }
}

export default translations
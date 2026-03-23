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
          desc: 'Distributeur automatique piloté par ESP32. Pesée en temps réel via cellules de charge, alimentation autonome et gestion d\'énergie en 6 blocs.'
        },
        {
          titre: 'Site vitrine — MB Auto',
          desc: 'Site vitrine pour un garagiste indépendant. Design épuré, présentation des services, formulaire de contact. Réalisé sur Wix.'
        },
        {
          titre: 'Validation UWB / NFC — NXP',
          desc: 'Développement d\'une fonction de lecture automatique de la configuration des bancs de test UWB/NFC, évitant les écritures répétées en mémoire ROM.'
        },
        {
          titre: 'Bras robotique industriel',
          desc: 'Projet de 6h en fin de deuxième année BUT GEII : mise en place d\'un bras robotique pour futurs TPs. Simulation des mouvements et mise en situation réelle d\'outils industriels.'
        },
        {
          titre: 'Automatismes BUT GEII',
          desc: 'Asservissement moteur sur automate, programmation d\'interfaces homme-machine et mise en réseau de machines en architecture maître/esclave.'
        },
        {
          titre: 'Station météo embarquée',
          desc: 'Station météo mesurant température et humidité via capteurs. Filtrage des signaux, affichage sur IHM intégrée, données synthétiques pour les TPs.'
        },
        {
          titre: 'Feu tricolore en Grafcet',
          desc: 'Conception de la carte électronique et programmation d\'un automate Schneider. Modélisation Grafcet des séquences d\'états et temporisations.'
        },
        {
          titre: 'Projet Pilomo — Robot suiveur de ligne',
          desc: 'Robot autonome conçu et programmé durant le BUT GEII. Conception de la carte de puissance, capteurs IR, commande PWM. 1ère place au concours IUT de Cherbourg.'
        },
        {
          titre: 'Vie associative — BDE',
          desc: 'Président du BDE du département GEII 2022-2023. Organisation d\'événements : tournoi de football, BBQ, accueil des premières années.'
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
          desc: 'Génie Physique et Systèmes Embarqués. Électronique HF, STM32/FreeRTOS, systèmes temps réel, instrumentation, traitement du signal, conception PCB.',
          lien: '/experience/ensicaen'
        },
        {
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Alternant — Développement Firmware',
          desc: 'Développement en Python de tests automatisés pour la validation firmware UWB et NFC. Contribution à la fonction "describe" permettant la lecture automatique de la configuration des bancs de test. Git et Jira en environnement Agile.',
          lien: '/experience/nxp'
        },
        {
          date: '2023 – 2024',
          company: 'EDF CNPE Flamanville',
          role: 'Alternant — Service Conduite',
          desc: 'Automatisation en VBA de la rédaction des états de la centrale lors des changements de quart. Troisième année de BUT GEII en alternance sur la centrale EPR de Flamanville.',
          lien: '/experience/edf'
        },
        {
          date: 'Avr – Juin 2023',
          company: 'EDF CNPE Flamanville',
          role: 'Stagiaire — Service Conduite',
          desc: 'Conception et mise au point des vues industrielles de la salle de commande, permettant une supervision à distance. Stage de fin de deuxième année de BUT GEII.',
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
      sub: 'Étudiant ingénieur à l\'ENSICAEN, passionné de systèmes embarqués et toujours à l\'affût des nouvelles technologies. Ouvert à tout échange enrichissant.',
      dispo: 'Disponible · Ouvert aux opportunités',
      nom: 'Nom',
      email: 'Email',
      message: 'Message',
      envoyer: 'Envoyer',
      success: 'Message envoyé !',
      success_sub: 'Je vous répondrai dans les meilleurs délais.'
    },
    cv_url: 'assets/CV Zoran CHIRU.pdf',

    /* ------------------------------------------
       PAGE ROBOT
       ------------------------------------------ */
    robot: {
      badge: 'Robotique · BUT GEII · 2021–2022',
      h1_1: 'Projet Pilomo',
      h1_2: 'Robot suiveur de ligne',
      meta_equipe: 'Équipe — 4 membres',
      meta_duree: 'Durée — ~8 semaines',
      meta_robot: 'Projet Pilomo · IUT Cherbourg',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Un projet complet de A à Z',
      contexte_p1: 'Durant le second semestre de première année de BUT GEII à l\'IUT de Cherbourg, notre équipe a conçu et programmé un robot mobile autonome capable de suivre une ligne blanche au sol. Le projet couvrait l\'ensemble de la chaîne — de la conception de la carte électronique de puissance à la programmation des comportements du robot.',
      contexte_p2: 'Le châssis nous était fourni. L\'essentiel du travail portait sur la conception et le soudage de la carte de puissance, le câblage des capteurs et la logique de contrôle Arduino.',
      archi_eyebrow: 'Architecture technique',
      archi_titre: 'Conception électronique',
      archi_p: 'Le robot repose sur deux cartes distinctes : une carte de commande Arduino et une carte de puissance entièrement conçue, routée et soudée par notre équipe, intégrant un régulateur 78L05 et un transistor MOSFET BUZ11 pour la commande des moteurs. Quatre capteurs GP2D/GP2G alignés sous le châssis détectent la ligne blanche par réflexion infrarouge.',
      photo1_caption: 'Vue générale — capteurs GP2D/GP2G et carte de puissance visibles',
      photo_pcb_caption: 'Conception de la carte de puissance — Projet Pilomo',
      photo_test_caption: 'Tests de composants — sélection du driver moteur',
      photo_equipe_caption: 'Jour de la compétition — IUT Cherbourg',
      code_eyebrow: 'Programmation',
      code_titre: 'Logique de contrôle Arduino',
      code_p: 'Le programme lit les valeurs analogiques des capteurs GP2G, les convertit en distance via une fonction de calibration (loi puissance a×v^b), puis ajuste les vitesses PWM des moteurs gauche et droit. La fréquence PWM a été modifiée via les registres TCCR0B pour une meilleure réponse moteur.',
      resultats_eyebrow: 'Résultats',
      resultats_titre: '1ère place au concours IUT',
      resultats_p: 'Le jour de la compétition, notre robot a remporté la première place. Notre stratégie gagnante : l\'implémentation d\'un raccourci sur la piste que peu d\'équipes ont eu le temps de développer. Les statuettes à renverser représentaient des points bonus — l\'objectif principal restait la vitesse sur le parcours.',
      video1_caption: 'Compétition IUT Cherbourg — 1er passage',
      video2_caption: 'Raccourci sur piste — stratégie gagnante',
    },

    /* ------------------------------------------
       PAGE GRAFCET
       ------------------------------------------ */
    grafcet: {
      badge: 'Automatisme · BUT GEII · 2022–2023',
      h1_1: 'Feu tricolore',
      h1_2: 'en Grafcet',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'De la carte à l\'automate',
      contexte_p1: 'En deuxième année de BUT GEII, on nous a demandé de concevoir un feu tricolore fonctionnel de A à Z — concevoir et souder la carte électronique, programmer l\'automate Schneider et modéliser le comportement en Grafcet.',
      contexte_p2: 'Le projet couvrait deux volets bien distincts : le hardware avec la carte de signalisation LED, et le software avec la logique de commande sur automate industriel.',
      photo1_caption: 'Vue d\'ensemble — automate Schneider, alimentation et cartes LED',
      realisation_eyebrow: 'Réalisation électronique',
      realisation_titre: 'Carte de signalisation soudée à la main',
      realisation_p1: 'La carte regroupe les LED rouge, orange et verte directement commandées par les sorties de l\'automate. Chaque couleur correspond à un état du Grafcet — une relation directe entre la logique programmée et le composant physique.',
      realisation_p2: 'L\'automate Schneider gère les temporisations et les transitions : rouge → vert → orange → rouge, avec des durées paramétrables. Une petite carte annexe assure le conditionnement des signaux entre le 24V de l\'automate et les LED.',
      photo2_caption: 'Carte de signalisation LED — soudage et assemblage',
      modelisation_eyebrow: 'Modélisation Grafcet',
      modelisation_titre: 'La logique derrière le feu',
      modelisation_p1: 'Le Grafcet est un formalisme graphique qui décrit le comportement séquentiel d\'un automatisme. Chaque étape représente un état stable — "feu rouge allumé" par exemple — et les transitions définissent les conditions pour passer à l\'étape suivante : une temporisation écoulée, un signal reçu.',
      modelisation_p2: 'Notre Grafcet modélise le cycle complet avec gestion des temporisations et un mode dégradé en clignotement orange. Tout ça programmé de mémoire directement sur l\'automate Schneider.',
      photo3_caption: 'Phase de tests et validation du fonctionnement',
      video_caption: 'Démonstration du fonctionnement — feu tricolore en Grafcet',
    },

    /* ------------------------------------------
       PAGE MÉTÉO
       ------------------------------------------ */
    meteo: {
      badge: 'Électronique · BUT GEII · 2022–2023',
      h1_1: 'Station météo',
      h1_2: 'embarquée',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Mesurer, filtrer, afficher',
      contexte_p1: 'Ce projet de milieu de deuxième année avait un objectif simple : concevoir une station météo embarquée capable de mesurer température et humidité, traiter les données et les afficher sur une petite IHM rouge intégrée.',
      contexte_p2: 'L\'idée derrière la génération de données synthétiques était pratique : éviter d\'avoir à sortir relever des mesures en extérieur à chaque TP. Une fois le système en place, on paramètre les données directement.',
      photo1_caption: 'Station météo complète avec IHM intégrée',
      archi_eyebrow: 'Interface & affichage',
      archi_titre: 'Une petite IHM rouge pour tout afficher',
      archi_p1: 'L\'interface d\'affichage — un petit écran rouge — montre en temps réel les valeurs de température et d\'humidité mesurées par les capteurs. Simple, lisible, efficace.',
      archi_p2: 'Le système gère aussi un historique des mesures et peut basculer entre données réelles et données synthétiques selon les besoins du TP.',
      photo2_caption: 'Interface d\'affichage — IHM rouge en fonctionnement',
      galerie_eyebrow: 'Traitement du signal',
      galerie_titre: 'Filtrer le bruit des capteurs',
      photo3_caption: 'Analyse et filtration des signaux capteurs',
      filtre_p1: 'Les capteurs renvoient des signaux analogiques bruts qui contiennent du bruit. Des filtres sont appliqués pour stabiliser les mesures avant affichage — sans filtrage, les valeurs sautent en permanence.',
      filtre_p2: 'Pour éviter d\'aller relever des données dehors à chaque TP, le système génère aussi des données synthétiques paramétrables. Une petite astuce qui a bien rendu service.',
      photo4_caption: 'Validation du système lors des tests',
    },

    /* ------------------------------------------
       PAGE AUTOMATISMES
       ------------------------------------------ */
    automatismes: {
      badge: 'Automatisme · BUT GEII · 2021–2024',
      h1_1: 'Automatismes',
      h1_2: 'industriels',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Trois ans de systèmes de contrôle',
      contexte_p: 'La spécialité Automatisme du BUT GEII, c\'est trois ans à travailler sur des systèmes industriels réels : asservir un moteur, programmer une interface opérateur, mettre des machines en réseau. Des compétences directement applicables en industrie.',
      p1_eyebrow: 'Projet 1',
      p1_titre: 'Asservissement moteur sur automate',
      p1_p1: 'Mise en place d\'une boucle d\'asservissement en position et en vitesse sur un moteur DC commandé par automate industriel. Le système intègre un encodeur pour la mesure du retour et un correcteur PID.',
      p1_p2: 'L\'objectif : obtenir une réponse précise et stable sans dépassement excessif, en ajustant les paramètres du correcteur par méthode expérimentale.',
      p1_caption: 'Système d\'asservissement moteur sur automate',
      p2_eyebrow: 'Projet 2',
      p2_titre: 'Interfaces Homme-Machine',
      p2_p1: 'Conception et programmation d\'IHM permettant à un opérateur de superviser et contrôler un procédé industriel. Les vues incluent des synoptiques animés, des courbes de tendance et des alarmes.',
      p2_p2: 'Un travail similaire à ce que j\'ai réalisé en stage chez EDF CNPE Flamanville pour la salle de commande de la centrale EPR.',
      p2_caption1: 'Interface opérateur — supervision et contrôle',
      p2_caption2: 'Vue de supervision — second écran opérateur',
      p2_caption3: 'Architecture réseau maître/esclave',
      p3_eyebrow: 'Projet 3',
      p3_titre: 'Réseau industriel maître / esclave',
      p3_p1: 'Mise en réseau de plusieurs machines en architecture maître/esclave. L\'automate maître coordonne les échanges de données avec les esclaves et surveille l\'état de chaque nœud du réseau.',
      p3_p2: 'Ce type d\'architecture est au cœur des systèmes SCADA utilisés dans les usines, les centrales d\'énergie et les infrastructures critiques.',
    },

    /* ------------------------------------------
       PAGE DISTRIBUTEUR
       ------------------------------------------ */
    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – En cours',
      h1_1: 'Distributeur',
      h1_2: 'à croquettes',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Un projet IoT personnel de bout en bout',
      contexte_p1: 'Depuis ma première année à l\'ENSICAEN, je conçois un distributeur automatique de nourriture pour chat. Ce projet personnel me sert de terrain d\'application pour tout ce qu\'on voit en cours : conception PCB, programmation ESP32, gestion de l\'énergie et communication sans fil.',
      contexte_p2: 'Le système est pensé pour fonctionner en autonomie complète : panneau solaire, batterie AGM, sans aucune intervention quotidienne.',
      photo1_caption: 'Modélisation 3D du distributeur automatique',
      archi_eyebrow: 'Architecture électronique',
      archi_titre: 'Gestion d\'énergie en 6 blocs',
      archi_p: 'La carte d\'alimentation est organisée en 6 blocs fonctionnels : collecte via panneau photovoltaïque, stockage batterie AGM, régulation de charge avec LM317, conversion DC/DC avec LM2596, protection et distribution vers les charges. Chaque bloc a un rôle précis dans la chaîne.',
    },

    /* ------------------------------------------
       PAGE NXP
       ------------------------------------------ */
    nxp: {
      badge: 'Firmware · NXP Semiconductors · 2024–2025',
      h1_1: 'Validation UWB / NFC',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Dans les coulisses des puces sans fil',
      contexte_p1: 'NXP Semiconductors — leurs puces équipent des systèmes de paiement sans contact, des voitures connectées et des infrastructures industrielles partout dans le monde. J\'ai rejoint leur équipe de validation firmware à Caen dans le cadre de ma première année d\'alternance à l\'ENSICAEN.',
      contexte_p2: 'Le travail consistait à tester et valider le firmware sur des puces UWB (Ultra Wide Band) et NFC (Near Field Communication), deux technologies aux applications très différentes : le NFC pour les transactions courte portée, l\'UWB pour la localisation précise.',
      photo_caption: 'Poste de travail — développement et validation firmware',
      mission_eyebrow: 'Mission principale',
      mission_titre: 'Lire le banc de test sans l\'user',
      mission_p1: 'Les bancs de test ont une mémoire de configuration qui s\'use à chaque écriture. À chaque session, les ingénieurs devaient réécrire manuellement la configuration — une opération répétitive qui réduit la durée de vie des puces.',
      mission_p2: 'J\'ai développé en Python une fonction "describe" qui lit automatiquement l\'état du banc : quelles cartes sont connectées, quelles puces sont présentes, quelle configuration est active. Résultat affiché clairement, sans écrire une seule fois en mémoire.',
      archi_eyebrow: 'Environnement de travail',
      archi_titre: 'Agile, Git et beaucoup de Python',
      archi_p: 'Sprints de deux semaines, revues de code régulières, suivi sur Jira. Chaque fonctionnalité passait par une branche Git dédiée avant d\'être intégrée. Un environnement professionnel qui m\'a appris autant sur les méthodes de travail que sur la technique.',
    },

    /* ------------------------------------------
       PAGE BDE
       ------------------------------------------ */
    bde: {
      badge: 'Vie associative · IUT Cherbourg · 2022–2023',
      h1_1: 'Président du BDE',
      h1_2: 'département GEII',
      contexte_eyebrow: 'Engagement',
      contexte_titre: 'Une année à la tête du BDE GEII',
      contexte_p1: 'En deuxième année de BUT GEII, j\'ai été élu président du Bureau des Étudiants du département GEII de l\'IUT de Cherbourg. Ce rôle m\'a permis de développer des compétences en leadership, organisation et communication bien au-delà du cadre technique.',
      contexte_p2: 'En parallèle des cours, j\'ai coordonné une équipe de bénévoles pour organiser plusieurs événements qui ont marqué la vie du département cette année-là.',
      ev1_eyebrow: 'Événement 1',
      ev1_titre: 'Tournoi de football inter-promotions',
      ev1_p1: 'Organisation d\'un tournoi de football réunissant toutes les promotions du département GEII. Logistique, inscriptions, communication, tout était géré par le BDE.',
      ev1_p2: 'Le tournoi a créé des liens entre les étudiants de première, deuxième et troisième années qui ne se côtoyaient pas forcément au quotidien.',
      ev1_caption: 'Tournoi de football BDE GEII — IUT Cherbourg',
      ev2_eyebrow: 'Événement 2',
      ev2_titre: 'Barbecue de fin d\'année',
      ev2_p1: 'Organisation du BBQ de fin d\'année — étudiants, enseignants et personnel administratif réunis pour clôturer l\'année dans une bonne ambiance. Gestion du budget, des approvisionnements et de la logistique sur site.',
      ev2_p2: 'Un moment convivial qui a rassemblé l\'ensemble de la communauté GEII.',
      ev2_caption: 'Barbecue de fin d\'année — département GEII',
      ev3_eyebrow: 'Événement 3',
      ev3_titre: 'Accueil des premières années',
      ev3_p1: 'Organisation de la journée d\'accueil et d\'intégration des nouveaux étudiants. Présentation du département, des ressources disponibles, de la vie étudiante à Cherbourg.',
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
      desc: 'Engineering student at ENSICAEN — GPSE, passionate about embedded electronics, programming and new technologies. Currently looking for a minimum 9-week internship abroad.',
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
          desc: 'ESP32-controlled automatic feeder. Real-time weighing via load cells, autonomous power with 6-block energy management.'
        },
        {
          titre: 'Showcase website — MB Auto',
          desc: 'Showcase website for an independent mechanic. Clean design, service presentation, contact form. Built with Wix.'
        },
        {
          titre: 'UWB / NFC Validation — NXP',
          desc: 'Development of an automatic test bench configuration reader for UWB/NFC validation, reducing repetitive ROM writes.'
        },
        {
          titre: 'Industrial robotic arm',
          desc: '6-hour project at the end of BUT GEII second year: setting up a robotic arm for future lab sessions. Movement simulation and real-world industrial tool demonstration.'
        },
        {
          titre: 'Industrial automation — BUT GEII',
          desc: 'Motor control on PLC, HMI programming and master/slave network architecture between machines.'
        },
        {
          titre: 'Embedded weather station',
          desc: 'Weather station measuring temperature and humidity. Signal filtering, integrated HMI display, synthetic data for lab sessions.'
        },
        {
          titre: 'Traffic light in Grafcet',
          desc: 'Electronic board design and Schneider PLC programming. Grafcet modeling of state sequences and timers.'
        },
        {
          titre: 'Pilomo Project — Line following robot',
          desc: 'Autonomous robot designed during BUT GEII. Power board design, IR sensors, PWM motor control. 1st place at IUT Cherbourg competition.'
        },
        {
          titre: 'Student life — BDE',
          desc: 'President of the GEII student union 2022-2023. Events: football tournament, BBQ, welcome day for new students.'
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
          desc: 'Physical Engineering and Embedded Systems. RF electronics, STM32/FreeRTOS, real-time systems, instrumentation, signal processing, PCB design.',
          lien: '/experience/ensicaen'
        },
        {
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Apprentice — Firmware Development',
          desc: 'Python test automation for UWB and NFC firmware validation. Developed the "describe" function for automatic test bench configuration reading. Git and Jira in an Agile environment.',
          lien: '/experience/nxp'
        },
        {
          date: '2023 – 2024',
          company: 'EDF CNPE Flamanville',
          role: 'Apprentice — Operations',
          desc: 'VBA automation of shift handover reports at the EPR nuclear power plant. Third year of BUT GEII work-study program.',
          lien: '/experience/edf'
        },
        {
          date: 'Apr – Jun 2023',
          company: 'EDF CNPE Flamanville',
          role: 'Intern — Operations',
          desc: 'Design and development of industrial control room views for remote supervision. End-of-year internship, 2nd year of BUT GEII.',
          lien: '/experience/edf'
        },
        {
          date: '2021 – 2024',
          company: 'IUT Cherbourg — GON',
          role: 'BUT GEII — Automation & Industrial IT',
          desc: 'Electrical engineering, power electronics, automation and embedded programming. Student union president 2022-2023. 1st prize line-following robot competition.',
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
      sub: 'Engineering student at ENSICAEN, passionate about embedded systems and always keeping up with new technologies. Currently looking for a minimum 9-week internship abroad.',
      dispo: 'Available · Looking for a 9-week+ internship abroad',
      nom: 'Name',
      email: 'Email',
      message: 'Message',
      envoyer: 'Send',
      success: 'Message sent!',
      success_sub: 'I\'ll get back to you as soon as possible.'
    },
    cv_url: 'assets/Resume_internship_Zoran_CHIRU.pdf',

    robot: {
      badge: 'Robotics · BUT GEII · 2021–2022',
      h1_1: 'Pilomo Project',
      h1_2: 'Line following robot',
      meta_equipe: 'Team — 4 members',
      meta_duree: 'Duration — ~8 weeks',
      meta_robot: 'Pilomo Project · IUT Cherbourg',
      contexte_eyebrow: 'Context',
      contexte_titre: 'A full end-to-end project',
      contexte_p1: 'During the second semester of our first year of BUT GEII at IUT Cherbourg, our team designed and programmed an autonomous mobile robot capable of following a white line on the ground. The project covered the entire chain — from power board design to robot behavior programming.',
      contexte_p2: 'The chassis was provided. The main work focused on designing and soldering the power board, wiring the sensors and implementing the Arduino control logic.',
      archi_eyebrow: 'Technical architecture',
      archi_titre: 'Electronic design',
      archi_p: 'The robot uses two boards: an Arduino control board and a power board fully designed, routed and soldered by our team, featuring a 78L05 regulator and a BUZ11 MOSFET transistor. Four GP2D/GP2G sensors aligned under the chassis detect the white line by infrared reflection.',
      photo1_caption: 'General view — GP2D/GP2G sensors and power board visible',
      photo_pcb_caption: 'Power board design — Pilomo Project',
      photo_test_caption: 'Component testing — motor driver selection',
      photo_equipe_caption: 'Competition day — IUT Cherbourg',
      code_eyebrow: 'Programming',
      code_titre: 'Arduino control logic',
      code_p: 'The program reads analog values from GP2G sensors, converts them to distance using a power-law calibration function (a×v^b), then adjusts PWM speeds for left and right motors. PWM frequency was modified via TCCR0B registers for better motor response.',
      resultats_eyebrow: 'Results',
      resultats_titre: '1st place at IUT competition',
      resultats_p: 'On competition day, our robot took first place. Our winning strategy: implementing a track shortcut that few teams had time to develop. Knocking over figurines earned bonus points — but speed on the track was the main objective.',
      video1_caption: 'IUT Cherbourg competition — 1st run',
      video2_caption: 'Track shortcut — winning strategy',
    },

    grafcet: {
      badge: 'Automation · BUT GEII · 2022–2023',
      h1_1: 'Traffic light',
      h1_2: 'in Grafcet',
      contexte_eyebrow: 'Context',
      contexte_titre: 'From board to PLC',
      contexte_p1: 'In the second year of BUT GEII, we were asked to design a fully functional traffic light from scratch — design and solder the electronic board, program the Schneider PLC and model the behavior in Grafcet.',
      contexte_p2: 'The project covered two distinct parts: the hardware with the LED signaling board, and the software with the control logic on the industrial PLC.',
      photo1_caption: 'Overview — Schneider PLC, power supply and LED boards',
      realisation_eyebrow: 'Electronics',
      realisation_titre: 'Hand-soldered signaling board',
      realisation_p1: 'The board groups red, orange and green LEDs directly controlled by the PLC outputs. Each color corresponds to a Grafcet state — a direct link between the programmed logic and the physical component.',
      realisation_p2: 'The Schneider PLC manages timers and transitions: red → green → orange → red, with configurable durations. An auxiliary board handles signal conditioning between the 24V PLC and the LEDs.',
      photo2_caption: 'LED signaling board — soldering and assembly',
      modelisation_eyebrow: 'Grafcet modeling',
      modelisation_titre: 'The logic behind the light',
      modelisation_p1: 'Grafcet is a graphical formalism describing the sequential behavior of an automation system. Each step represents a stable state — "red light on" for example — and transitions define the conditions to move to the next step.',
      modelisation_p2: 'Our Grafcet models the complete cycle with timer management and a degraded orange blinking mode. All programmed from memory directly on the Schneider PLC.',
      photo3_caption: 'Testing and validation phase',
      video_caption: 'Demonstration — traffic light in Grafcet',
    },

    meteo: {
      badge: 'Electronics · BUT GEII · 2022–2023',
      h1_1: 'Embedded',
      h1_2: 'weather station',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Measure, filter, display',
      contexte_p1: 'This mid-second-year project had a straightforward goal: design an embedded weather station capable of measuring temperature and humidity, processing the data and displaying it on a small integrated red HMI.',
      contexte_p2: 'The idea behind synthetic data generation was practical: avoid having to go outside to collect measurements for each lab session. Once the system is set up, you configure the data directly.',
      photo1_caption: 'Complete weather station with integrated HMI',
      archi_eyebrow: 'Interface & display',
      archi_titre: 'A small red HMI to display everything',
      archi_p1: 'The display interface — a small red screen — shows real-time temperature and humidity values measured by the sensors. Simple, readable, effective.',
      archi_p2: 'The system also manages a measurement history and can switch between real and synthetic data depending on lab session needs.',
      photo2_caption: 'Display interface — red HMI in operation',
      galerie_eyebrow: 'Signal processing',
      galerie_titre: 'Filtering sensor noise',
      photo3_caption: 'Signal analysis and filtering',
      filtre_p1: 'Sensors return raw analog signals that contain noise. Filters are applied to stabilize measurements before display — without filtering, values jump constantly.',
      filtre_p2: 'To avoid going outside to collect data for each lab session, the system also generates configurable synthetic data. A handy trick that saved a lot of time.',
      photo4_caption: 'System validation during testing',
    },

    automatismes: {
      badge: 'Automation · BUT GEII · 2021–2024',
      h1_1: 'Industrial',
      h1_2: 'automation',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Three years of control systems',
      contexte_p: 'The Automation specialization of BUT GEII means three years working on real industrial systems: controlling a motor, programming an operator interface, networking machines together. Skills directly applicable in industry.',
      p1_eyebrow: 'Project 1',
      p1_titre: 'Motor control on PLC',
      p1_p1: 'Implementation of a position and speed control loop on a DC motor controlled by an industrial PLC. The system integrates an encoder for feedback measurement and a PID controller.',
      p1_p2: 'The goal: achieve a precise and stable response without excessive overshoot, by adjusting controller parameters experimentally.',
      p1_caption: 'Motor control system on PLC',
      p2_eyebrow: 'Project 2',
      p2_titre: 'Human-Machine Interfaces',
      p2_p1: 'Design and programming of HMIs allowing an operator to supervise and control an industrial process. Views include animated synoptics, trend curves and alarms.',
      p2_p2: 'Similar work to what I did during my internship at EDF CNPE Flamanville for the control room of the EPR nuclear plant.',
      p2_caption1: 'Operator interface — supervision and control',
      p2_caption2: 'Supervision view — second operator screen',
      p2_caption3: 'Master/slave network architecture',
      p3_eyebrow: 'Project 3',
      p3_titre: 'Industrial master/slave network',
      p3_p1: 'Networking of multiple machines in a master/slave architecture. The master PLC coordinates data exchanges with slaves and monitors each network node.',
      p3_p2: 'This architecture is at the heart of SCADA systems used in factories, power plants and critical infrastructure.',
    },

    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – In progress',
      h1_1: 'Automatic',
      h1_2: 'cat feeder',
      contexte_eyebrow: 'Context',
      contexte_titre: 'A personal end-to-end IoT project',
      contexte_p1: 'Since my first year at ENSICAEN, I\'ve been designing an automatic cat food dispenser. This personal project is my test ground for everything covered in class: PCB design, ESP32 programming, energy management and wireless communication.',
      contexte_p2: 'The system is designed for complete autonomy : solar panel, AGM battery, no daily intervention required.',
      photo1_caption: '3D modeling of the automatic dispenser',
      archi_eyebrow: 'Electronic architecture',
      archi_titre: '6-block energy management',
      archi_p: 'The power board is organized into 6 functional blocks: collection via photovoltaic panel, AGM battery storage, charge regulation with LM317, DC/DC conversion with LM2596, protection and distribution to loads. Each block has a precise role in the chain.',
    },

    nxp: {
      badge: 'Firmware · NXP Semiconductors · 2024–2025',
      h1_1: 'UWB / NFC Validation',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Behind the scenes of wireless chips',
      contexte_p1: 'NXP Semiconductors — their chips power contactless payment systems, connected cars and industrial infrastructure worldwide. I joined their firmware validation team in Caen as part of my first year of work-study at ENSICAEN.',
      contexte_p2: 'The work involved testing and validating firmware on UWB (Ultra Wide Band) and NFC (Near Field Communication) chips, two technologies with very different applications: NFC for short-range transactions, UWB for precise location.',
      photo_caption: 'Workstation — UWB/NFC firmware development and validation',
      mission_eyebrow: 'Main mission',
      mission_titre: 'Reading the test bench without wearing it out',
      mission_p1: 'Test benches have a configuration memory that wears with each write. Each session, engineers had to manually rewrite the configuration — a repetitive operation that reduces chip lifespan.',
      mission_p2: 'I developed a Python "describe" function that automatically reads the bench state: which boards are connected, which chips are present, what configuration is active. Result displayed clearly, without writing to memory even once.',
      archi_eyebrow: 'Work environment',
      archi_titre: 'Agile, Git and a lot of Python',
      archi_p: 'Two-week sprints, regular code reviews, progress tracking on Jira. Each feature went through a dedicated Git branch before integration. A professional environment that taught me as much about working methods as about the technical side.',
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
      ev1_titre: 'Inter-year football tournament',
      ev1_p1: 'Organization of a football tournament bringing together all GEII department year groups. Logistics, registrations, communication — all managed by the student union.',
      ev1_p2: 'The tournament created bonds between first, second and third year students who didn\'t necessarily cross paths day to day.',
      ev1_caption: 'GEII BDE football tournament — IUT Cherbourg',
      ev2_eyebrow: 'Event 2',
      ev2_titre: 'End-of-year BBQ',
      ev2_p1: 'Organization of the end-of-year BBQ — students, teachers and administrative staff gathered to close the year on a good note. Budget management, supply procurement and on-site logistics.',
      ev2_p2: 'A convivial moment that brought the entire GEII community together.',
      ev2_caption: 'End-of-year BBQ — GEII department',
      ev3_eyebrow: 'Event 3',
      ev3_titre: 'First-year student welcome day',
      ev3_p1: 'Organization of the welcome and integration day for new students. Presentation of the department, available resources, student life in Cherbourg.',
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
      desc: 'Student inginer la ENSICAEN — GPSE, pasionat de electronică încorporată, programare și tehnologii noi. În căutarea unui stagiu de minimum 9 săptămâni în străinătate.',
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
          desc: 'Distribuitor controlat de ESP32. Cântărire în timp real, alimentare autonomă cu 6 blocuri de gestionare a energiei.'
        },
        {
          titre: 'Site de prezentare — MB Auto',
          desc: 'Site de prezentare pentru un mecanic independent. Design curat, servicii, formular de contact. Realizat pe Wix.'
        },
        {
          titre: 'Validare UWB / NFC — NXP',
          desc: 'Dezvoltarea unei funcții de citire automată a configurației bancurilor de test UWB/NFC, reducând scrierile repetitive în memoria ROM.'
        },
        {
          titre: 'Braț robotic industrial',
          desc: 'Proiect de 6 ore la sfârșitul celui de-al doilea an BUT GEII: configurarea unui braț robotic pentru viitoarele lucrări practice. Simularea mișcărilor și demonstrarea instrumentelor industriale reale.'
        },
        {
          titre: 'Automatizări BUT GEII',
          desc: 'Reglaj motor pe automat, programare interfețe om-mașină și rețea maestru/sclav între mașini industriale.'
        },
        {
          titre: 'Stație meteo încorporată',
          desc: 'Stație meteo pentru temperatură și umiditate. Filtrare semnale, afișaj IHM integrat, date sintetice pentru lucrările practice.'
        },
        {
          titre: 'Semafor în Grafcet',
          desc: 'Proiectarea plăcii electronice și programarea unui automat Schneider. Modelare Grafcet a secvențelor de stări și temporizări.'
        },
        {
          titre: 'Proiectul Pilomo — Robot urmăritor de linie',
          desc: 'Robot autonom proiectat în timpul BUT GEII. Proiectarea plăcii de putere, senzori IR, control PWM. Locul 1 la concursul IUT Cherbourg.'
        },
        {
          titre: 'Viață asociativă — BDE',
          desc: 'Președinte al asociației studențești GEII 2022-2023. Evenimente: turneu de fotbal, BBQ, primirea studenților din primul an.'
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
          desc: 'Inginerie Fizică și Sisteme Incorporate. Electronică RF, STM32/FreeRTOS, sisteme în timp real, instrumentare, procesarea semnalelor, proiectare PCB.',
          lien: '/experience/ensicaen'
        },
        {
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Apprentice — Dezvoltare Firmware',
          desc: 'Automatizare teste Python pentru validarea firmware UWB și NFC. Dezvoltarea funcției "describe" pentru citirea automată a configurației bancurilor de test. Git și Jira în mediu Agile.',
          lien: '/experience/nxp'
        },
        {
          date: '2023 – 2024',
          company: 'EDF CNPE Flamanville',
          role: 'Apprentice — Serviciu Conducere',
          desc: 'Automatizare VBA a rapoartelor de schimb la centrala nucleară EPR Flamanville. Al treilea an de BUT GEII în alternance.',
          lien: '/experience/edf'
        },
        {
          date: 'Apr – Iun 2023',
          company: 'EDF CNPE Flamanville',
          role: 'Stagiar — Serviciu Conducere',
          desc: 'Proiectarea vederilor industriale ale sălii de comandă pentru supraveghere la distanță. Stagiu de sfârșit al celui de-al doilea an de BUT GEII.',
          lien: '/experience/edf'
        },
        {
          date: '2021 – 2024',
          company: 'IUT Cherbourg — GON',
          role: 'BUT GEII — Automatizare & Informatică Industrială',
          desc: 'Inginerie electrică, electronică de putere, automatizări și programare încorporată. Președinte asociație studențească 2022-2023. Locul 1 concurs robot urmăritor de linie.',
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
      sub: 'Student inginer la ENSICAEN, pasionat de sisteme incorporate și mereu la curent cu noile tehnologii. În căutarea unui stagiu de minimum 9 săptămâni în străinătate.',
      dispo: 'Disponibil · Caut un stagiu de min. 9 săptămâni în străinătate',
      nom: 'Nume',
      email: 'Email',
      message: 'Mesaj',
      envoyer: 'Trimite',
      success: 'Mesaj trimis!',
      success_sub: 'Îți voi răspunde cât mai curând.'
    },
    cv_url: 'assets/CV Zoran CHIRU Romania.pdf',

    robot: {
      badge: 'Robotică · BUT GEII · 2021–2022',
      h1_1: 'Proiectul Pilomo',
      h1_2: 'Robot urmăritor de linie',
      meta_equipe: 'Echipă — 4 membri',
      meta_duree: 'Durată — ~8 săptămâni',
      meta_robot: 'Proiectul Pilomo · IUT Cherbourg',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Un proiect complet de la A la Z',
      contexte_p1: 'În al doilea semestru al primului an de BUT GEII la IUT Cherbourg, echipa noastră a proiectat și programat un robot mobil autonom capabil să urmeze o linie albă pe sol. Proiectul a acoperit întregul lanț — de la proiectarea plăcii de putere până la programarea comportamentelor robotului.',
      contexte_p2: 'Șasiul ne-a fost furnizat. Munca principală s-a concentrat pe proiectarea și lipirea plăcii de putere, cablarea senzorilor și logica de control Arduino.',
      archi_eyebrow: 'Arhitectură tehnică',
      archi_titre: 'Proiectare electronică',
      archi_p: 'Robotul folosește două plăci: o placă de comandă Arduino și o placă de putere integral proiectată, rutată și lipită de echipa noastră, cu regulator 78L05 și tranzistor MOSFET BUZ11. Patru senzori GP2D/GP2G aliniați sub șasiu detectează linia albă prin reflexie infraroșie.',
      photo1_caption: 'Vedere generală — senzori GP2D/GP2G și placă de putere vizibile',
      photo_pcb_caption: 'Proiectarea plăcii de putere — Proiectul Pilomo',
      photo_test_caption: 'Teste de componente — selecția driverului de motor',
      photo_equipe_caption: 'Ziua competiției — IUT Cherbourg',
      code_eyebrow: 'Programare',
      code_titre: 'Logică de control Arduino',
      code_p: 'Programul citește valorile analogice ale senzorilor GP2G, le convertește în distanță printr-o funcție de calibrare (lege de putere a×v^b), apoi ajustează vitezele PWM ale motoarelor stâng și drept. Frecvența PWM a fost modificată prin registrele TCCR0B pentru un răspuns mai bun.',
      resultats_eyebrow: 'Rezultate',
      resultats_titre: 'Locul 1 la concursul IUT',
      resultats_p: 'În ziua competiției, robotul nostru a câștigat primul loc. Strategia noastră câștigătoare: implementarea unei scurtături pe pistă pe care puține echipe au avut timp să o dezvolte.',
      video1_caption: 'Competiție IUT Cherbourg — prima cursă',
      video2_caption: 'Scurtătură pe pistă — strategie câștigătoare',
    },

    grafcet: {
      badge: 'Automatizare · BUT GEII · 2022–2023',
      h1_1: 'Semafor',
      h1_2: 'în Grafcet',
      contexte_eyebrow: 'Context',
      contexte_titre: 'De la placă la automat',
      contexte_p1: 'În al doilea an de BUT GEII, ni s-a cerut să proiectăm un semafor funcțional de la zero — proiectarea și lipirea plăcii electronice, programarea automatului Schneider și modelarea comportamentului în Grafcet.',
      contexte_p2: 'Proiectul a acoperit două aspecte distincte: hardware-ul cu placa de semnalizare LED, și software-ul cu logica de comandă pe automatul industrial.',
      photo1_caption: 'Vedere de ansamblu — automat Schneider, alimentare și plăci LED',
      realisation_eyebrow: 'Electronică',
      realisation_titre: 'Placă de semnalizare lipită manual',
      realisation_p1: 'Placa grupează LED-urile roșu, portocaliu și verde comandate direct de ieșirile automatului. Fiecare culoare corespunde unei stări Grafcet — o legătură directă între logica programată și componenta fizică.',
      realisation_p2: 'Automatul Schneider gestionează temporizările și tranzițiile: roșu → verde → portocaliu → roșu. O placă auxiliară asigură condiționarea semnalelor între automatul de 24V și LED-uri.',
      photo2_caption: 'Placă de semnalizare LED — lipire și asamblare',
      modelisation_eyebrow: 'Modelare Grafcet',
      modelisation_titre: 'Logica din spatele semaforului',
      modelisation_p1: 'Grafcet este un formalism grafic care descrie comportamentul secvențial al unui sistem de automatizare. Fiecare etapă reprezintă o stare stabilă, iar tranzițiile definesc condițiile de trecere la etapa următoare.',
      modelisation_p2: 'Grafcet-ul nostru modelează ciclul complet cu gestionarea temporizărilor și un mod degradat de clipire portocalie. Totul programat din memorie direct pe automatul Schneider.',
      photo3_caption: 'Faza de teste și validare',
      video_caption: 'Demonstrație — semafor în Grafcet',
    },

    meteo: {
      badge: 'Electronică · BUT GEII · 2022–2023',
      h1_1: 'Stație meteo',
      h1_2: 'încorporată',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Măsoară, filtrează, afișează',
      contexte_p1: 'Acest proiect de mijlocul celui de-al doilea an avea un obiectiv simplu: proiectarea unei stații meteo încorporate capabilă să măsoare temperatura și umiditatea, să proceseze datele și să le afișeze pe un mic IHM roșu integrat.',
      contexte_p2: 'Ideea din spatele generării de date sintetice era practică: evitarea ieșirii afară pentru colectarea datelor la fiecare lucrare practică. Odată sistemul configurat, datele se parametrează direct.',
      photo1_caption: 'Stație meteo completă cu IHM integrat',
      archi_eyebrow: 'Interfață și afișare',
      archi_titre: 'Un mic IHM roșu pentru tot',
      archi_p1: 'Interfața de afișare — un mic ecran roșu — afișează în timp real valorile de temperatură și umiditate măsurate de senzori. Simplu, lizibil, eficient.',
      archi_p2: 'Sistemul gestionează și un istoric al măsurătorilor și poate comuta între date reale și date sintetice în funcție de nevoile lucrării practice.',
      photo2_caption: 'Interfață de afișare — IHM roșu în funcțiune',
      galerie_eyebrow: 'Procesarea semnalelor',
      galerie_titre: 'Filtrarea zgomotului senzorilor',
      photo3_caption: 'Analiza și filtrarea semnalelor senzorilor',
      filtre_p1: 'Senzorii returnează semnale analogice brute care conțin zgomot. Se aplică filtre pentru a stabiliza măsurătorile înainte de afișare — fără filtrare, valorile sar constant.',
      filtre_p2: 'Pentru a evita ieșirea afară pentru colectarea datelor la fiecare lucrare practică, sistemul generează și date sintetice configurabile. Un truc util care a economisit mult timp.',
      photo4_caption: 'Validarea sistemului în timpul testelor',
    },

    automatismes: {
      badge: 'Automatizare · BUT GEII · 2021–2024',
      h1_1: 'Automatizări',
      h1_2: 'industriale',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Trei ani de sisteme de control',
      contexte_p: 'Specializarea Automatizare din BUT GEII înseamnă trei ani de lucru pe sisteme industriale reale: reglarea unui motor, programarea unei interfețe operator, conectarea mașinilor în rețea. Competențe direct aplicabile în industrie.',
      p1_eyebrow: 'Proiect 1',
      p1_titre: 'Reglaj motor pe automat',
      p1_p1: 'Implementarea unei bucle de reglaj în poziție și viteză pe un motor DC comandat de un automat industrial. Sistemul integrează un encoder pentru măsurarea reacției și un corector PID.',
      p1_p2: 'Obiectivul: obținerea unui răspuns precis și stabil fără depășire excesivă, prin ajustarea parametrilor corectorului pe cale experimentală.',
      p1_caption: 'Sistem de reglaj motor pe automat',
      p2_eyebrow: 'Proiect 2',
      p2_titre: 'Interfețe Om-Mașină',
      p2_p1: 'Proiectarea și programarea IHM-urilor care permit unui operator să supravegheze și să controleze un proces industrial. Vederile includ sinoptice animate, curbe de tendință și alarme.',
      p2_p2: 'Un lucru similar cu ceea ce am realizat în timpul stagiului la EDF CNPE Flamanville pentru sala de comandă a centralei EPR.',
      p2_caption1: 'Interfață operator — supraveghere și control',
      p2_caption2: 'Vedere de supraveghere — al doilea ecran operator',
      p2_caption3: 'Arhitectură rețea maestru/sclav',
      p3_eyebrow: 'Proiect 3',
      p3_titre: 'Rețea industrială maestru/sclav',
      p3_p1: 'Conectarea în rețea a mai multor mașini în arhitectură maestru/sclav. Automatul maestru coordonează schimburile de date cu sclavii și monitorizează fiecare nod al rețelei.',
      p3_p2: 'Această arhitectură este la baza sistemelor SCADA utilizate în fabrici, centrale electrice și infrastructuri critice.',
    },

    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – În progres',
      h1_1: 'Distribuitor automat',
      h1_2: 'hrană pisică',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Un proiect IoT personal complet',
      contexte_p1: 'Din primul meu an la ENSICAEN, proiectez un distribuitor automat de hrană pentru pisică. Acest proiect personal este terenul meu de aplicare pentru tot ce acoperim în cursuri: proiectare PCB, programare ESP32, gestionare energie și comunicare wireless.',
      contexte_p2: 'Sistemul este proiectat pentru autonomie completă : panou solar, baterie AGM, fără nicio intervenție zilnică.',
      photo1_caption: 'Modelare 3D a distributorului automat',
      archi_eyebrow: 'Arhitectură electronică',
      archi_titre: 'Gestionare energie în 6 blocuri',
      archi_p: 'Placa de alimentare este organizată în 6 blocuri funcționale: colectare via panou fotovoltaic, stocare baterie AGM, reglare încărcare cu LM317, conversie DC/DC cu LM2596, protecție și distribuție către sarcini. Fiecare bloc are un rol precis în lanț.',
    },

    nxp: {
      badge: 'Firmware · NXP Semiconductors · 2024–2025',
      h1_1: 'Validare UWB / NFC',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Context',
      contexte_titre: 'În spatele cipurilor wireless',
      contexte_p1: 'NXP Semiconductors — cipurile lor echipează sisteme de plată fără contact, mașini conectate și infrastructuri industriale din întreaga lume. Am integrat echipa lor de validare firmware din Caen în cadrul primului meu an de alternance la ENSICAEN.',
      contexte_p2: 'Munca consta în testarea și validarea firmware-ului pe cipuri UWB și NFC, două tehnologii cu aplicații foarte diferite: NFC pentru tranzacții de proximitate, UWB pentru localizare precisă.',
      photo_caption: 'Stație de lucru — dezvoltare și validare firmware',
      mission_eyebrow: 'Misiunea principală',
      mission_titre: 'Citirea bancului de test fără a-l uza',
      mission_p1: 'Bancurile de test au o memorie de configurare care se uzează la fiecare scriere. La fiecare sesiune, inginerii trebuiau să rescrie manual configurația — o operație repetitivă care reduce durata de viață a cipurilor.',
      mission_p2: 'Am dezvoltat în Python o funcție "describe" care citește automat starea bancului: ce plăci sunt conectate, ce cipuri sunt prezente, ce configurație este activă. Rezultat afișat clar, fără a scrie o singură dată în memorie.',
      archi_eyebrow: 'Mediu de lucru',
      archi_titre: 'Agile, Git și mult Python',
      archi_p: 'Sprinturi de două săptămâni, revizuiri de cod regulate, urmărire progres pe Jira. Fiecare funcționalitate trecea printr-o ramură Git dedicată înainte de integrare. Un mediu profesional care m-a învățat la fel de mult despre metodele de lucru ca și despre tehnic.',
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
      ev1_titre: 'Turneu de fotbal inter-promoții',
      ev1_p1: 'Organizarea unui turneu de fotbal reunind toate promoțiile departamentului GEII. Logistică, înregistrări, comunicare — totul gestionat de asociație.',
      ev1_p2: 'Turneul a creat legături între studenții din primul, al doilea și al treilea an care nu se intersectau neapărat zilnic.',
      ev1_caption: 'Turneu fotbal BDE GEII — IUT Cherbourg',
      ev2_eyebrow: 'Eveniment 2',
      ev2_titre: 'Grătar de sfârșit de an',
      ev2_p1: 'Organizarea grătarului de sfârșit de an — studenți, profesori și personal administrativ reuniți pentru a încheia anul într-o atmosferă bună. Gestionarea bugetului, aprovizionărilor și logisticii.',
      ev2_p2: 'Un moment convivial care a reunit întreaga comunitate GEII.',
      ev2_caption: 'Grătar de sfârșit de an — departamentul GEII',
      ev3_eyebrow: 'Eveniment 3',
      ev3_titre: 'Primirea studenților din primul an',
      ev3_p1: 'Organizarea zilei de primire și integrare a noilor studenți. Prezentarea departamentului, resurselor disponibile, vieții studențești la Cherbourg.',
      ev3_p2: 'Obiectivul era să faciliteze integrarea și să ofere noilor veniți cheile pentru un start bun în formare.',
      ev3_caption: 'Ziua de primire a primului an — eveniment de integrare',
      presse_eyebrow: 'Presă',
      presse_titre: 'O muncă remarcată',
      presse_caption: 'Articol de presă — activitățile BDE GEII',
    }
  }
}

export default translations
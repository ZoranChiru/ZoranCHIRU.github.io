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
      titre: 'Projets',
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
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Alternant — Développement Firmware',
          desc: 'Développement en Python de tests automatisés pour la validation firmware UWB et NFC. Contribution à la fonction "describe" permettant la lecture automatique de la configuration des bancs de test. Utilisation de Git et Jira en environnement Agile.',
          lien: '/projets/nxp'
        },
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'École d\'ingénieur — GPSE',
          desc: 'Génie Physique et Systèmes Embarqués. Électronique HF, STM32/FreeRTOS, systèmes temps réel, instrumentation, traitement du signal, conception PCB.',
          lien: null
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
      titre: 'Compétences'
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
      galerie_eyebrow: 'Galerie',
      galerie_titre: 'Le robot en images',
      video1_caption: 'Compétition IUT Cherbourg — 1er passage',
      video2_caption: 'Raccourci sur piste — stratégie gagnante',
      photo1_caption: 'Vue générale — capteurs GP2D/GP2G et carte de puissance visibles',
      photo_pcb_caption: 'Conception de la carte de puissance — Projet Pilomo',
      photo_test_caption: 'Tests de composants — sélection du driver moteur',
      photo_equipe_caption: 'Jour de la compétition — IUT Cherbourg',
      archi_eyebrow: 'Architecture technique',
      archi_titre: 'Conception électronique',
      archi_p: 'Le robot repose sur deux cartes distinctes : une carte de commande Arduino et une carte de puissance entièrement conçue, routée et soudée par notre équipe, intégrant un régulateur 78L05 et un transistor MOSFET BUZ11 pour la commande des moteurs. Quatre capteurs GP2D/GP2G alignés sous le châssis détectent la ligne blanche par réflexion infrarouge.',
      code_eyebrow: 'Programmation',
      code_titre: 'Logique de contrôle Arduino',
      code_p: 'Le programme lit les valeurs analogiques des capteurs GP2G, les convertit en distance via une fonction de calibration (loi puissance a×v^b), puis ajuste les vitesses PWM des moteurs gauche et droit. La fréquence PWM a été modifiée via les registres TCCR0B pour une meilleure réponse moteur.',
      resultats_eyebrow: 'Résultats',
      resultats_titre: '1ère place au concours IUT',
      resultats_p: 'Le jour de la compétition, notre robot a remporté la première place. Notre stratégie gagnante : l\'implémentation d\'un raccourci sur la piste que peu d\'équipes ont eu le temps de développer. Les statuettes à renverser représentaient des points bonus — l\'objectif principal restait la vitesse sur le parcours.',
      nav_retour: '← Retour aux projets',
      nav_suivant: 'Feu tricolore Grafcet →'
    },

    /* ------------------------------------------
       PAGE GRAFCET
       ------------------------------------------ */
    grafcet: {
      badge: 'Automatisme · BUT GEII · 2022–2023',
      h1_1: 'Feu tricolore',
      h1_2: 'en Grafcet',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Automatisme & conception électronique',
      contexte_p1: 'Durant la deuxième année de BUT GEII, nous avons conçu et réalisé un système de feu tricolore complet — de la carte électronique jusqu\'à la logique de commande sur automate industriel Schneider Electric.',
      contexte_p2: 'Le projet couvrait deux volets distincts : la conception et le soudage des cartes de signalisation LED, et la modélisation du comportement en Grafcet implémentée sur automate.',
      realisation_eyebrow: 'Réalisation',
      realisation_titre: 'De la carte à l\'automate',
      realisation_p1: 'La carte de signalisation regroupe les LED rouge, orange et verte commandées directement par les sorties de l\'automate. Chaque couleur correspond à un état du Grafcet.',
      realisation_p2: 'L\'automate Schneider gère les temporisations et les transitions entre états : feu rouge → vert → orange → rouge. Une carte annexe assure le conditionnement des signaux entre l\'automate 24V et les LED.',
      galerie_eyebrow: 'Galerie',
      galerie_titre: 'Photos du projet',
      photo1_caption: 'Vue d\'ensemble — automate, alimentation et cartes LED',
      photo2_caption: 'Carte de signalisation LED — soudage et assemblage',
      photo3_caption: 'Phase de tests et validation du fonctionnement',
      modelisation_eyebrow: 'Modélisation',
      modelisation_titre: 'Le Grafcet',
      modelisation_p1: 'Le Grafcet est un formalisme graphique qui décrit le comportement séquentiel d\'un automatisme. Chaque étape représente un état stable du système, et les transitions définissent les conditions de passage d\'une étape à la suivante.',
      modelisation_p2: 'Notre Grafcet modélise le cycle complet avec gestion des temporisations et des modes normal et urgence (clignotement orange), implémenté sur l\'automate Schneider.',
      nav_retour: '← Projet Pilomo',
      nav_suivant: 'Station météo →'
    },

    /* ------------------------------------------
       PAGE MÉTÉO
       ------------------------------------------ */
    meteo: {
      badge: 'Électronique · BUT GEII · 2022–2023',
      h1_1: 'Station météo',
      h1_2: 'embarquée',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Mesure, filtrage et affichage',
      contexte_p1: 'Ce projet de deuxième année de BUT GEII avait pour objectif de concevoir une station météo embarquée autonome, capable d\'acquérir des données environnementales, de les traiter et de les afficher sur une IHM intégrée.',
      contexte_p2: 'L\'un des objectifs pédagogiques était de travailler sur le filtrage des signaux issus des capteurs pour obtenir des mesures fiables, tout en générant des données synthétiques pour les TPs suivants.',
      galerie_eyebrow: 'Galerie',
      galerie_titre: 'La station en images',
      photo1_caption: 'Station météo complète avec IHM d\'affichage',
      photo2_caption: 'Interface d\'affichage des mesures en temps réel',
      photo3_caption: 'Analyse et filtration des signaux capteurs',
      archi_eyebrow: 'Architecture technique',
      archi_titre: 'Acquisition & traitement',
      archi_p1: 'La chaîne d\'acquisition commence par les capteurs fournissant des signaux analogiques bruts. Ces signaux sont filtrés pour éliminer les perturbations avant d\'être numérisés et traités.',
      archi_p2: 'L\'IHM affiche en temps réel les valeurs de température et d\'humidité, avec un historique et des indicateurs visuels. Le système génère aussi des données synthétiques paramétrables pour les TPs.',
      photo4_caption: 'Validation du système lors des tests',
      nav_retour: '← Feu tricolore',
      nav_suivant: 'Automatismes →'
    },

    /* ------------------------------------------
       PAGE AUTOMATISMES
       ------------------------------------------ */
    automatismes: {
      badge: 'Automatisme · BUT GEII · 2021–2024',
      h1_1: 'Automatismes',
      h1_2: 'industriels',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Trois ans d\'automatisme industriel',
      contexte_p: 'La spécialité Automatisme du BUT GEII m\'a permis de travailler sur un large spectre de systèmes de contrôle-commande industriels : asservissement de moteurs, programmation d\'interfaces opérateur et mise en réseau de machines communicantes.',
      p1_eyebrow: 'Projet 1',
      p1_titre: 'Asservissement moteur sur automate',
      p1_p1: 'Mise en place d\'une boucle d\'asservissement en position et en vitesse sur un moteur DC, commandé par un automate industriel. Le système intègre un encodeur pour la mesure du retour et un correcteur PID implémenté sur l\'automate.',
      p1_p2: 'L\'objectif était d\'obtenir une réponse précise et stable, sans dépassement excessif, en ajustant les paramètres du correcteur par méthode expérimentale.',
      p1_caption: 'Système d\'asservissement moteur sur automate',
      p2_eyebrow: 'Projet 2',
      p2_titre: 'Interfaces Homme-Machine',
      p2_p1: 'Conception et programmation d\'IHM permettant à un opérateur de superviser et contrôler un procédé industriel. Les vues incluent des synoptiques animés, des courbes de tendance et des alarmes.',
      p2_p2: 'Ce type d\'interface est similaire à celles développées durant mon stage chez EDF CNPE Flamanville pour la salle de commande de la centrale EPR.',
      p2_caption1: 'Interface opérateur — supervision et contrôle',
      p2_caption2: 'Vue de supervision — second écran opérateur',
      p2_caption3: 'Architecture réseau maître/esclave',
      p3_eyebrow: 'Projet 3',
      p3_titre: 'Réseau industriel maître / esclave',
      p3_p1: 'Mise en réseau de plusieurs machines en architecture maître/esclave, similaire aux systèmes déployés dans l\'industrie. L\'automate maître coordonne les échanges de données avec les esclaves et surveille l\'état de chaque nœud.',
      p3_p2: 'Ce type d\'architecture est largement utilisé dans les centrales de production d\'énergie, les usines de traitement et les infrastructures critiques pour la supervision distribuée.',
      nav_retour: '← Station météo',
      nav_suivant: 'Distributeur →'
    },

    /* ------------------------------------------
       PAGE DISTRIBUTEUR
       ------------------------------------------ */
    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – En cours',
      h1_1: 'Distributeur',
      h1_2: 'à croquettes',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Un projet IoT de bout en bout',
      contexte_p1: 'Dans le cadre de ma première année à l\'ENSICAEN, j\'ai entrepris la conception d\'un distributeur automatique de nourriture pour chat. Ce projet personnel me permet de mettre en pratique l\'ensemble des compétences acquises en école d\'ingénieur : conception PCB, programmation embarquée, gestion de l\'énergie et communication sans fil.',
      contexte_p2: 'Le système est conçu pour fonctionner de manière autonome, alimenté par un panneau solaire, sans intervention humaine quotidienne.',
      galerie_eyebrow: 'Conception 3D',
      galerie_titre: 'Modélisation du système',
      photo1_caption: 'Modélisation 3D du distributeur automatique',
      archi_eyebrow: 'Architecture électronique',
      archi_titre: 'Gestion d\'énergie en 6 blocs',
      archi_p: 'La carte d\'alimentation est conçue autour de 6 blocs fonctionnels assurant une gestion optimale de l\'énergie : collecte via panneau photovoltaïque, stockage sur batterie AGM, régulation de charge, conversion DC/DC, protection et distribution vers les charges.',
      nav_retour: '← Automatismes',
      nav_suivant: 'NXP Validation →'
    },

    /* ------------------------------------------
       PAGE NXP
       ------------------------------------------ */
    nxp: {
      badge: 'Firmware · NXP Semiconductors',
      h1_1: 'Validation UWB / NFC',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Contexte',
      contexte_titre: 'Validation firmware dans un environnement industriel',
      contexte_p1: 'Dans le cadre de ma première année d\'alternance à l\'ENSICAEN, j\'ai intégré l\'équipe de validation firmware de NXP Semiconductors à Caen. NXP est l\'un des leaders mondiaux des semi-conducteurs, notamment dans les technologies de communication sans fil UWB et NFC.',
      contexte_p2: 'Mon rôle consistait à développer et automatiser des tests de validation pour garantir le bon fonctionnement des puces avant leur mise en production.',
      mission_eyebrow: 'Mission principale',
      mission_titre: 'Fonction "describe" — lecture automatique du banc de test',
      mission_p1: 'La mission principale consistait à développer une fonction Python permettant de lire automatiquement la configuration présente sur les bancs de test UWB/NFC. Avant cette fonction, les ingénieurs devaient réécrire manuellement la configuration à chaque session, ce qui usait inutilement la mémoire ROM des puces.',
      mission_p2: 'La fonction "describe" interroge les éléments connectés au banc, identifie les cartes et puces présentes, et retourne une vue structurée de l\'environnement de test — éliminant ainsi les écritures répétitives en mémoire.',
      photo_caption: 'Environnement de travail — développement et validation firmware',
      archi_eyebrow: 'Environnement technique',
      archi_titre: 'Outils & méthodes',
      archi_p: 'Travail en environnement Agile avec des sprints de deux semaines, revues de code et suivi d\'avancement sur Jira. Versionnage du code sur Git avec branches dédiées par feature, revues de merge request et documentation inline.',
      nav_retour: '← Distributeur',
      nav_suivant: 'Vie associative →'
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
      contexte_p2: 'En parallèle de mes études, j\'ai coordonné une équipe de bénévoles pour organiser plusieurs événements marquants de la vie étudiante.',
      ev1_eyebrow: 'Événement 1',
      ev1_titre: 'Tournoi de football inter-promotions',
      ev1_p1: 'Organisation d\'un tournoi de football réunissant les différentes promotions du département GEII. Gestion de la logistique, des inscriptions, de l\'arbitrage et de la communication.',
      ev1_p2: 'Le tournoi a renforcé la cohésion entre les promotions et créé des liens entre étudiants de première, deuxième et troisième années.',
      ev1_caption: 'Tournoi de football BDE GEII — IUT Cherbourg',
      ev2_eyebrow: 'Événement 2',
      ev2_titre: 'Barbecue de fin d\'année',
      ev2_p1: 'Organisation du BBQ de fin d\'année réunissant étudiants, enseignants et personnel administratif. Gestion du budget, des approvisionnements et de la logistique.',
      ev2_p2: 'Cet événement de clôture a rassemblé l\'ensemble de la communauté GEII dans une ambiance chaleureuse.',
      ev2_caption: 'Barbecue de fin d\'année — département GEII',
      ev3_eyebrow: 'Événement 3',
      ev3_titre: 'Accueil des premières années',
      ev3_p1: 'Organisation de la journée d\'accueil et d\'intégration des étudiants de première année. Présentation du département, des ressources disponibles et des opportunités de la vie étudiante.',
      ev3_p2: 'L\'objectif était de faciliter l\'intégration des nouveaux arrivants et de leur donner les clés pour réussir leur entrée dans l\'enseignement supérieur technique.',
      ev3_caption: 'Accueil des premières années — journée d\'intégration',
      presse_eyebrow: 'Presse',
      presse_titre: 'Une action remarquée',
      presse_caption: 'Article de presse — actions du BDE GEII',
      nav_retour: '← NXP Validation'
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
      titre: 'Projects',
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
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Apprentice — Firmware Development',
          desc: 'Python test automation for UWB and NFC firmware validation. Developed the "describe" function for automatic test bench configuration reading. Git and Jira in an Agile environment.',
          lien: '/projets/nxp'
        },
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'Engineering school — GPSE',
          desc: 'Physical Engineering and Embedded Systems. RF electronics, STM32/FreeRTOS, real-time systems, instrumentation, signal processing, PCB design.',
          lien: null
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
      titre: 'Skills'
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
      galerie_eyebrow: 'Gallery',
      galerie_titre: 'The robot in pictures',
      video1_caption: 'IUT Cherbourg competition — 1st run',
      video2_caption: 'Track shortcut — winning strategy',
      photo1_caption: 'General view — GP2D/GP2G sensors and power board visible',
      photo_pcb_caption: 'Power board design — Pilomo Project',
      photo_test_caption: 'Component testing — motor driver selection',
      photo_equipe_caption: 'Competition day — IUT Cherbourg',
      archi_eyebrow: 'Technical architecture',
      archi_titre: 'Electronic design',
      archi_p: 'The robot uses two boards: an Arduino control board and a power board fully designed, routed and soldered by our team, featuring a 78L05 regulator and a BUZ11 MOSFET transistor. Four GP2D/GP2G sensors aligned under the chassis detect the white line by infrared reflection.',
      code_eyebrow: 'Programming',
      code_titre: 'Arduino control logic',
      code_p: 'The program reads analog values from GP2G sensors, converts them to distance using a power-law calibration function (a×v^b), then adjusts PWM speeds for left and right motors. PWM frequency was modified via TCCR0B registers for better motor response.',
      resultats_eyebrow: 'Results',
      resultats_titre: '1st place at IUT competition',
      resultats_p: 'On competition day, our robot took first place. Our winning strategy: implementing a track shortcut that few teams had time to develop. Knocking over figurines earned bonus points — but speed on the track was the main objective.',
      nav_retour: '← Back to projects',
      nav_suivant: 'Traffic light Grafcet →'
    },

    grafcet: {
      badge: 'Automation · BUT GEII · 2022–2023',
      h1_1: 'Traffic light',
      h1_2: 'in Grafcet',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Automation & electronic design',
      contexte_p1: 'During the second year of BUT GEII, we designed and built a complete traffic light system — from the electronic board to the control logic on a Schneider industrial PLC.',
      contexte_p2: 'The project covered two distinct parts: designing and soldering the LED signaling boards, and modeling the behavior in Grafcet implemented on the PLC.',
      realisation_eyebrow: 'Implementation',
      realisation_titre: 'From board to PLC',
      realisation_p1: 'The signaling board groups red, orange and green LEDs directly controlled by the PLC outputs. Each color corresponds to a Grafcet state.',
      realisation_p2: 'The Schneider PLC manages timers and transitions between states: red → green → orange → red. An auxiliary board handles signal conditioning between the 24V PLC and the LEDs.',
      galerie_eyebrow: 'Gallery',
      galerie_titre: 'Project photos',
      photo1_caption: 'Overview — PLC, power supply and LED boards',
      photo2_caption: 'LED signaling board — soldering and assembly',
      photo3_caption: 'Testing and validation phase',
      modelisation_eyebrow: 'Modeling',
      modelisation_titre: 'The Grafcet',
      modelisation_p1: 'Grafcet is a graphical formalism describing the sequential behavior of an automation system. Each step represents a stable state, and transitions define conditions for moving between steps.',
      modelisation_p2: 'Our Grafcet models the complete traffic light cycle with timer management and normal/emergency modes (orange blinking), implemented on the Schneider PLC.',
      nav_retour: '← Pilomo Project',
      nav_suivant: 'Weather station →'
    },

    meteo: {
      badge: 'Electronics · BUT GEII · 2022–2023',
      h1_1: 'Embedded',
      h1_2: 'weather station',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Measurement, filtering and display',
      contexte_p1: 'This second-year BUT GEII project aimed to design an autonomous embedded weather station capable of acquiring environmental data, processing it and displaying it on an integrated HMI.',
      contexte_p2: 'One of the educational goals was to work on signal filtering from sensors to obtain reliable measurements, while generating synthetic data for upcoming lab sessions.',
      galerie_eyebrow: 'Gallery',
      galerie_titre: 'The station in pictures',
      photo1_caption: 'Complete weather station with HMI display',
      photo2_caption: 'Real-time measurement display interface',
      photo3_caption: 'Signal analysis and filtering',
      archi_eyebrow: 'Technical architecture',
      archi_titre: 'Acquisition & processing',
      archi_p1: 'The acquisition chain starts with sensors providing raw analog signals. These signals are filtered to eliminate noise before being digitized and processed.',
      archi_p2: 'The HMI displays temperature and humidity values in real time, with history and visual indicators. The system also generates configurable synthetic data for lab sessions.',
      photo4_caption: 'System validation during testing',
      nav_retour: '← Traffic light',
      nav_suivant: 'Automation →'
    },

    automatismes: {
      badge: 'Automation · BUT GEII · 2021–2024',
      h1_1: 'Industrial',
      h1_2: 'automation',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Three years of industrial automation',
      contexte_p: 'The Automation specialization of BUT GEII allowed me to work on a wide range of industrial control systems: motor control, operator interface programming and networked machine communication.',
      p1_eyebrow: 'Project 1',
      p1_titre: 'Motor control on PLC',
      p1_p1: 'Implementation of a position and speed control loop on a DC motor, controlled by an industrial PLC. The system integrates an encoder for feedback measurement and a PID controller implemented on the PLC.',
      p1_p2: 'The objective was to achieve a precise and stable response, without excessive overshoot, by adjusting controller parameters experimentally.',
      p1_caption: 'Motor control system on PLC',
      p2_eyebrow: 'Project 2',
      p2_titre: 'Human-Machine Interfaces',
      p2_p1: 'Design and programming of HMIs allowing an operator to supervise and control an industrial process. Views include animated synoptics, trend curves and alarms.',
      p2_p2: 'This type of interface is similar to those developed during my internship at EDF CNPE Flamanville for the EPR nuclear plant control room.',
      p2_caption1: 'Operator interface — supervision and control',
      p2_caption2: 'Supervision view — second operator screen',
      p2_caption3: 'Master/slave network architecture',
      p3_eyebrow: 'Project 3',
      p3_titre: 'Industrial master/slave network',
      p3_p1: 'Networking of multiple machines in a master/slave architecture, similar to systems deployed in industry. The master PLC coordinates data exchanges with slaves and monitors each network node.',
      p3_p2: 'This type of architecture is widely used in power plants, processing plants and critical infrastructure for distributed supervision.',
      nav_retour: '← Weather station',
      nav_suivant: 'Cat feeder →'
    },

    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – In progress',
      h1_1: 'Automatic',
      h1_2: 'cat feeder',
      contexte_eyebrow: 'Context',
      contexte_titre: 'An end-to-end IoT project',
      contexte_p1: 'As part of my first year at ENSICAEN, I undertook the design of an automatic cat food dispenser. This personal project allows me to apply the full range of skills acquired in engineering school: PCB design, embedded programming, energy management and wireless communication.',
      contexte_p2: 'The system is designed to operate autonomously, powered by a solar panel, without daily human intervention.',
      galerie_eyebrow: '3D Design',
      galerie_titre: 'System modeling',
      photo1_caption: '3D modeling of the automatic dispenser',
      archi_eyebrow: 'Electronic architecture',
      archi_titre: '6-block energy management',
      archi_p: 'The power board is designed around 6 distinct functional blocks ensuring optimal energy management: collection via photovoltaic panel, AGM battery storage, charge regulation, DC/DC conversion, protection and distribution to loads.',
      nav_retour: '← Automation',
      nav_suivant: 'NXP Validation →'
    },

    nxp: {
      badge: 'Firmware · NXP Semiconductors',
      h1_1: 'UWB / NFC Validation',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Firmware validation in an industrial environment',
      contexte_p1: 'As part of my first year of work-study at ENSICAEN, I joined the firmware validation team at NXP Semiconductors in Caen. NXP is one of the world leaders in semiconductors, particularly in UWB and NFC wireless communication technologies.',
      contexte_p2: 'My role was to develop and automate validation tests to ensure chip functionality before production.',
      mission_eyebrow: 'Main mission',
      mission_titre: '"describe" function — automatic test bench reading',
      mission_p1: 'The main mission was to develop a Python function to automatically read the configuration on UWB/NFC test benches. Before this function, engineers had to manually rewrite the configuration each test session, unnecessarily wearing the chip\'s ROM memory.',
      mission_p2: 'The "describe" function queries the elements connected to the bench, identifies the boards and chips present, and returns a structured view of the test environment — eliminating repetitive memory writes.',
      photo_caption: 'Work environment — firmware development and validation',
      archi_eyebrow: 'Technical environment',
      archi_titre: 'Tools & methods',
      archi_p: 'Working in an Agile environment with two-week sprints, code reviews and progress tracking on Jira. Git versioning with feature branches, merge request reviews and inline documentation.',
      nav_retour: '← Cat feeder',
      nav_suivant: 'Student life →'
    },

    bde: {
      badge: 'Student life · IUT Cherbourg · 2022–2023',
      h1_1: 'Student Union President',
      h1_2: 'GEII department',
      contexte_eyebrow: 'Commitment',
      contexte_titre: 'A year leading the GEII student union',
      contexte_p1: 'In my second year of BUT GEII, I was elected president of the Student Bureau of the GEII department at IUT Cherbourg. This role allowed me to develop leadership, organizational and communication skills well beyond the technical scope.',
      contexte_p2: 'Alongside my studies, I coordinated a team of volunteers to design and organize several key events in the department\'s student life.',
      ev1_eyebrow: 'Event 1',
      ev1_titre: 'Inter-year football tournament',
      ev1_p1: 'Organization of a football tournament bringing together the different GEII department year groups. Managing logistics, registrations, refereeing and communication.',
      ev1_p2: 'The tournament strengthened cohesion between year groups and created bonds between first, second and third year students.',
      ev1_caption: 'GEII BDE football tournament — IUT Cherbourg',
      ev2_eyebrow: 'Event 2',
      ev2_titre: 'End-of-year BBQ',
      ev2_p1: 'Organization of the end-of-year BBQ bringing together students, teachers and administrative staff. Budget management, supply procurement and on-site logistics.',
      ev2_p2: 'This closing event brought together the entire GEII community in a warm atmosphere.',
      ev2_caption: 'End-of-year BBQ — GEII department',
      ev3_eyebrow: 'Event 3',
      ev3_titre: 'First-year student welcome day',
      ev3_p1: 'Organization of the welcome and integration day for first-year students. Presentation of the department, available resources and student life opportunities.',
      ev3_p2: 'The goal was to help new students integrate and give them the keys to succeed in higher technical education.',
      ev3_caption: 'First-year welcome day — integration event',
      presse_eyebrow: 'Press',
      presse_titre: 'Recognized work',
      presse_caption: 'Press article — GEII BDE activities',
      nav_retour: '← NXP Validation'
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
      titre: 'Proiecte',
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
          date: '2024 – 2025',
          company: 'NXP Semiconductors',
          role: 'Apprentice — Dezvoltare Firmware',
          desc: 'Automatizare teste Python pentru validarea firmware UWB și NFC. Dezvoltarea funcției "describe" pentru citirea automată a configurației bancurilor de test. Git și Jira în mediu Agile.',
          lien: '/projets/nxp'
        },
        {
          date: '2024 – 2027',
          company: 'ENSICAEN',
          role: 'Școală de inginerie — GPSE',
          desc: 'Inginerie Fizică și Sisteme Incorporate. Electronică RF, STM32/FreeRTOS, sisteme în timp real, instrumentare, procesarea semnalelor, proiectare PCB.',
          lien: null
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
      titre: 'Competențe'
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
      galerie_eyebrow: 'Galerie',
      galerie_titre: 'Robotul în imagini',
      video1_caption: 'Competiție IUT Cherbourg — prima cursă',
      video2_caption: 'Scurtătură pe pistă — strategie câștigătoare',
      photo1_caption: 'Vedere generală — senzori GP2D/GP2G și placă de putere vizibile',
      photo_pcb_caption: 'Proiectarea plăcii de putere — Proiectul Pilomo',
      photo_test_caption: 'Teste de componente — selecția driverului de motor',
      photo_equipe_caption: 'Ziua competiției — IUT Cherbourg',
      archi_eyebrow: 'Arhitectură tehnică',
      archi_titre: 'Proiectare electronică',
      archi_p: 'Robotul folosește două plăci: o placă de comandă Arduino și o placă de putere integral proiectată, rutată și lipită de echipa noastră, cu regulator 78L05 și tranzistor MOSFET BUZ11. Patru senzori GP2D/GP2G aliniați sub șasiu detectează linia albă prin reflexie infraroșie.',
      code_eyebrow: 'Programare',
      code_titre: 'Logică de control Arduino',
      code_p: 'Programul citește valorile analogice ale senzorilor GP2G, le convertește în distanță printr-o funcție de calibrare (lege de putere a×v^b), apoi ajustează vitezele PWM ale motoarelor stâng și drept. Frecvența PWM a fost modificată prin registrele TCCR0B pentru un răspuns mai bun.',
      resultats_eyebrow: 'Rezultate',
      resultats_titre: 'Locul 1 la concursul IUT',
      resultats_p: 'În ziua competiției, robotul nostru a câștigat primul loc. Strategia noastră câștigătoare: implementarea unei scurtături pe pistă pe care puține echipe au avut timp să o dezvolte.',
      nav_retour: '← Înapoi la proiecte',
      nav_suivant: 'Semafor Grafcet →'
    },

    grafcet: {
      badge: 'Automatizare · BUT GEII · 2022–2023',
      h1_1: 'Semafor',
      h1_2: 'în Grafcet',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Automatizare și proiectare electronică',
      contexte_p1: 'În al doilea an de BUT GEII, am proiectat și realizat un sistem complet de semafor — de la placa electronică până la logica de comandă pe un automat industrial Schneider Electric.',
      contexte_p2: 'Proiectul a acoperit două aspecte distincte: proiectarea și lipirea plăcilor de semnalizare LED, și modelarea comportamentului în Grafcet implementat pe automat.',
      realisation_eyebrow: 'Realizare',
      realisation_titre: 'De la placă la automat',
      realisation_p1: 'Placa de semnalizare grupează LED-urile roșu, portocaliu și verde comandate direct de ieșirile automatului. Fiecare culoare corespunde unei stări Grafcet.',
      realisation_p2: 'Automatul Schneider gestionează temporizările și tranzițiile între stări. O placă auxiliară asigură condiționarea semnalelor între automatul de 24V și LED-uri.',
      galerie_eyebrow: 'Galerie',
      galerie_titre: 'Fotografii ale proiectului',
      photo1_caption: 'Vedere de ansamblu — automat, alimentare și plăci LED',
      photo2_caption: 'Placă de semnalizare LED — lipire și asamblare',
      photo3_caption: 'Faza de teste și validare',
      modelisation_eyebrow: 'Modelare',
      modelisation_titre: 'Grafcet-ul',
      modelisation_p1: 'Grafcet este un formalism grafic care descrie comportamentul secvențial al unui sistem de automatizare. Fiecare etapă reprezintă o stare stabilă, iar tranzițiile definesc condițiile de trecere.',
      modelisation_p2: 'Grafcet-ul nostru modelează ciclul complet al semaforului cu gestionarea temporizărilor și a modurilor normal și urgență, implementat pe automatul Schneider.',
      nav_retour: '← Proiectul Pilomo',
      nav_suivant: 'Stație meteo →'
    },

    meteo: {
      badge: 'Electronică · BUT GEII · 2022–2023',
      h1_1: 'Stație meteo',
      h1_2: 'încorporată',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Măsurare, filtrare și afișare',
      contexte_p1: 'Acest proiect din al doilea an de BUT GEII a urmărit proiectarea unei stații meteo încorporate autonome, capabilă să achiziționeze date de mediu, să le proceseze și să le afișeze pe un IHM integrat.',
      contexte_p2: 'Unul dintre obiectivele pedagogice a fost lucrul cu filtrarea semnalelor de la senzori pentru măsurători fiabile, generând date sintetice pentru lucrările practice.',
      galerie_eyebrow: 'Galerie',
      galerie_titre: 'Stația în imagini',
      photo1_caption: 'Stație meteo completă cu afișaj IHM',
      photo2_caption: 'Interfață de afișare a măsurătorilor în timp real',
      photo3_caption: 'Analiza și filtrarea semnalelor senzorilor',
      archi_eyebrow: 'Arhitectură tehnică',
      archi_titre: 'Achiziție și procesare',
      archi_p1: 'Lanțul de achiziție începe cu senzorii care furnizează semnale analogice brute. Aceste semnale sunt filtrate pentru a elimina perturbațiile înainte de a fi digitalizate și procesate.',
      archi_p2: 'IHM-ul afișează în timp real valorile de temperatură și umiditate, cu istoric și indicatori vizuali. Sistemul generează și date sintetice configurabile pentru lucrările de laborator.',
      photo4_caption: 'Validarea sistemului în timpul testelor',
      nav_retour: '← Semafor',
      nav_suivant: 'Automatizări →'
    },

    automatismes: {
      badge: 'Automatizare · BUT GEII · 2021–2024',
      h1_1: 'Automatizări',
      h1_2: 'industriale',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Trei ani de automatizare industrială',
      contexte_p: 'Specializarea Automatizare din BUT GEII mi-a permis să lucrez pe un spectru larg de sisteme de control industrial: reglaj motoare, programare interfețe operator și rețea de mașini comunicante.',
      p1_eyebrow: 'Proiect 1',
      p1_titre: 'Reglaj motor pe automat',
      p1_p1: 'Implementarea unei bucle de reglaj în poziție și viteză pe un motor DC, comandat de un automat industrial. Sistemul integrează un encoder pentru măsurarea reacției și un corector PID implementat pe automat.',
      p1_p2: 'Obiectivul era obținerea unui răspuns precis și stabil, fără depășire excesivă, prin ajustarea parametrilor corectorului pe cale experimentală.',
      p1_caption: 'Sistem de reglaj motor pe automat',
      p2_eyebrow: 'Proiect 2',
      p2_titre: 'Interfețe Om-Mașină',
      p2_p1: 'Proiectarea și programarea IHM-urilor care permit unui operator să supravegheze și să controleze un proces industrial. Vederile includ sinoptice animate, curbe de tendință și alarme.',
      p2_p2: 'Acest tip de interfață este similar cu cele dezvoltate în timpul stagiului meu la EDF CNPE Flamanville pentru sala de comandă a centralei EPR.',
      p2_caption1: 'Interfață operator — supraveghere și control',
      p2_caption2: 'Vedere de supraveghere — al doilea ecran operator',
      p2_caption3: 'Arhitectură rețea maestru/sclav',
      p3_eyebrow: 'Proiect 3',
      p3_titre: 'Rețea industrială maestru/sclav',
      p3_p1: 'Conectarea în rețea a mai multor mașini în arhitectură maestru/sclav, similar cu sistemele din industrie. Automatul maestru coordonează schimburile de date cu sclavii și monitorizează fiecare nod.',
      p3_p2: 'Acest tip de arhitectură este larg utilizat în centrale electrice, fabrici de procesare și infrastructuri critice pentru supravegherea distribuită.',
      nav_retour: '← Stație meteo',
      nav_suivant: 'Distribuitor →'
    },

    distributeur: {
      badge: 'IoT · ENSICAEN GPSE · 2024 – În progres',
      h1_1: 'Distribuitor automat',
      h1_2: 'hrană pisică',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Un proiect IoT complet',
      contexte_p1: 'În cadrul primului meu an la ENSICAEN, am întreprins proiectarea unui distribuitor automat de hrană pentru pisică. Acest proiect personal îmi permite să aplic toate competențele dobândite: proiectare PCB, programare încorporată, gestionare energie și comunicare wireless.',
      contexte_p2: 'Sistemul este proiectat să funcționeze autonom, alimentat de un panou solar, fără intervenție umană zilnică.',
      galerie_eyebrow: 'Proiectare 3D',
      galerie_titre: 'Modelarea sistemului',
      photo1_caption: 'Modelare 3D a distributorului automat',
      archi_eyebrow: 'Arhitectură electronică',
      archi_titre: 'Gestionare energie în 6 blocuri',
      archi_p: 'Placa de alimentare este proiectată în jurul a 6 blocuri funcționale distincte asigurând o gestionare optimală a energiei: colectare via panou fotovoltaic, stocare pe baterie AGM, reglare de încărcare, conversie DC/DC, protecție și distribuție către sarcini.',
      nav_retour: '← Automatizări',
      nav_suivant: 'Validare NXP →'
    },

    nxp: {
      badge: 'Firmware · NXP Semiconductors',
      h1_1: 'Validare UWB / NFC',
      h1_2: 'NXP Semiconductors',
      contexte_eyebrow: 'Context',
      contexte_titre: 'Validare firmware în mediu industrial',
      contexte_p1: 'În cadrul primului meu an de alternance la ENSICAEN, am integrat echipa de validare firmware NXP Semiconductors din Caen. NXP este unul dintre liderii mondiali în semiconductori, în special în tehnologiile de comunicare wireless UWB și NFC.',
      contexte_p2: 'Rolul meu era să dezvolt și să automatizez teste de validare pentru a garanta funcționarea corectă a cipurilor înainte de producție.',
      mission_eyebrow: 'Misiunea principală',
      mission_titre: 'Funcția "describe" — citire automată a bancului de test',
      mission_p1: 'Misiunea principală consta în dezvoltarea unei funcții Python pentru citirea automată a configurației de pe bancurile de test UWB/NFC. Înainte de această funcție, inginerii trebuiau să rescrie manual configurația la fiecare sesiune, uzând inutil memoria ROM a cipurilor.',
      mission_p2: 'Funcția "describe" interoghează elementele conectate la banc, identifică plăcile și cipurile prezente și returnează o vedere structurată a mediului de test — eliminând scrierile repetitive în memorie.',
      photo_caption: 'Mediu de lucru — dezvoltare și validare firmware',
      archi_eyebrow: 'Mediu tehnic',
      archi_titre: 'Instrumente și metode',
      archi_p: 'Lucru în mediu Agile cu sprinturi de două săptămâni, revizuiri de cod și urmărire progres pe Jira. Versionare cod pe Git cu ramuri dedicate per funcționalitate, revizuiri merge request și documentație inline.',
      nav_retour: '← Distribuitor',
      nav_suivant: 'Viață asociativă →'
    },

    bde: {
      badge: 'Viață asociativă · IUT Cherbourg · 2022–2023',
      h1_1: 'Președinte BDE',
      h1_2: 'departamentul GEII',
      contexte_eyebrow: 'Angajament',
      contexte_titre: 'Un an în fruntea BDE GEII',
      contexte_p1: 'În al doilea an de BUT GEII, am fost ales președinte al Biroului Studențesc al departamentului GEII de la IUT Cherbourg. Acest rol mi-a permis să dezvolt competențe de leadership, organizare și comunicare dincolo de cadrul tehnic.',
      contexte_p2: 'Paralel cu studiile, am coordonat o echipă de voluntari pentru organizarea mai multor evenimente importante din viața studențească.',
      ev1_eyebrow: 'Eveniment 1',
      ev1_titre: 'Turneu de fotbal inter-promoții',
      ev1_p1: 'Organizarea unui turneu de fotbal reunind diferitele promoții ale departamentului GEII. Gestionarea logisticii, înregistrărilor, arbitrajului și comunicării.',
      ev1_p2: 'Turneul a consolidat coeziunea între promoții și a creat legături între studenții din primul, al doilea și al treilea an.',
      ev1_caption: 'Turneu fotbal BDE GEII — IUT Cherbourg',
      ev2_eyebrow: 'Eveniment 2',
      ev2_titre: 'Grătar de sfârșit de an',
      ev2_p1: 'Organizarea grătarului de sfârșit de an reunind studenți, profesori și personal administrativ. Gestionarea bugetului, aprovizionărilor și logisticii.',
      ev2_p2: 'Acest eveniment de încheiere a reunit întreaga comunitate GEII într-o atmosferă caldă.',
      ev2_caption: 'Grătar de sfârșit de an — departamentul GEII',
      ev3_eyebrow: 'Eveniment 3',
      ev3_titre: 'Primirea studenților din primul an',
      ev3_p1: 'Organizarea zilei de primire și integrare a studenților din primul an. Prezentarea departamentului, resurselor disponibile și oportunităților din viața studențească.',
      ev3_p2: 'Obiectivul era facilitarea integrării noilor studenți și oferirea cheilor pentru a reuși în învățământul superior tehnic.',
      ev3_caption: 'Ziua de primire a primului an — eveniment de integrare',
      presse_eyebrow: 'Presă',
      presse_titre: 'O muncă remarcată',
      presse_caption: 'Articol de presă — activitățile BDE GEII',
      nav_retour: '← Validare NXP'
    }
  }
}

export default translations
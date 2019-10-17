export default {
  translation: {
    PATHS: {
      RESUME: "/public/resume_fr.pdf"
    },
    ERRORS: {
      UNKNOWN: "Une erreur s'est produite",
      FILE_TYPE: "Type de fichier non authorisé",
      FIELD_REQUIRED: "Ce champ est requis",
      FIELD_FORMAT: "Ce champ est mal formaté"
    },
    WORDS: {
      FRENCH: "Français",
      ENGLISH: "Anglais",
      DARK_MODE: "Dark Mode",
      LIGHT_MODE: "Light Mode",
      SEND: "ENVOYER"
    },
    NAVBAR: {
      HOME: "À propos de moi",
      RESUME: "CV",
      PROJECTS: "Projets",
      GITHUB: "Voir sur github"
    },
    HOME: {
      PROFILE: {
        TITLE: "Présentation",
        SUBTITLE: "Je suis un web developper Full Stack (entre autres choses)",
        BODY: `Je m’appelle Morgan, je me destinais à être avocat mais depuis 5 ans peu ou prou je passe finalement mon temps à hacker du JavaScript, principalement en front end mais j’aime aussi faire des micro services, des lambdas et des scrappers. J’ai appris la programmation en production, en fondant Bowkr (plateforme de mise en relation professionnelle). Durant cette période j’ai construit des produits, levé des fonds, embauché, licencié, géré des équipes, géré des projets. J’ai surtout trouvé ce que j’aimais faire. J’aime apprendre, j’aime cogiter, j’aime construire des produits, j’aime trouver des solutions seul mais surtout en équipe, j’aime voir des produits évoluer.
        `,
        DETAILS_TITLE: "Détails",
        NAME_HINT: "Nom : ",
        NAME: "Morgan Tomasini",
        AGE_HINT: "Âge : ",
        WORKLOCATION_HINT: "Lieu de travail : ",
        WORKLOCATION: "Remote / On peut discuter d'une relocalisation",
        POSITION_HINT: "Poste : ",
        POSITION: "À discuter",
        AGE: Math.floor(
          ((new Date() as any) - new Date("1987-12-06").getTime()) / 3.15576e10
        ).toString(),
        LOCATION_HINT: "Location : ",
        LOCATION: "Bastia, Corse, France",
        CONDITIONS_TITLE: "Ce que je cherche",
        // team work
        CONDITIONS: `Je cherche à intégrer une équipe brillante qui travaille sur un excellent produit. Mes objectifs sont de partager et améliorer mes compétences tant en programmation qu’en product design. Être autodidacte présente des avantages et des inconvénients et j’ai hâte de partager les premiers et de me débarrasser des seconds. 
        Je cherche une entreprise avec une forte culture tech centrée sur l’itération et la maintenabilité. 
        Je cherche une équipe remote bien organisée mais je suis aussi ouvert quant à la possibilité d’une relocalisation.
        `
      },
      EXPERIENCES: {
        TITLE: "Expériences",
        POSITION: "CTO - Co Founder",
        NAME: "Bowkr, La pile de CV",
        DATE: "2014 - 2019",
        BODY: `
            Bowkr était une plateforme de mise en relation professionnelle. 
            Après être entré dans un incubateur qui a financé une partie du développement d’une version alpha du produit, j’ai vite compris que pouvoir itérer sur le produit rapidement était primordial. J’ai donc mis les mains dedans. À l’époque la stack était composée d’une <b>BDD MongoDB</b>, un backend <b>Ruby on Rails Dockerisé</b> qui servait d’API REST pour une app <b>AngularJS</b> j’ai donc naturellement développé la première version de l’app avec <b>Ionic V1</b>. 
        `,
        BODY_2: `
         Après cette première phase de développement nous avons levé 700k (ACG Management, BPI) et recruté une petite équipe. Nous avons réécrit le backend en <b>PHP (Laravel)</b> avec une base <b>MySQL</b>.
          Durant cette période, j'ai officié en tant que lead au sein de l'équipe, tout en développant des outils utilisés en interne pour l'acquisition et la production de contenus. J'ai ainsi été amené à multiplier les technologies, sautant de repo en repo dès que le produit le nécessitait. 
        `
      },
      STACK: {
        TITLE: "Stack",
        SUBTITLE: "Here are some of the tech I ❤️ to use"
      },
      CONTACT: {
        TITLE: "Contact",
        SUBTITLE: "Discutons de comment je peux intégrer votre équipe",
        FILE_TEXT: "Envoyer une fiche de poste"
      }
    }
  }
};

export default {
  translation: {
    WORDS: {
      FRENCH: "Français",
      ENGLISH: "Anglais",
      DARK_MODE: "Dark Mode",
      LIGHT_MODE: "Light Mode"
    },
    NAVBAR: {
      HOME: "À propos de moi",
      RESUME: "CV",
      PROJECTS: "Projets"
    },
    HOME: {
      PROFILE: {
        TITLE: "Présentation",
        SUBTITLE: "Je suis un web developper (entre autres choses)",
        BODY: `Je m’appelle Morgan, je me destinais à être avocat mais depuis 5 ans peu ou prou je passe finalement mon temps à hacker du JavaScript, principalement en front end mais j’aime aussi faire des micro services, des lambdas et des scrappers. 
        J’ai appris la programmation en production, en fondant Bowkr (plateforme de mise en relation professionnelles). 
        Durant cette période j’ai construit des produits, levé des fonds, embauché, licencié, géré des équipes, géré des projets. J’ai surtout trouvé ce que j’aimais faire. J’aime apprendre, j’aime cogiter, j’aime construire des produits, j’aime trouver des solutions seul mais surtout en équipe, j’aime voir des produits évoluer.
        `,
        DETAILS_TITLE: "Details",
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
        CONDITIONS: `Je cherche à intégrer une équipe brillante qui travaille sur un excellent produit, mes objectifs sont de partager et améliorer mes compétences tant en programmation qu’en product design. Être autodidacte présente des avantages et des inconvénients et j’ai hâte de partager les premiers et de me débarrasser des seconds. 
        Je cherche une entreprise avec une forte culture tech centré sur l’itération et la maintenabilité. 
        Je cherche une équipe remote bien organisé mais je suis aussi ouvert quant à la possibilité d’une relocalisation.

        `
      },
      EXPERIENCES: {
        TITLE: "Experiences",
        POSITION: "CTO - Co Founder",
        NAME: "Bowkr, La pile de CV",
        DATE: "2014 - 2019",
        BODY: `
            Bowkr était une plateforme de mise en relation professionnelle. 
            Après être entré dans un incubateur qui a financé une partie du développement d’une version alpha du produit j’ai vite compris que pouvoir itérer sur le produit rapidement était primordial. J’ai donc mis les mains dedans à l’époque la stack était composé d’une <b>BDD MongoDB</b>, un backend <b>Ruby on Rails Dockerisé</b> qui servait d’API REST pour une app <b>AngularJS</b> j’ai donc naturellement développer la première version de l’app avec <b>Ionic V1</b>. 
        `,
        BODY_2: `
         Après cette première phase de développement nous avons levée 700k (ACG Management, BPI) et recruté une petite équipe. Nous avons réécrit le backend en <b>PHP (Laravel)</b> avec une base <b>MySQL</b>.
          Mon travail me demandant de me concentrer sur d’autres aspects du projet et sur la gestion globale de l’aspect technique mon temps.
          J’ai écrit beaucoup d’outils utilisé en interne notamment liées à l’acquisition et la production de contenu.

        `
      },
      STACK: {
        TITLE: "Stack",
        SUBTITLE: "Here are some of the tech I ❤️ to use"
      }
    }
  }
};

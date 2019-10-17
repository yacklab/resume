export default {
  translation: {
    PATHS: {
      RESUME: "/public/resume_en.pdf"
    },
    ERRORS: {
      UNKNOWN: "An error occured",
      FILE_TYPE: "Wrong file type",
      FIELD_REQUIRED: "Field is required",
      FIELD_FORMAT: "Field is invalid"
    },
    WORDS: {
      FRENCH: "French",
      ENGLISH: "English",
      DARK_MODE: "Dark Mode",
      LIGHT_MODE: "Light Mode",
      SEND: "SEND"
    },
    NAVBAR: {
      HOME: "About me",
      RESUME: "Resume",
      PROJECTS: "Projects",
      GITHUB: "View on Github"
    },
    HOME: {
      PROFILE: {
        TITLE: "Introduction",
        SUBTITLE:
          "I'm a Full Stack Web Developper Full Stack (among other things)",
        BODY: `My name is Morgan, I almost became a lawyer but in the last 5 years I'm hacking Javascript, mostly in front end but I also like to write backend code (API / lambdas) and tools (scrapper / Micro services). I learned programming in production founding Bowkr (recruitment platform). During that time, I built products, raised money, hired, dismissed people, manage teams, manage projects.
        Most importantly I found what I love to do. I love to learn, I love to brainstorm, I love building products, I love solving things alone and within a team. I love to watch products grow.
        `,
        DETAILS_TITLE: "Details",
        NAME_HINT: "Name : ",
        NAME: "Morgan Tomasini",
        AGE_HINT: "Age : ",
        WORKLOCATION_HINT: "Workplace : ",
        WORKLOCATION: "Remote / We can talk of a relocation",
        POSITION_HINT: "Position : ",
        POSITION: "To discuss",
        AGE: Math.floor(
          ((new Date() as any) - new Date("1987-12-06").getTime()) / 3.15576e10
        ).toString(),
        LOCATION_HINT: "Location : ",
        LOCATION: "Bastia, Corse, France",
        CONDITIONS_TITLE: "What I'm looking for",
        CONDITIONS: `
          I'm looking for a brilliant team on a great product. My goals are to share and grow my skills as much in programming as in teamwork and product design. Being self-taught comes with benefits and drawbacks and I'm eager to share the firsts and get rid of the seconds. 
          I'm looking for a company with an awesome Tech culture focused on iteration and maintainability.
          I'm looking for a well-organized remote team, but I'm open to discuss about a relocation
        `
      },
      EXPERIENCES: {
        TITLE: "Experiences",
        POSITION: "CTO - Co Founder",
        NAME: "Bowkr, La pile de CV",
        DATE: "2014 - 2019",
        BODY: `
        Bowkr was a recruitment marketplace.
        After entering an incubator which funded an alpha development with contractors, I quickly understood that it was vital to be able to iterate fast on the product. Therefore, I dove in it. At the time the platform consisted of a <b>Ruby on Rails</b> backend with a <b>MongoDB</b> database, that we transformed in API server to serve an <b>AngularJS</b> app. Then I developed out first app with <b>Ionic V1</b> that we maintained for Three years.
        `,
        BODY_2: `
        After this first phase, we raised 700k€ (ACG Management, BPI) and recruit a small Team. We rewrote the backend in <b>PHP (Laravel)</b> with a <b>MySQL</b> database. During that period, I acted as Lead developer while building tools that we used internally for acquisition and content production. Thereby I was led to use diverse technologies, jumping between repos as soon as the product needed it. 
        `
      },
      STACK: {
        TITLE: "Stack",
        SUBTITLE: "Here are some of the tech I ❤️ to use"
      },
      CONTACT: {
        TITLE: "Contact",
        SUBTITLE: "Let's discuss about how I can join your team",
        FILE_TEXT: "Send a document"
      }
    }
  }
};

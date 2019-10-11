export default {
  translation: {
    WORDS: {
      FRENCH: "French",
      ENGLISH: "English",
      DARK_MODE: "Dark Mode",
      LIGHT_MODE: "Light Mode"
    },
    NAVBAR: {
      HOME: "About me",
      RESUME: "Resume",
      PROJECTS: "projects"
    },
    HOME: {
      PROFILE: {
        TITLE: "Profile",
        SUBTITLE: "I'm a web developper (among other things)",
        BODY: `I am a developper since 5 years. 
        I come from a different background, I was a law student before starting a company that required me to learn to
        code and I found what I love to do. I love to learn, I love to scratch my head, I love to find solution and discuss about problems.
        During that long experience we build a product from the ground up, raised money, hired peoples, dissmissed other, grew a user base.
        `,
        DETAILS_TITLE: "Details",
        NAME_HINT: "Name : ",
        NAME: "Morgan Tomasini",
        AGE_HINT: "Age : ",
        WORKLOCATION_HINT: "Work Location : ",
        WORKLOCATION: "Remote / Open to relocation",
        AGE: Math.floor(
          ((new Date() as any) - new Date("1987-12-06").getTime()) / 3.15576e10
        ).toString(),
        LOCATION_HINT: "Location : ",
        LOCATION: "Bastia, Corse, France",
        CONDITIONS_TITLE: "What I look for",
        CONDITIONS: `I'm looking for a great team, with a good product, my goal is to share and improve my skills in programming and product building, self teaching comes with benefits and some caveats I'm eager to share the firsts and let go of the seconds. I'm looking for a growing company which a great tech culture and build products with iterability and maintenability in mind.
        I'm looking for a well ogranized remote team but I'm open to the possibility of relocation.
        `
      },
      EXPERIENCES: {
        TITLE: "Experiences",
        NAME: "Bowkr, La pile de CV",
        DATE: "2014 - 2019",
        BODY: `
          Bowkr was a job board with a profile targetting feature. 
          My journey into programming begun with the creation of bowkr.
          First by creating web scrapping scripts for lead generation (with Ruby and Selenium). 
          Then I started putting my hands on a Ruby on Rails MongoDB application that powered the v1 of Bowkr, then I developped the Rest API behind an Ionic (v1) Application.
        `
      },
      STACK: {
        TITLE: "Stack",
        SUBTITLE: "Here are some of the tech I ❤️ to use"
      }
    }
  }
};

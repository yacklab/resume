import React, { useRef } from "react";
import Train from "./sections/train";
import { Container, Typography, Box, Button } from "@material-ui/core";
import { CustomDivider } from "../../components";
import { useStyle } from "../../hooks";
import { scrollToRef } from "../../helpers";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const LocoView = () => {
  const classes = useStyle();
  const textRef = useRef<HTMLElement>(null);

  return (
    <div>
      <Train />
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => scrollToRef(textRef, 100)}
        >
          <ExpandMoreIcon />
        </Button>
      </div>
      <Container maxWidth="sm">
        <Box marginY={5}>
          <Typography ref={textRef} variant="h2" gutterBottom>
            Dear Loco2
          </Typography>
          <Typography variant="h5" gutterBottom>
            My Name is Morgan <br /> I’m from Corsica in France <br />
            (UTC+2 ☀️ / UTC+1 ❄️).
          </Typography>
          <CustomDivider />
          <Typography
            className={classes.subtitle}
            align="center"
            variant="h5"
            gutterBottom
          >
            A bit about me.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I have been a programmer for the past 5 years, I learned programming
            after my master’s degree in business law during the time I launched
            my company, after our first fundraising round (700k / ACG Management
            and BPI France) in 2017, I mostly worked on front end technologies
            Ionic V1, V2, Angular. I prefer React though, I prefer its
            functional approach, and whenever we had to make a tool for
            ourselves or tests products idea it was my go-to option. I also
            worked on scrapper and micro services growth-hacking tools (Firebase
            functions, Heroku with express).
          </Typography>
          <CustomDivider />
          <Typography
            className={classes.subtitle}
            align="center"
            variant="h5"
            gutterBottom
          >
            A bit about us and why we may be a great fit.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I didn’t know your company before finding your post on
            weworkremotely.com but when I read your post it filled me with
            enthusiasm, I think I check a lot of boxes, (I may have to get up to
            speed with a11y standards but that don’t seem too problematic and
            the tooling looks good). With that enthusiasm I went to your team
            page and it made me even more excited, I'm looking for a brilliant
            team on a great product. My goals are to share and grow my skills as
            much in programming as in teamwork and product design. Being
            self-taught comes with benefits and drawbacks and I'm eager to share
            the firsts and get rid of the seconds.
          </Typography>
          <CustomDivider />
          <Typography
            className={classes.subtitle}
            align="center"
            variant="h5"
            gutterBottom
          >
            To answer your specifics questions.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Some of the most interesting programming tasks I have worked on
            almost always revolved around data manipulation and state management
            this is why I love redux (and now react providers and hooks) so much
            it is so much easier to handle when you have taken the grasp of it,
            I also like working with streams when you architect them well, I
            developed the first version of Bowkr with Ionic V1 without knowing
            what I was doing and it has been a nightmare to maintain until we
            rewrite it. The most challenging part of product design and
            programming for me is to put myself in the user’s shoes, especially
            when you work with a broad non-tech user base, which was the case at
            Bowkr, with recruiters, we often have to sacrifice features that
            seemed like good ideas at first but clouded the experience at the
            end or give up a beautiful design in order to manage user’s
            cognitive load.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

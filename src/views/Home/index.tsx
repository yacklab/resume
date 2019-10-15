import React, { useRef } from "react";
import { ParticuleNetwork, StickyHeader } from "../../components";
import { Button, ButtonGroup } from "@material-ui/core";

import { scrollToRef } from "../../helpers";
import { useScrollSpy } from "../../hooks";
import { ProfileSection, StackSection, ContactSection } from "./sections";
import ExperiencesSection from "./sections/experiences";

export const HomeView: React.FunctionComponent = () => {
  const refs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ];
  const activeSectionIndex = useScrollSpy(refs, {
    offset: -210
  });

  return (
    <div className="home-bg">
      <ParticuleNetwork />
      <StickyHeader offset={64}>
        <ButtonGroup style={{ maxWidth: "90%" }}>
          <Button
            style={{
              borderRightColor: "inherit"
            }}
            variant="outlined"
            color={activeSectionIndex === 0 ? "secondary" : "default"}
            onClick={() => {
              scrollToRef(refs[0], 210);
            }}
          >
            Profile
          </Button>
          <Button
            style={{
              borderRightColor: "inherit",
              borderLeftColor:
                activeSectionIndex === 0 ? "transparent" : "inherit"
            }}
            variant="outlined"
            color={activeSectionIndex === 1 ? "secondary" : "default"}
            onClick={() => {
              scrollToRef(refs[1], 200);
            }}
          >
            Experiences
          </Button>
          <Button
            style={{
              borderRightColor: "inherit",
              borderLeftColor:
                activeSectionIndex === 1 ? "transparent" : "inherit"
            }}
            variant="outlined"
            color={activeSectionIndex === 2 ? "secondary" : "default"}
            onClick={() => {
              scrollToRef(refs[2], 200);
            }}
          >
            Stack
          </Button>
          <Button
            style={{
              boxShadow: "none",
              borderRightColor: "inherit",
              borderLeftColor:
                activeSectionIndex === 2 ? "transparent" : "inherit"
            }}
            color="primary"
            variant={activeSectionIndex === 3 ? "outlined" : "contained"}
            onClick={() => {
              scrollToRef(refs[3], 200);
            }}
          >
            Contact
          </Button>
        </ButtonGroup>
      </StickyHeader>
      <ProfileSection ref={refs[0]} />
      <ExperiencesSection ref={refs[1]} />
      <StackSection ref={refs[2]} />
      <ContactSection ref={refs[3]} />
    </div>
  );
};

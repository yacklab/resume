import React, { useRef } from "react";
import { ParticuleNetwork, StickyHeader } from "../../components";
// import { useScrollSpy } from "../../hooks";
import { Button } from "@material-ui/core";

import { scrollToRef } from "../../helpers";
import { useScrollSpy } from "../../hooks";
import { ProfileSection } from "./sections/profile";
import { ExperiencesSection } from "./sections/experiences";
import StackSection from "./sections/stack";

export const HomeView: React.FunctionComponent = () => {
  const refs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
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
        <Button
          color={activeSectionIndex === 0 ? "secondary" : "default"}
          onClick={() => {
            scrollToRef(refs[0], 210);
          }}
        >
          Profile
        </Button>
        <Button
          color={activeSectionIndex === 1 ? "secondary" : "default"}
          onClick={() => {
            scrollToRef(refs[1], 200);
          }}
        >
          Experiences
        </Button>
        <Button
          color={activeSectionIndex === 2 ? "secondary" : "default"}
          onClick={() => {
            scrollToRef(refs[2], 200);
          }}
        >
          Stack
        </Button>
      </StickyHeader>
      <ProfileSection ref={refs[0]} />
      <ExperiencesSection ref={refs[1]} />
      <StackSection ref={refs[2]} />
    </div>
  );
};
//  <div style={{ height: vh(500) }}>
//    <Typography variant="h1" component="h2" gutterBottom>
//      h1. Heading
//    </Typography>
//    <Typography variant="h2" gutterBottom>
//      h2. Heading
//    </Typography>
//    <Typography variant="h3" gutterBottom>
//      h3. Heading
//    </Typography>
//    <Typography variant="h4" gutterBottom>
//      h4. Heading
//    </Typography>
//    <Typography variant="h5" gutterBottom>
//      h5. Heading
//    </Typography>
//    <Typography variant="h6" gutterBottom>
//      h6. Heading
//    </Typography>
//    <Typography variant="subtitle1" gutterBottom>
//      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//      blanditiis tenetur
//    </Typography>
//    <Typography variant="subtitle2" gutterBottom>
//      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//      blanditiis tenetur
//    </Typography>
//    <Typography variant="body1" gutterBottom>
//      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
//      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
//      Eum quasi quidem quibusdam.
//    </Typography>
//    <Typography variant="body2" gutterBottom>
//      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
//      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
//      Eum quasi quidem quibusdam.
//    </Typography>
//    <Typography variant="button" display="block" gutterBottom>
//      button text
//    </Typography>
//    <Typography variant="caption" display="block" gutterBottom>
//      caption text
//    </Typography>
//    <Typography variant="overline" display="block" gutterBottom>
//      overline text
//    </Typography>
//  </div>;

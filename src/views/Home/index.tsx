import React, { useRef } from "react";
import { ParticuleNetwork, StickyHeader } from "../../components";
// import { useScrollSpy } from "../../hooks";
import { Button } from "@material-ui/core";
import { scrollToRef, vh } from "../../helpers";

export const HomeView: React.FunctionComponent = () => {
  const refs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ];
  // const activeSectionIndex = useScrollSpy(refs, {
  //   offset: -128
  // });

  return (
    <div className="home-bg">
      <ParticuleNetwork />
      <StickyHeader offset={64}>
        <Button
          // type={activeSectionIndex === 0 ? "primary" : "link"}
          onClick={() => {
            scrollToRef(refs[0]);
          }}
        >
          History
        </Button>
      </StickyHeader>
      <div style={{ height: vh(500) }}>he</div>
    </div>
  );
};

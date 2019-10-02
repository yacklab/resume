import React, { useRef, useEffect } from "react";
import { ParticuleNetwork, StickyHeader } from "../../components";
import { useScrollSpy } from "../../hooks";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { scrollToRef, vh } from "../../helpers";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     button: {
//       margin: theme.spacing(1)
//     },
//     input: {
//       display: "none"
//     }
//   })
// );

const Home: React.FunctionComponent = () => {
  const xlSize = 14;
  const refs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ];
  const sectionIndex = useScrollSpy(refs, {
    offset: -128
  });

  return (
    <div className="home-bg">
      <ParticuleNetwork />
      <StickyHeader offset={64}>
        <Button
          // type={sectionIndex === 0 ? "primary" : "link"}
          onClick={() => {
            scrollToRef(refs[0]);
          }}
        >
          History
        </Button>
      </StickyHeader>
      <div style={{ height: vh(200) }}>he</div>
    </div>
  );
};

export default Home;

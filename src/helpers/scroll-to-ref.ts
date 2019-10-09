import { MutableRefObject } from "react";

const isIOS = (): boolean =>
  !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

type Easings =
  | "linear"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic"
  | "easeInQuart"
  | "easeOutQuart"
  | "easeInOutQuart"
  | "easeInQuint"
  | "easeOutQuint"
  | "easeInOutQuint";

//  https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
function smoothScroll(
  destination: number,
  duration: number = 200,
  easing: Easings = "linear"
) {
  const start = window.pageYOffset;
  const startTime = performance.now();
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName("body")[0].clientHeight;
  const destinationOffsetToScroll = Math.round(
    documentHeight - destination < windowHeight
      ? documentHeight - windowHeight
      : destination
  );
  const easings = {
    linear(t: number) {
      return t;
    },
    easeInQuad(t: number) {
      return t * t;
    },
    easeOutQuad(t: number) {
      return t * (2 - t);
    },
    easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t: number) {
      return t * t * t;
    },
    easeOutCubic(t: number) {
      return --t * t * t + 1;
    },
    easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t: number) {
      return t * t * t * t;
    },
    easeOutQuart(t: number) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart(t: number) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint(t: number) {
      return t * t * t * t * t;
    },
    easeOutQuint(t: number) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint(t: number) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  function scroll() {
    const now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    const timeFunction = easings[easing](time);
    window.scroll(
      0,
      Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
    );
    if (window.pageYOffset === destinationOffsetToScroll) {
      return;
    }
    requestAnimationFrame(scroll);
  }
  scroll();
}

const scrollToRef = (
  ref: MutableRefObject<HTMLElement | null>,
  offset: number = 0
) => {
  if (ref && ref.current) {
    const top = ref.current.offsetTop - offset;
    if (isIOS()) {
      smoothScroll(top, undefined, "linear");
    } else {
      window.scrollTo({
        left: 0,
        top,
        behavior: "smooth"
      });
    }
  }
};

export default scrollToRef;

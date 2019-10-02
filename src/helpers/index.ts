import { MutableRefObject } from "react";

// Not safe for server rendering
export const vh = function(v: number) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
};

export const scrollToRef = (ref: MutableRefObject<HTMLElement | null>) => {
  if (ref && ref.current) {
    window.scrollTo(0, ref.current.offsetTop - 128);
  }
};

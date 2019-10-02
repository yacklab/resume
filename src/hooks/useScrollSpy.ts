import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

export default (
  refs: React.RefObject<HTMLElement>[],
  { defaultActiveIndex = 0, throttling = 100, offset = 0 }
) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const handler = debounce(
    () => {
      const active = refs.reduce(
        (acc, ref, index) => {
          if (ref && ref.current) {
            const refPos = ref.current.getBoundingClientRect().top + offset;
            if (refPos < 0) {
              return {
                index,
                pos: refPos
              };
            } else {
              return acc;
            }
          } else {
            return acc;
          }
        },
        { index: defaultActiveIndex, pos: 0 }
      );
      setActiveIndex(active.index);
    },
    throttling,
    { leading: true, trailing: true }
  );

  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [refs, offset, handler]);

  return activeIndex;
};

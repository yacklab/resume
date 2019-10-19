// Not safe for server rendering
const vh = (v: number): number => {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
};

export default vh;

import Lenis from "@studio-freight/lenis";

export const initScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => t, // easing lineal
    orientation: "vertical", // obligatorio en TS
    gestureOrientation: "vertical", // gestos de scroll
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
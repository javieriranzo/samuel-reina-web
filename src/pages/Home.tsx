import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const poeticRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(poeticRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>

      <div className="content">
        <h1 ref={titleRef} className="title">Samuel Reina</h1>
        <p ref={poeticRef} className="poetic">
          "No escribo canciones.
          <br />
          Dejo que algo se rompa en silencio."
        </p>
      </div>
    </section>
  );
}
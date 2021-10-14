import React from "react";
import styles from "../styles/Index.module.css";
import { useSprings, animated } from "react-spring";

export default function AnimatedImage() {
  const bubbles = [
    <img
      alt="bubble"
      src="bubble.png"
      className={styles.bubbles}
      key="bubble1"
    ></img>,
    <img
      alt="bubble"
      src="bubble.png"
      className={styles.bubbles2}
      key="bubble2"
    ></img>,
    <img
      alt="bubble"
      src="bubble.png"
      className={styles.bubbles3}
      key="bubble3"
    ></img>,
    <img
      alt="bubble"
      src="bubble.png"
      className={styles.bubbles4}
      key="bubble4"
    ></img>,
  ];
  const springs = useSprings(
    bubbles.length,
    bubbles.map((value, index) => {
      return {
        from: {
          opacity: 0,
          transform: "translate3d(-1000px, 0px, 0px)",
        },
        to: { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
        delay: (index + 1) * 500,
      };
    })
  );

  return (
    <div style={{ position: "relative" }}>
      {springs.map((style, index) => (
        <animated.div style={style}>{bubbles[index]}</animated.div>
      ))}
      <img className="img-fluid" src="/people.png" alt="people"></img>
    </div>
  );
}

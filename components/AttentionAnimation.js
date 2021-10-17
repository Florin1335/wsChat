import React from "react";
import { useSpring, animated } from "react-spring";

export default function AttentionAnimation(props) {
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    config: { duration: 1000 },
  });
  return (
    <animated.div
      style={{
        opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
        scale: x.to({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
        }),
      }}
    >
      {props.children}
    </animated.div>
  );
}

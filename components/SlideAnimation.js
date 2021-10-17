import React from "react";
import { useSpring, animated } from "react-spring";

export default function SlideAnimation(props) {
  const styles = useSpring({
    from: { x: props.self ? "100vw" : "-100vw" },
    to: { x: "0vw" },
  });
  return <animated.div style={styles}>{props.children}</animated.div>;
}

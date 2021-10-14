import React from "react";
import { useSpring, animated } from "react-spring";

export default function SlideAnimation(props) {
  const styles = useSpring({
    from: { x: props.self ? 300 : -300 },
    to: { x: 0 },
  });
  return <animated.div style={styles}>{props.children}</animated.div>;
}

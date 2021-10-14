import React from "react";
import { useSpring, animated } from "react-spring";

export default function TextMountAnimation({ children }) {
  return <animated.div>{children}</animated.div>;
}

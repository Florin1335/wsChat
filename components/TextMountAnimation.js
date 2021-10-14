import React from "react";
import { useSprings, animated } from "react-spring";

export default function TextMountAnimation({ children, ...props }) {
  const items = children.split("");

  const styles = useSprings(
    items.length,
    items.map((value, index) => {
      return {
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: (index + 1) * 150,
      };
    })
  );
  return (
    <p {...props}>
      {styles.map((value, index) => (
        <animated.span key={index} style={value}>
          {items[index]}
        </animated.span>
      ))}
    </p>
  );
}

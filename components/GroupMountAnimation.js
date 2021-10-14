import React from "react";
import { useSprings, animated } from "react-spring";

export default function GroupMountAnimation({ children }) {
  const springs = useSprings(
    children.length,
    children.map((value, index) => {
      return {
        from: { y: "100vh" },
        to: { y: "0px" },
        delay: (index + 1) * 700,
      };
    })
  );
  return (
    <>
      {springs.map((value, index) => (
        <animated.div style={value} key={index}>
          {children[index]}
        </animated.div>
      ))}
    </>
  );
}

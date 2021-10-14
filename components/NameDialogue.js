import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
export default function NameDialogue(props) {
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);
  const [display, setDisplay] = useState(true);
  const stylesForm = useSpring({
    from: {
      transform: clicked
        ? "translate3d(0px, -1000rem, 0px)"
        : "translate3d(0px, -100rem, 0px)",
    },
    to: { transform: "translate3d(0px, 0px, 0px)" },
    reverse: clicked ? true : false,
    config: config.gentle,
  });
  const stylesDiv = useSpring({
    opacity: clicked ? "0" : "0.75",
    config: config.slow,
    onRest: () => {
      setDisplay(false);
    },
  });
  return (
    <animated.div
      className={`${
        display ? "position-fixed" : "d-none"
      } min-vh-100 min-vw-100 bg-light`}
      style={{ zIndex: "100000", ...stylesDiv }}
    >
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        <animated.div style={stylesForm}>
          <form className="d-flex flex-column gap-2 bg-dark p-5 rounded">
            <input
              className="form-control"
              placeholder="Enter your name..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              className="btn btn-light"
              onClick={(e) => {
                props.handleNameSet(e, input);
                setClicked(true);
              }}
              disabled={input.length < 2 || input.length > 16 ? true : false}
            >
              Connect
            </button>
          </form>
        </animated.div>
      </div>
    </animated.div>
  );
}

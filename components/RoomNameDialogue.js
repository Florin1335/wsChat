import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
export default function NameDialogue(props) {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
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
              placeholder="Room name..."
              value={roomName}
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
            ></input>
            <input
              className="form-control"
              placeholder="User name..."
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              className="btn btn-light"
              onClick={(e) => {
                props.handleNameSet(e, { roomName, userName });
                setClicked(true);
              }}
              disabled={
                userName.length < 2 ||
                userName.length > 16 ||
                roomName.length < 2 ||
                roomName.length > 32
                  ? true
                  : false
              }
            >
              Connect
            </button>
          </form>
        </animated.div>
      </div>
    </animated.div>
  );
}

import React, { useReducer, useEffect } from "react";
import Paragraph from "../../../components/Paragraph";
import SlideAnimation from "../../../components/SlideAnimation";
import UsersButton from "../../../components/UsersButton";
import styles from "../../../styles/Public.module.css";
import Head from "next/head";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";

const reducer = (state, action) => {
  switch (action.type) {
    case "wsCreate": {
      return { ...state, ws: action.payload };
    }
    case "wsDestroy": {
      return { ...state, ws: null };
    }
    case "wsConnected": {
      return { ...state, connected: true };
    }
    case "wsMessageReceived": {
      return { ...state, messages: [...state.messages, action.payload] };
    }
    case "error": {
      return { ...state, error: action.payload };
    }
    case "inputChange": {
      return { ...state, input: action.payload };
    }
    case "nameSet": {
      return { ...state, name: action.payload };
    }
    case "usersChange": {
      return { ...state, users: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default function PrivateRoom() {
  const initialState = {
    ws: null,
    messages: [],
    input: "",
    error: null,
    connected: false,
    name: null,
    users: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { ws, messages, input, error, connected, name, users } = state;

  const router = useRouter();

  useEffect(() => {
    if (router.query.roomName && router.query.userName)
      dispatch({ type: "nameSet", payload: router.query.userName });
  }, [router]);

  useEffect(() => {
    const connectToWs = () => {
      const websocket = new WebSocket(
        process.env.NEXT_PUBLIC_PUBLIC_ROOM + "/" + router.query.roomName
      );
      websocket.onopen = () => {
        websocket.send(JSON.stringify({ type: "onopen", payload: name }));
        dispatch({ type: "wsConnected" });
      };
      websocket.onmessage = (event) => {
        let data = JSON.parse(event.data);
        if (data.users) dispatch({ type: "usersChange", payload: data.users });
        dispatch({
          type: "wsMessageReceived",
          payload: data,
        });
      };
      websocket.onclose = () => {
        dispatch({ type: "wsDestory" });
        dispatch({ type: "error", payload: "No connection." });
      };
      dispatch({ type: "wsCreate", payload: websocket });
    };
    if (name) {
      connectToWs();
    }
  }, [name]);

  const handleSend = (e) => {
    e.preventDefault();
    if (ws && connected) {
      if (input && input !== "") {
        ws.send(JSON.stringify({ type: "onmessage", payload: input, name }));
        dispatch({ type: "inputChange", payload: "" });
      }
    } else {
      dispatch({ type: "error", payload: "No connection." });
    }
  };

  return (
    <div
      className={`${styles.room} d-flex align-items-center min-vh-100 flex-column`}
    >
      <Head>
        <title>Public room</title>
        <meta name="description" content="Public websocket chat room" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div
        className={`${styles.chat} container d-flex flex-column border bg-white p-3`}
        style={{ position: "relative" }}
      >
        <div className="w-100">
          <h1 className="text-center">Public and anonymous room</h1>
          {error && <p className="text-danger fs-5 text-center">{error}</p>}
          <hr></hr>
        </div>

        <div className="flex-grow-1" style={{ overflowY: "auto" }}>
          {messages.map((value, index) => (
            <SlideAnimation self={value.self} key={index}>
              <Paragraph data={value}></Paragraph>
            </SlideAnimation>
          ))}
        </div>

        <form>
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => {
              dispatch({ type: "inputChange", payload: e.target.value });
            }}
          ></input>
          <div className="d-flex flex-row justify-content-between mt-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSend}
              disabled={connected ? false : true}
            >
              Send
            </button>
            <UsersButton users={users}></UsersButton>
          </div>
        </form>
      </div>
    </div>
  );
}

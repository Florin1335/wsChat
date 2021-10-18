import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/CreateRoom.module.css";
import Footer from "../../components/Footer.js";
import { useRouter } from "next/router";
import SlideAnimation from "../../components/SlideAnimation";
import AttentionAnimation from "../../components/AttentionAnimation";

const Slide1 = (props) => {
  return (
    <SlideAnimation>
      <div className="mb-3">
        <p className="display-2 pb-4">Enter the room name</p>
        <input
          className="form-control w-75 ms-auto fs-5"
          placeholder="Room name..."
          value={props.value}
          onChange={(e) => {
            props.handleInputChange(e, "roomName");
          }}
        ></input>
      </div>
    </SlideAnimation>
  );
};

const Slide2 = (props) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (props.slide >= 2) setDisplay(true);
  }, [props.slide]);

  return (
    <SlideAnimation>
      <div className={`${display ? "d-block" : "d-none"} mb-3`}>
        <p className="display-2 pb-4">Enter your name</p>
        <input
          className="form-control w-75 ms-auto fs-5"
          placeholder="Your name..."
          value={props.value}
          onChange={(e) => {
            props.handleInputChange(e, "userName");
          }}
        ></input>
      </div>
    </SlideAnimation>
  );
};

export default function CreateRoom() {
  const [slide, setSlide] = useState(1);
  const [input, setInput] = useState({
    roomName: "",
    userName: "",
  });
  const [buttonName, setButtonName] = useState("Next");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleInputChange = (e, name) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value,
      };
    });
  };

  const handleButtonClick = () => {
    setError(null);
    const nrSlideuri = 2;
    if (slide === nrSlideuri) {
      if (input.roomName !== "" && input.userName !== "") {
        fetch(`${process.env.NEXT_PUBLIC_CRATE_ROOM}/${input.roomName}`, {
          method: "GET",
          headers: { Accept: "application/json" },
        })
          .then((value) => {
            if (!value.ok) throw value;
            return value.json();
          })
          .then((value) => {
            //on success
            router.push(
              `/chat/private_room/${input.roomName}?userName=${input.userName}`
            );
          })
          .catch((err) => {
            try {
              err.json().then((value) => {
                //handle api error response
                setError(value);
              });
            } catch (error) {
              //fetch error
              setError("Network error.");
            }
          });
      } else {
        setError("All fields are required!");
      }
    } else {
      setSlide((prevState) => prevState + 1);
      if (slide + 1 >= nrSlideuri) {
        setButtonName("Create and join room");
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Create private chat room</title>
        <meta name="description" content="Create private websocket chat room" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} d-flex flex-column`}>
        <Navbar></Navbar>
        <div className="container mt-5 pt-0 pt-md-5 ps-1 pe-1 pb-1">
          <Slide1
            handleInputChange={handleInputChange}
            value={input.roomName}
          ></Slide1>
          {slide === 2 && (
            <Slide2
              slide={slide}
              handleInputChange={handleInputChange}
              vale={input.userName}
            ></Slide2>
          )}
          <div className="mt-4 d-flex justify-content-end">
            <button
              className="btn btn-primary pt-3 pb-3 ps-5 pe-5 fs-5"
              onClick={handleButtonClick}
            >
              {buttonName}
            </button>
          </div>
          {error && (
            <AttentionAnimation>
              <p className="display-6 mt-2 text-center alert-danger rounded p-1">
                {error}
              </p>
            </AttentionAnimation>
          )}
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

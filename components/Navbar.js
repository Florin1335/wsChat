import React from "react";
import styles from "../styles/Navbar.module.css";

function Logo() {
  return (
    <div className="d-flex flex-row gap-1 justify-content-center align-content-center">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          fill="currentColor"
          className="bi bi-chat-dots mt-1"
          viewBox="0 0 16 16"
        >
          <path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"></path>
          <path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z"></path>
        </svg>
      </span>
      <p className="fs-4">Chat</p>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className={`${styles.navbar} p-5 row w-100`}>
      <div className="col-12 col-sm-2">
        <Logo></Logo>
      </div>
      <div className="col-12 col-md-8">
        <div className="d-flex flex-row gap-4 gap-md-5 justify-content-center">
          <a href="/" className="fs-5">
            Home
          </a>
          <a href="/chat/public_room" className="fs-5">
            Public room
          </a>
          <a href="/chat/create_room" className="fs-5">
            Create room
          </a>
          <a href="/chat/private_room" className="fs-5">
            Join room
          </a>
        </div>
      </div>
      <div className="col-2 d-none d-md-block">
        <button className={`${styles.btnWhite} btn rounded-pill fs-5`}>
          Demo
        </button>
      </div>
      <div className="d-block d-md-none">
        <button
          className={`${styles.btnWhite} ${styles.cornerButton} btn rounded-pill fs-5`}
        >
          Demo
        </button>
      </div>
    </div>
  );
}

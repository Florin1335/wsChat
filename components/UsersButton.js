import React, { useState } from "react";
import styles from "../styles/Public.module.css";

export default function UsersButton({ users }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`${
          show ? "container" : "d-none"
        } bg-light d-flex flex-column pb-2 ${styles.users}`}
      >
        <button
          className="btn btn-danger"
          style={{ position: "absolute", right: 0 }}
          type="button"
          onClick={() => {
            setShow((prevState) => !prevState);
          }}
        >
          Close
        </button>
        <h1 className="text-center">Live user list</h1>
        <hr />
        <div className={`${styles.usersDiv} d-flex flex-column flex-grow-1`}>
          {users.map((value, index) => (
            <p key={index}>{`${index + 1}. ${value}`}</p>
          ))}
        </div>
      </div>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => {
          setShow((prevState) => !prevState);
        }}
      >
        Users in chat ({users.length})
      </button>
    </>
  );
}

import React from "react";
import styles from "../styles/Chat.module.css";

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-plug"
      viewBox="0 0 16 16"
    >
      <path d="M6 0a.5.5 0 01.5.5V3h3V.5a.5.5 0 011 0V3h1a.5.5 0 01.5.5v3A3.5 3.5 0 018.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 01-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 003 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 014 6.5v-3a.5.5 0 01.5-.5h1V.5A.5.5 0 016 0zM5 4v2.5A2.5 2.5 0 007.5 9h1A2.5 2.5 0 0011 6.5V4H5z"></path>
    </svg>
  );
};

export default function Paragraph({ data }) {
  if (data.connectionMsg) {
    if (data.self === true) {
      return (
        <div className="row g-0 justify-content-end">
          <div className="col-11 col-sm-10 col-md-9 col-lg-7">
            <p className={styles.selfParagraph + " p-2"}>
              <Icon></Icon> {data.message}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row g-0">
          <div className="col-11 col-sm-10 col-md-9 col-lg-7">
            <p className={styles.paragraph + " p-2"}>
              <Icon></Icon> {data.message}
            </p>
          </div>
        </div>
      );
    }
  } else {
    if (data.self === true) {
      return (
        <div className="row g-0 justify-content-end">
          <div className="col-11 col-sm-10 col-md-9 col-lg-7">
            <p className={styles.selfParagraph + " p-2 fs-5"}>{data.message}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row g-0">
          <div className="col-11 col-sm-10 col-md-9 col-lg-7">
            <p className={styles.paragraph + " p-2 fs-5"}>{data.message}</p>
          </div>
        </div>
      );
    }
  }
}

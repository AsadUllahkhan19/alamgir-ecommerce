import React from "react";
import styles from "./styles.module.css";

const Loading= () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.logoloader}
        width="200"
        height="60"
        viewBox="0 0 460 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle fill="#581845" stroke="none" cx="50" cy="100" r="50">
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            type="translate"
            values="0 15 ; 0 -15; 0 15"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="#900C3F" stroke="none" cx="180" cy="100" r="50">
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            type="translate"
            values="0 10 ; 0 -10; 0 10"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
        <circle fill="#C70039" stroke="none" cx="310" cy="100" r="50">
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.5"
          />
        </circle>
        <circle fill="#00203FFF" stroke="none" cx="450" cy="100" r="50">
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.7"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;

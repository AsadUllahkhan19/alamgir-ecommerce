import styles from "./style.module.css"
import asd from "../../logo.svg";
import React from "react";

const NewArrival = () => {

  return (
    <div className={styles.heroSection}>
            <div className={styles.heroBox}>
                <span className={styles.heroHeading}>Vision</span><br/>
                <div className={styles.btnBox}>
                    We Strive To Give You Best Experience
                </div>
            </div>
        </div>
  );
};

export default NewArrival;

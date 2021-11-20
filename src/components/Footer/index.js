import styles from "./style.module.css";
import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as Insta } from "../../Assets/instagram.svg";
import { ReactComponent as Face } from "../../Assets/facebook2.svg";
import {Link} from "react-router-dom";

const Foooter = () => {
  const [email, setEmail] = useState("");

  const _handleLogin = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert("Please Enter Valid Email");
      return false;
    }
    const obj = { email };
    axios.post("/products/letter", obj);
    alert("Sent Successfully");
    setEmail("");
  };
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.insta}>
        <a href="https://www.instagram.com/alummatclothing/" target="_blank"  >
          <Insta />
          </a>
        </div>
        <div className={styles.insta}>
        <a href="https://www.facebook.com/Al-ummat-clothing-106071041817286" target="_blank"  >
          <Face />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foooter;

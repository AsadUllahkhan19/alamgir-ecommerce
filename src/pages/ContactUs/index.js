import { useState, useEffect } from "react";
import styles from "./style.module.css";
import TopNavbar from "../../components/TopNavbar";
import axios from "axios";
import Footer from "../../components/Footer";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const _handleContact = () =>{
      if(email == ""){
          alert("Please Enter Email")
          return false
      }
      if(name == ""){
        alert("Please Enter Name")
          return false
      }
      if(message == ""){
        alert("Please Enter Message")
          return false
      }
    const obj = {email,message,name}
    axios.post("/products/getMail",obj)
      alert("Message Sent Successfully")
  }

  return (
    <>
    <TopNavbar/>
    <div className={styles.Container}>
      <span className={styles.heading}>Contact Us</span>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter Name"
        className={styles.email}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        className={styles.password}
      />
      <textarea value={message} onChange={(e)=>setMessage(e.target.value)} id="w3review" name="w3review" rows="4" cols="40" placeholder="Enter Message">

      </textarea>
      <button className={styles.btn} onClick={_handleContact}>
          Contact Us
      </button>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;

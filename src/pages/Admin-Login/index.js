import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const _handleLogin = () => {
    if (email !== "asad" && password !== "asad") {
      alert("Please Enter Valid Email Password");
      return false;
    }
    if (email === "asad" && password === "asad") {
      props.onAuthentication();
    }
    history.push("/adminwomenjeans");
  };

  return (
    <div className={styles.Container}>
      <span className={styles.heading}>Admin Login</span>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        className={styles.email}
      />
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        className={styles.password}
      />
      <button onClick={_handleLogin}>Sign In</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthentication: () => dispatch({ type: "UPDATE_USER", login: true }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);

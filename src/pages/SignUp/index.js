import {useState,useEffect} from "react";
import styles from "./style.module.css";
import { Redirect, Switch, Route, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {updateUser} from "../../store/actions/authActions"

const SignUp = (props) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")

  useEffect(()=>{
    // axios.get("/products/checks")
    //   alert("SignUp Successfull")
  },[])

  const _handleLogin = () => {
   const obj = {email,password,name}
    axios.get("/products/checks")
      alert("SignUp Successfull")
  }

  return (
    <div className={styles.Container}>
      {console.log(props.name)}
      {console.log(props.age)}
      <span className={styles.heading}>Sign Up</span>
      <input type="text"
      onChange={(e)=>setName(e.target.value)} value={name}
      placeholder="Enter Name" className={styles.email} />
      <input type="text"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Enter Email" className={styles.password} />
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(e)=>setPassword(e.target.value)}
        className={styles.password}
        value={password}
      />
      <button>
      <Link className={styles.btn} onClick={_handleLogin} >
        Sign Up
        </Link>
      </button>
    </div>
  );
};


 const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(null,mapDispatchToProps)(SignUp);

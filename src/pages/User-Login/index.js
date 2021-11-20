import axios from "axios";
import {useState,useEffect} from "react";
import styles from "./style.module.css";
import { Redirect, Switch, Route, Link, useHistory } from "react-router-dom";

const UserLogin = (props) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory(); 
 
  const _handleLogin = () =>{

      // props.history.push('/AdminJuniorShorts');
    // <Link to={"/AdminJuniorShorts"} />
    axios.post("/products/login",{email,password}).then((res)=>{
      console.log(res.data.error)
      if(res.data.error == "khan"){
        alert("Wrong Email or Password")
      }else{
        history.push("/");
      }
    })
  }

  return (
    <div className={styles.Container}>
      <span className={styles.heading}>Login</span>
      <input type="text"
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="Enter Email" className={styles.password} />
      <input
        type="text"
        placeholder="Enter Password"
        onChange={(e)=>setPassword(e.target.value)}
        className={styles.password}
      />
      <button onClick={_handleLogin} className={styles.btn}>
      {/* {"true" == "true" && <Link to="/" className={styles.btn} onClick={_handleLogin} > */}
        Sign In
        {/* </Link>} */}
      </button>
    </div>
  );
};

export default UserLogin;

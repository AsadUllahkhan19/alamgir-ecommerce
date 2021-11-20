import React,{useState} from 'react';
import { ReactComponent as Cross } from "../../Assets/cross.svg";
import { Link, useHistory } from "react-router-dom";

import styles from "./SideDrawer.module.css"

const AdminSideDrawer = props => {
  const [size,setSize] = useState("3")
  let history = useHistory();
  //  let drawerClasses = "side-drawer";
  // if (props.show) {
  //   drawerClasses = 'side-drawer open';
  // }

  const _handle = () =>{
    props.logout()
    history.replace("/");
  }

  return (
    <nav className={props.show?styles.sidedrawer:[styles.sidedrawer,styles.open].join(" ")}>
      <Cross onClick={props.toggle} className={styles.close} />
      <div className={styles.Credentials}>
        <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/CreateProductLogin-page" className={styles.link}>Add Product</Link></div>
        <div style={{color:"#fe8033",textDecoration:"none",marginTop:20}}><Link to="/order" className={styles.link} >Orders</Link></div>
      </div>
        <div className={styles.sizes}>
          <div onClick={()=>setSize("1")}>Ladies</div>
          <div onClick={()=>setSize("2")}>Men's</div>
          <div onClick={()=>setSize("3")}>Junior</div>
        </div>
        {size === "1" 
          &&
          <div className={styles.Wear}>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminWomenJeans" className={styles.link}>Ladies Jeans</Link></div>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminWomenShorts" className={styles.link}>Ladies Short</Link></div>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminWomenJacket" className={styles.link}>Ladies Jacket</Link></div>
          </div>
        }
        {size === "2" 
          &&
          <div className={styles.Wear}>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminMenJeans" className={styles.link}>Men's Jeans</Link></div>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminMenShorts" className={styles.link}>Men's Short</Link></div>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminMenJacket" className={styles.link}>Men's Jacket</Link></div>
          </div>
        }
        {size === "3" 
          &&
          <div className={styles.Wear}>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminJuniorJeans" className={styles.link}>Junior Jeans</Link></div>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminJuniorShorts" className={styles.link}>Junior Short</Link></div>
            <div style={{color:"#fe8033",textDecoration:"none",marginTop:10}}><Link to="/AdminJuniorJacket" className={styles.link}>Junior Jacket</Link></div>
          </div>
        }
        <div style={{color:"#fe8033",textDecoration:"none",marginTop:20}} className={styles.Wear} onClick={_handle}>Logout</div>
    </nav>
  );
};

export default AdminSideDrawer;
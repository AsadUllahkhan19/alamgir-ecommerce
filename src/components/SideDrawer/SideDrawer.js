import React,{useState} from 'react';
import { ReactComponent as Cross } from "../../Assets/cross.svg";
import { Redirect, Switch, Route, Link, useHistory } from "react-router-dom";

import './SideDrawer.css';

const SideDrawer = props => {
  const [size,setSize] = useState("2")
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <Cross onClick={props.toggle} className="close" />
      <div className="Credentials">
        <Link to="/" style={{color:"#fe8033",marginTop:20}}><div>Home</div></Link>
        <Link to="/cart" style={{color:"#fe8033",marginTop:20}}><div>Cart</div></Link>
        <Link style={{color:"#fe8033",marginTop:20}} to="/AdminLogin-page"><div>Admin</div></Link>
      </div>
      <div className="sizes">
          <div onClick={()=>setSize("1")}>Ladies</div>
          <div onClick={()=>setSize("2")}>Men's</div>
          <div onClick={()=>setSize("3")}>Junior</div>
        </div>
        {size === "1" 
          &&
          <div className="Wear">
            <Link to="/Women-jeans" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Ladies Jeans</div>
            </Link>
            <Link to="/Women-Shorts" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Ladies Short</div>
            </Link>
            <Link to="/Women-Jacket" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Ladies Jacket</div>
            </Link>
          </div>
        }
        {size === "2" 
          &&
          <div className="Wear">
            <Link to="/Men-Jeans" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Men's Jeans</div>
            </Link>
            <Link to="/Men-short" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Men's Short</div>
            </Link>
            <Link to="/Men-Jacket" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Men's Jacket</div>
            </Link>
          </div>
        }
        {size === "3" 
          &&
          <div className="Wear">
            <Link to="/Junior-Jeans" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Junior Jeans</div>
            </Link>
            <Link to="/Junior-Shorts" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Junior Short</div>
            </Link>
            <Link to="/Junior-Jacket" style={{color:"#fe8033",textDecoration:"none",marginTop:10}}>
            <div>Junior Jacket</div>
            </Link>
          </div>
}
    </nav>
  );
};

export default SideDrawer;
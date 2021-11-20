import React,{useState} from 'react';
import { ReactComponent as Search } from "../../Assets/search.svg";
import { ReactComponent as Cart } from "../../Assets/cart.svg";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import {Link } from "react-router-dom";
import './Toolbar.css';
import axios from "axios";
import { connect } from "react-redux";
import car from "../../Assets/logo.png"

const Toolbar = props => {
   const [search,setSarch] = useState(false) 
   const [item,setItem] = useState("")

   const _handleSearch = ()=>{
    console.log(item.replace(/\s+/g, '').toLowerCase());
    axios.get("/products/search/"+item).then(res=>console.log(res.data))
    setSarch(!search)
  }
return(
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <Link to="/" style={{textDecoration:"none"}}>
        <div className="toolbar__logo">
        <img src={car} width="50px" height="50px" className="img" />
          <a href="/">Al Ummat</a>
          </div>
        </Link>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                {/* <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li> */}
                {/* <Search className="Search" onClick={()=>{setSarch(!search)}} /> */}
                <Link to="/cart" style={{textDecoration:"none"}}>
                <Cart className="Cart" />
                {props.ctr && <span style={{verticalAlign:"top",backgroundColor:"#333",padding:3,borderRadius:25,fontSize:10}}>{props.ctr.length}</span>}
                </Link>
            </ul>
        </div>
    </nav>
    {search && 
    <div className="SearchBox">
      <input type="text" placeholder="Search By Name"
      onChange={(e)=>setItem(e.target.value)} value={item}
      className="SearchBar"/>
      {console.log(props.ctr)}
      <button className="SearchBtn" onClick={_handleSearch}>Search</button>
    </div>
    }
  </header>
);}

const mapStateToProps = (state) => {
  return {
    ctr: state.cart.items,
  };
};

export default connect(mapStateToProps)(Toolbar);
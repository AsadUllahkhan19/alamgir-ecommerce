import React,{useContext,useState,useEffect} from "react"
import styles from "./style.module.css";
import { ReactComponent as Menu } from "../../Assets/menu.svg";
import { ReactComponent as Cart } from "../../Assets/cart.svg";
import { ReactComponent as Search } from "../../Assets/search.svg";
import axios from "axios";

const Navbar = () => {
  const [search,toggleSearch] = useState(false)
  const [item,setItem] = useState("")
 
  const _handleSearch = ()=>{
    console.log(item);
    axios.get("/products/search/"+item)
    // toggleSearch(!search)
  }
 
  return (
    <div>
      
    <div className={styles.main}>
      <span className={styles.leftBar} onClick={()=>console.log("hello")}>Parati Clothing</span>
      <div className={styles.rightBar}>
        {/* <Search className={styles.search} onClick={()=>toggleSearch(!search)}/> */}
        {/* <Cart className={styles.cart} /> */}
        {/* <Menu 
        // onClick={()=>setToggle(true)}
         /> */}
      </div>
    </div>
    <div className={search?styles.searchGroup:styles.searchBar}>
    <input type="text" placeholder="Search By Name" onChange={(e)=>setItem(e.target.value)}
    value={item}
     className={styles.searchBarToggle}
    />
    <button className={styles.searchButton}
    onClick={_handleSearch}
    >khan!</button>
    </div>
    </div>
  );
};

export default Navbar;

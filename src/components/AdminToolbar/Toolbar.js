import React,{useState} from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import styles from './Toolbar.module.css';

const AdminToolbar = props => {
   const [search,setSarch] = useState(false) 
return(
  <header className={styles.toolbar}>
    <nav className={styles.toolbar__navigation}>
        <div className={styles.toolbar__toggle_button}>
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={styles.toolbar__logo}><a href="/">Al Ummat Clothing</a></div>
        <div className={styles.spacer} />
        <div className={styles.toolbar_navigation_items}>
            <ul>
                {/* <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li> */}
                {/* <Search className={styles.Search} onClick={()=>{setSarch(!search)}} />
                <Cart className={styles.Cart} /> */}
            </ul>
        </div>
    </nav>
    {search && 
    <div className={styles.SearchBox}>
      <input type="text" placeholder="Search By Name" className={styles.SearchBar}/>
      <button className={styles.SearchBtn} onClick={()=>{setSarch(!search)}}>Search</button>
    </div>
    }
  </header>
);}

export default AdminToolbar;
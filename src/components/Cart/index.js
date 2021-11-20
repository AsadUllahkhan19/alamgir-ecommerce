import React from 'react';
import { ReactComponent as Cross } from "../../Assets/cross.svg";

import './SideDrawer.css';

const Cart = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <Cross onClick={props.toggle} />
      <ul>
        <li>
          <a href="/">ASad</a>
        </li>
        <li>
          <a href="/">Khan</a>
        </li>
      </ul>
    </nav>
  );
};

export default Cart;
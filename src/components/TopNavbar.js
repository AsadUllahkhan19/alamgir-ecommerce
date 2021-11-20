import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './/Backdrop/Backdrop';

class TopNavbar extends Component {
  state = {
    sideDrawerOpen: false,
    cart:false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  cartHandler = () => {
    this.setState((prevState) => {
      return {cart: !prevState.cart};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{width:"100%"}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}
        cartHandler={this.cartHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} toggle={this.drawerToggleClickHandler} />
        {backdrop}
        {/* <Cart show={this.cartHandler}/> */}
        {/* <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main> */}
        
      </div>
    );
  }
}

export default TopNavbar;
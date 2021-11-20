import React, { Component } from 'react';
import AdminToolbar from './AdminToolbar/Toolbar';
import AdminSideDrawer from './AdminSideDrawer/SideDrawer';
import Backdrop from './/Backdrop/Backdrop';
import {connect} from "react-redux"
import Cart from "./Cart"

class AdminTopNavbar extends Component {

  state = {
    sideDrawerOpen: false,
    cart:false
  }


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
        <AdminToolbar drawerClickHandler={this.drawerToggleClickHandler} cartHandler={this.cartHandler} />
        <AdminSideDrawer logout={this.props.onLogOut} show={this.state.sideDrawerOpen} toggle={this.drawerToggleClickHandler} />
        {/* {backdrop} */}
        {/* <Cart show={this.cartHandler}/> */}
        {/* <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main> */}
        
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    auth:state.auth.login
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onLogOut: ()=>dispatch({type:"REMOVE_USER",login:true}),
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminTopNavbar);
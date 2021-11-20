import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LoginValidator = (props) => {
    return(
        <div>
      {(props.auth)?(
        <Fragment>{props.children}</Fragment>
      ) : (
        <Redirect to={"/AdminLogin-page"} />
      )}
      {console.log(props.auth)}
    </div>
    )
}

const mapStateToProps = state =>{
  return{
    auth:state.auth.login
  }
}

export default connect(mapStateToProps)(LoginValidator);
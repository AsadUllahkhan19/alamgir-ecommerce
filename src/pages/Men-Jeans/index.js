import React, { useState, useEffect, useContext } from "react";
import asd from "../../logo.svg";
import styles from "./style.module.css";
import { connect } from "react-redux";
import axios from "axios";
import TopNavbar from "../../components/TopNavbar";
import Loading from "../Loader";

const MenJeans = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://alummat.herokuapp.com/products/menjeans").then((arr) => setData(arr.data))
  },
    []);

  const _handleCart = (e) =>{
    console.log(e.target.id);
    axios.get("https://alummat.herokuapp.com/products/womenjacket/"+e.target.id).then((res)=>{
      // console.log(res.data);
      props.onCartCounter(res.data)
    })
    alert("Product Added to Cart")
  }

  const listItems = data.map((item) => (
    <div className={styles.card} key={item._id}>
      <div className={styles.card_img}>
        <img
          src={`https://alummat.herokuapp.com/${item.productimages}`}
          className={styles.card_imgs}
        />
      </div>
      <div className={styles.card_header}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className={styles.price}>{item?.price}Rs</p>
        <div className={styles.btn} onClick={_handleCart} id={item._id}>Add to cart</div>
      </div>
    </div>
  ));

  return (
    <>
    <TopNavbar />
    <div className={styles.main_content}>
      <h3>Men's Jeans</h3>
      {data?listItems:<Loading />}
      </div>
    </>
  );
};

const mapStateToProps = state =>{
  return{
    ctr: state.cart.items,
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onCartCounter: (item)=>dispatch({type:"ADD_PRODUCT",item:item}),
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenJeans);


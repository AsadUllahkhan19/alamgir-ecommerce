import styles from "./style.module.css";
import TopNavbar from "../../components/TopNavbar";
import { connect } from "react-redux";
import { ReactComponent as Cross } from "../../Assets/cross.svg";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import axios from "axios";

const Cart = (props) => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  // const [ objects,setobjects] = useState([])
  let arrays = [];

  useEffect(() => {
    {
      console.log({ ...arrays });
    }
  }, [props.ctr]);

  const listItems = props.ctr.map((item) => (
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
        <p className={styles.price}>{item.sizes}</p>
        <span className={styles.number}>{arrays.push(item.name)}</span>
        <Cross
          className={styles.delete}
          onClick={() => props.onDeleteResult(item._id)}
        />
      </div>
    </div>
  ));

  const _handle = () => {
    if (name === "") {
      alert("Fill the Complete Form")
      return false;
    }
    if (number === "") {
      alert("Fill the Complete Form")
      return false;
    }
    if (address === "") {
      alert("Fill the Complete Form")
      return false;
    }
    if(props.ctr.length < 1){
      alert("Please Add Items To Cart")
      return false;
    }
      let obj = { name, number, address, order: { ...arrays } };
      axios.post("https://alummat.herokuapp.com/products/checkout", obj);
      alert("Your Order will Be at Your Door in 7 Days")
      props.onCheckOut()
      setName("")
      setAddress("")
      setNumber("")
  };

  const check = (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter Name"
        className={styles.email}
      />
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        placeholder="Enter Number"
        className={styles.email}
      />
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        placeholder="Enter Address"
        className={styles.email}
      />

      <button className={styles.btn} onClick={_handle}>
        Check Out
      </button>
    </>
  );

  const _handleCheck = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <TopNavbar />
      <button onClick={_handleCheck} className={styles.btn}>
        Buy Now
      </button>
      {toggle && check}
      {listItems}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCartCounter: (item) => dispatch({ type: "ADD_PRODUCT", item: item }),
    onDeleteResult: (id) => dispatch({ type: "REMOVE_PRODUCT", resultID: id }),
    onCheckOut: () => dispatch({ type: "CHECK_OUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

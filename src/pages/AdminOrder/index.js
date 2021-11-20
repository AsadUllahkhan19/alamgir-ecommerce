import react, { useState, useEffect } from "react";
import AdminTopNavbar from "../../components/AdminTopNavbar";
import styles from "./style.module.css";
import axios from "axios";
import Loading from "../Loader";

const Order = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
      setTimeout(() => {
        <Loading />
    }, 3000);
        axios.get("https://alummat.herokuapp.com/products/order").then((arr) => {
          console.log(arr.data.cart);
          setData(arr.data.cart)
        });
      }, []);

      const _handleReset = () =>{
        axios.post("https://alummat.herokuapp.com/products/reset").then((arr) => {
          console.log(arr.data)
        })
      }

      const items = data.map((item) => (
        <tr>
          <td className={styles.right}>{item.name}</td>
          <td className={styles.right}>{item.number}</td>
          <td className={styles.right}>{item.address}</td>
          <td className={styles.right}>{item?.order?.[0]}</td>
          <td className={styles.right}>{item?.order?.[1]}</td>
          <td className={styles.right}>{item?.order?.[2]}</td>
          <td className={styles.right}>{item?.order?.[3]}</td>
          <td className={styles.right}>{item?.order?.[4]}</td>
          <td className={styles.right}>{item?.order?.[5]}</td>
          <td className={styles.right}>{item?.order?.[6]}</td>
          <td className={styles.right}>{item?.order?.[7]}</td>
          <td className={styles.right}>{item?.order?.[8]}</td>
          <td className={styles.right}>{item?.order?.[9]}</td>
          
        </tr>
      ));

    return(
      <div className={styles.container}>
      <AdminTopNavbar />
      <span className={styles.heading}>Orders</span>
      <div className={styles.body}>
      <button className={styles.right} onClick={_handleReset}>
            Reset
          </button>
        <table className={styles.charts}>
          <tr>
            <th className={styles.right}>User Name</th>
            <th className={styles.right}>User Number</th>
            <th className={styles.right}>User Address</th>
            <th className={styles.right}>User Order1</th>
            <th className={styles.right}>User Order2</th>
            <th className={styles.right}>User Order3</th>
            <th className={styles.right}>User Order4</th>
            <th className={styles.right}>User Order5</th>
            <th className={styles.right}>User Order6</th>
            <th className={styles.right}>User Order7</th>
            <th className={styles.right}>User Order8</th>
            <th className={styles.right}>User Order9</th>
            <th className={styles.right}>User Order 10</th>
          </tr>
          {data?items:<Loading />}
        </table>
      </div>
    </div>
    )
}

export default Order;

import react, { useState, useEffect } from "react";
import AdminTopNavbar from "../../components/AdminTopNavbar";
import styles from "./style.module.css";
import axios from "axios";
import Loading from "../Loader";

const AdminWomenShorts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      <Loading />
  }, 3000);
    axios.get("https://alummat.herokuapp.com/products/womenshort").then((arr) => {
      setData(arr.data);
    });
  }, []);

  function appFunction(e){
      console.log(e.target.id);
      alert("The product has been deleted")
      axios.delete("https://alummat.herokuapp.com/products/womenshort/"+e.target.id)
      .then(res => console.log(res))
  }

  const items = data.map((item) => (
    <tr>
      <td>{item.name}</td>
      <button id={item._id} onClick={(e) => appFunction(e)}>
        Delete
      </button>
    </tr>
  ));
  return (
    <div className={styles.container}>
      <AdminTopNavbar />
      <span className={styles.heading}>Women Shorts</span>
      <div className={styles.body}>
        <table className={styles.charts}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {data?items:<Loading />}
        </table>
      </div>
    </div>
  );
};

export default AdminWomenShorts;

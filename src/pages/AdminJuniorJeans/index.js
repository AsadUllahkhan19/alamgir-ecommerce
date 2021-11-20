import react, { useState, useEffect } from "react";
import AdminTopNavbar from "../../components/AdminTopNavbar";
import styles from "./style.module.css";
import axios from "axios";
import Loading from "../Loader";

const AdminJuniorJeans = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      <Loading />
  }, 3000);
    axios.get("https://alummat.herokuapp.com/products/juniorjeans").then((arr) => {
      setData(arr.data);
    });
  }, []);

  function appFunction(e){
      console.log(e.target.id);
      alert("The product has been deleted")
      axios.delete("https://alummat.herokuapp.com/products/juniorjeans/"+e.target.id)
      .then(res => console.log(res))
  }

  const items = data.map((item) => (
    <tr>
      <td className={styles.right}>{item.name}</td>
      <button id={item._id} onClick={(e) => appFunction(e)} className={styles.right}>
        Delete
      </button>
    </tr>
  ));
  return (
    <div className={styles.container}>
      <AdminTopNavbar />
      <span className={styles.heading}>Junior Jeans</span>
      <div className={styles.body}>
        <table className={styles.charts}>
          <tr>
            <th className={styles.right}>First Name</th>
            <th className={styles.right}>Last Name</th>
          </tr>
          {data?items:<Loading />}
        </table>
      </div>
    </div>
  );
};

export default AdminJuniorJeans;

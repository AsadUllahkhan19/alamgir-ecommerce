import react, { useState, useEffect } from "react";
import AdminTopNavbar from "../../components/AdminTopNavbar";
import styles from "./style.module.css";
import axios from "axios";
import Loading from "../Loader";

const JuniorMenShorts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      <Loading />
  }, 3000);
  axios.get("https://alummat.herokuapp.com/products/juniorshort").then((arr) => {
    setData(arr.data);
  }); 
  }, []);

  function appFunction(e){
      alert("The product has been deleted")
      axios.delete("https://alummat.herokuapp.com/products/juniorshort/"+e.target.id)
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
      <span className={styles.heading}>Junior Shorts</span>
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

export default JuniorMenShorts;

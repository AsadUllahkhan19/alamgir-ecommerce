import React, { useContext } from "react";
import styles from "./style.module.css";
import TopNavbar from "../../components/TopNavbar";
import asd from "../../logo.svg";
function DescriptionComponent() {
  return (
    <div className={styles.Container}>
      <div className={styles.bigImg}>
        <img src={asd} />
      </div>
      <div className={styles.detailsBox}>
        <div className={styles.header}>
          <span className={styles.heading}>Sports Shoe</span>
          <span className={styles.price}>12.5$</span>
        </div>
        <div className={styles.description}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate 
        </div>
        <div className={styles.sizes}>
          <span className={styles.leftBox}>Sizes</span>
          <div className={styles.rightBox}>
            <span className={styles.sizesItem}>32</span>
            <span className={styles.sizesItem}>34</span>
            <span className={styles.sizesItem}>36</span>
          </div>
        </div>
        <div className={styles.color}>
          <span className={styles.leftBox}>Color</span>
          <div className={styles.rightBox}>
            <span className={styles.colorItem}>Pink</span>
            <span className={styles.colorItem}>Blue</span>
            <span className={styles.colorItem}>Green</span>
          </div>
        </div>
        <div className={styles.btn}>Buy Now</div>
      </div>
    </div>
  );
}

export default DescriptionComponent;

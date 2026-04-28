import React from "react";

import styles from "./PrimaryBtn.module.css";

const PrimaryBtn = ({ onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <span className={styles.btnText}>BOOK</span>
    </button>
  );
};

export default PrimaryBtn;

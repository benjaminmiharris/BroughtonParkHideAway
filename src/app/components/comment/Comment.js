import React from "react";
import RatingComponent from "../ratings/Rating";
import styles from "./Comment.module.css";
import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

const Comment = ({ title, numberOfStars, quote, guestName }) => {
  return (
    <div className={styles.container}>
      <h2 style={spinnaker.style}>{title}</h2>
      <RatingComponent stars={numberOfStars} />

      <p className={styles.message}>{quote}</p>
      <p style={spinnaker.style} className={styles.author}>
        {guestName}
      </p>
    </div>
  );
};

export default Comment;

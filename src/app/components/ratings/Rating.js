"use client";
import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import styles from "./Rating.module.css";

const RatingComponent = ({ stars }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(stars);
  }, []);

  return (
    <div>
      <div className={styles.stars}>
        {Array.from({ length: rating }, (_, index) => (
          <BsFillStarFill size={20} className={styles.star} />
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;

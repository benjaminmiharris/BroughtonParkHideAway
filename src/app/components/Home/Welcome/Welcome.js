import React from "react";
import styles from "./Welcome.module.css";
import { Spinnaker } from "next/font/google";
const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

import WelcomeImage from "../../../../../public/home-about-image.jpg";

import Image from "next/image";

const Welcome = () => {
  return (
    <div className={styles.container} id={"about-section"}>
      <div className={styles.backgroundBlock}>
        <div className={styles.content}>
          <img src={WelcomeImage.src} className={styles.image} />
          <div className={styles.textContent}>
            <p className={styles.headerBox}>1. Hello There</p>
            <h2 style={spinnaker.style} className={`${styles.heading} `}>
              Welcome to your world of relaxation.
            </h2>
            <div className={styles.about}>
              <p>
                Whether you are visiting family or friends, or looking for a bit
                of r&amp;r, you are at the right place. This modern
                designer-built, comfortable getaway is situated in the Ramat
                Shilo area of Ramat Beit Shemesh, and offers a spacious living
                area, fully equipped kosher kitchen, well-appointed bathroom,
                and large attractive bedroom, where you can experience both
                relaxation and adventure in a beautiful setting, promising an
                unforgettable holiday experience.
              </p>
              <p>The apartment is situated:</p>

              <div className={styles.aboutPoints}>
                <p className={styles.headerBoxPoints}>
                  2 minutes walk of several shuls
                </p>
                <p className={styles.headerBoxPoints}>7 min walk to shops</p>
                <p className={styles.headerBoxPoints}>
                  35 minutes drive to Jerusalem
                </p>
                <p className={styles.headerBoxPoints}>
                  45 minutes drive to Tel Aviv
                </p>
                <p className={styles.headerBoxPoints}>
                  45 minutes drive to the beach
                </p>
              </div>

              <p>
                Surrounded by hills replete in history, with interesting
                archaeological sites and pleasant walks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

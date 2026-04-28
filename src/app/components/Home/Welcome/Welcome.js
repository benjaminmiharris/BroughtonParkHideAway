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
            <p className={styles.headerBox}>Welcome</p>
            <h2 style={spinnaker.style} className={`${styles.heading} `}>
              Welcome to your home from home.
            </h2>
            <div className={styles.about}>
              <p>
                Whether you&apos;re visiting family or friends, are Chosson &amp; Kallah,
                or just looking for a bit of peace and quiet, this is the place for you.
              </p>
              <p>
                This quaint &lsquo;duplex&rsquo;, newly converted within a hundred year old
                outhouse, is beautifully designed to meet the needs of visitors to the
                &lsquo;Jewish Quarter&rsquo; of Broughton Park in Salford.
              </p>
              <p>
                It offers cosy, comfortable and quiet accommodation, discreetly
                positioned in a cul-de-sac that offers the feel of an English country
                village, whilst yet being in the heart of the Jewish community.
              </p>
              <p>
                Its many facilities include 2 comfortable beds, sitting and eating areas,
                fridge, microwave, kettles etc., a small mezzanine floor with 2 sofa
                chairs, 2 TVs and a modern bathroom.
              </p>
              <p>
                Whilst Manchester is not known for its sunny climate outside (a reputation
                not fully deserved), you can rest assured that the hideaway will always
                provide a comfortable climate inside.
              </p>
              <p>
                We hope, indeed know, that you will enjoy your stay at Broughton Park Hideaway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

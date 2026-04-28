import React from "react";
import Image from "next/image";

import Img1 from "../../../../../public/gallery-image-1.jpg";
import Img2 from "../../../../../public/gallery-image-2.jpg";
import Img3 from "../../../../../public/gallery-image-7.jpg";
import Img4 from "../../../../../public/gallery-image-4.jpg";
import Img5 from "../../../../../public/gallery-image-6.jpg";

import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <div className={styles.container} id={"gallery-section"}>
        <ul className={styles.galleryTopRowContainer}>
          <li className={styles.galleryTopRow}>
            <div className={styles.imageContainer}>
              <img
                width={657}
                height={427}
                alt="Picture of the author"
                src={Img1.src}
                className={styles.image}
              />
            </div>
          </li>
          <li className={styles.galleryTopRow}>
            <div className={styles.imageContainer}>
              <img
                width={463}
                height={427}
                alt="Picture of the author"
                src={Img2.src}
                className={`${styles.image} ${styles.imageSmall}`}
              />
            </div>
          </li>
        </ul>
        <ul className={styles.galleryBottomRowContainer}>
          <li className={styles.galleryBottomRow}>
            <div className={styles.imageContainer}>
              <img
                width={367}
                height={573}
                alt="Picture of the author"
                src={Img3.src}
                className={styles.image}
              />
            </div>
          </li>
          <li className={styles.galleryBottomRow}>
            <div className={styles.imageContainer}>
              <img
                width={367}
                height={573}
                alt="Picture of the author"
                src={Img4.src}
                className={styles.image}
              />
            </div>
          </li>
          <li className={styles.galleryBottomRow}>
            <div className={styles.imageContainer}>
              <img
                width={367}
                height={573}
                alt="Picture of the author"
                src={Img5.src}
                className={styles.image}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Gallery;

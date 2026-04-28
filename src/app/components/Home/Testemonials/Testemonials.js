"use client";

import React from "react";
import Comment from "../../comment/Comment";
import styles from "./Testemonials.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testemonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.container} id={"testemonials-section"}>
      <div className={styles.backgroundBlock}>
        <div className={styles.leftIcon}>
          <svg
            className={styles.leftIcon}
            // width="120"
            // height="255"
            viewBox="0 0 120 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.7168 255C46.7257 255 31.8584 247.562 19.1151 231.625C6.37169 215.687 0 195.5 0 168.938C0 146.625 11.6814 113.687 36.1062 68C59.469 22.3125 77.5221 0 89.2035 0C95.5752 0 98.7611 3.1875 98.7611 10.625C98.7611 12.75 92.3894 27.625 78.5841 55.25C64.7788 82.875 58.4071 104.125 58.4071 120.062C58.4071 131.75 65.8407 142.375 81.7699 149.812C96.6372 157.25 107.257 165.75 112.566 174.25C117.876 182.75 120 191.25 120 200.813C120 217.813 114.69 231.625 105.133 242.25C93.4513 249.687 79.646 255 63.7168 255Z"
              fill="#2F2F2F"
            />
          </svg>
        </div>
        <div className={styles.rightIcon}>
          <svg
            className={styles.rightIcon}
            viewBox="0 0 120 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.7168 255C46.7257 255 31.8584 247.562 19.1151 231.625C6.37169 215.687 0 195.5 0 168.938C0 146.625 11.6814 113.687 36.1062 68C59.469 22.3125 77.5221 0 89.2035 0C95.5752 0 98.7611 3.1875 98.7611 10.625C98.7611 12.75 92.3894 27.625 78.5841 55.25C64.7788 82.875 58.4071 104.125 58.4071 120.062C58.4071 131.75 65.8407 142.375 81.7699 149.812C96.6372 157.25 107.257 165.75 112.566 174.25C117.876 182.75 120 191.25 120 200.813C120 217.813 114.69 231.625 105.133 242.25C93.4513 249.687 79.646 255 63.7168 255Z"
              fill="#2F2F2F"
            />
          </svg>
        </div>
      </div>
      <div className={styles.commentsBlock}>
        <Carousel
          responsive={responsive}
          swipeable={true}
          infinite={true}
          keyBoardControl={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <Comment
            title={"Highly recommended!"}
            numberOfStars={5}
            quote={`"I stayed at the golds apartment for a month!
It was so nice, the place was always clean, the host is super friendly and helpful, great location!!
Shul right next door!!
Highly recommended!"`}
            guestName={"Rachel S"}
          />
          <Comment
            title={"Already recommended it to friends"}
            numberOfStars={5}
            quote={`"The apartment is stunningly designed and decorated, a 5-minute walk from the shopping center. The views make you feel like you're in a peaceful suburb surrounded by Israel's mountains. Highly recommended - I've already suggested it to friends."`}
            guestName={"Sarah R "}
          />

          <Comment
            title={"Look forward to returning!"}
            numberOfStars={5}
            quote={`"Walk up a flight of stairs to a charming porch with a table & chairs (morning coffee?). 5-star accommodation in a quiet area across from a park and Shuls. Spacious, modern apartment with fully equipped kosher kitchen, spa-like bathroom, comfy bedroom, couch, washer & dryer, WiFi. Friendly host family. We look forward to returning!"`}
            guestName={"Josh and Barbara "}
          />
          <Comment
            title={"Highly recommend"}
            numberOfStars={5}
            quote={`"Highly recommended the Golds rental unit.  The place is clean, fresh and beautifully furnished.  All amenities included. 
            An oasis in the heart of Ramat Shilo.  Our guest had a lovely stay. The hosts are so friendly and accommodating making sure everything is perfect."`}
            guestName={"Chanie R"}
          />
          <Comment
            title={"Highly recommend"}
            numberOfStars={5}
            quote={`"This apartment, close to Yeshivat Lev HaTorah, boasts beautiful, spacious design. Thoughtful touches, bright interiors, and consistent design create a delightful atmosphere. The modern kitchen, inviting living room, and well-appointed bedroom and bathroom ensure a pleasant stay. The hosts are excellent, offering assistance and welcoming feedback."`}
            guestName={"Rena and Yehuda"}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Testemonials;

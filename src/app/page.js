"use client";
import Booking from "./components/Home/Booking/Booking";
import Gallery from "./components/Home/Gallery/Gallery";
import Banner from "./components/Home/HomeBanner/Banner";
import Welcome from "./components/Home/Welcome/Welcome";
import styles from "./page.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Home() {
  return (
    <>
      <FloatingWhatsApp
        accountName="Broughton Park Hideaway"
        phoneNumber="+447973362985"
        avatar="/gallery-image-1.jpg"
      />
      <div className={styles.main}>
        <Banner />
        <Welcome />
        <Gallery />
        <Booking />
      </div>
    </>
  );
}

export default Home;

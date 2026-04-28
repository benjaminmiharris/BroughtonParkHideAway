"use client";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./Header.module.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldNavbarBeScrolled = scrollPosition > 0;

      setScrolled(shouldNavbarBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickScroll = (location) => {
    const element = document.getElementById(location);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      } fixed-top`}
    >
      <Container>
        <Navbar.Brand href="#home">RAMAT SHILO RETREAT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me-2 ">
            <Nav.Link
              href="#home"
              onClick={() => handleClickScroll("about-section")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#features"
              onClick={() => handleClickScroll("gallery-section")}
            >
              Gallery
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Floor Plan</Nav.Link> */}
            <Nav.Link
              href="#pricing"
              onClick={() => handleClickScroll("testemonials-section")}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              onClick={() => handleClickScroll("booking-section")}
            >
              Book
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

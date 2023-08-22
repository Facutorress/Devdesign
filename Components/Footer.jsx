import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from '../styles/Footer.module.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col md="4" className={styles["footer-copywright"]}>
          <h3>Designed and Developed by Dev Designs</h3>
        </Col>
        <Col md="4" className={styles["footer-copywright"]}>
          <h3>Copyright © {year} FT</h3>
        </Col>
        <Col md="4" className={styles["footer-body"]}>
          <ul className={styles["footer-icons"]}>
            <li className={styles["social-icons"]}>
              <a href="https://github.com/Facutorress" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className={styles["social-icons"]}>
              <a
                href="https://twitter.com/Facutorreslt"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className={styles["social-icons"]}>
              <a
                href="https://www.linkedin.com/in/facundo-torres-b17871247/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={styles["social-icons"]}>
              <a
                href="https://www.instagram.com/devdesigns.ok"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

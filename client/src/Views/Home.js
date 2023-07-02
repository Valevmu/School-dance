import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../Styles/Home.css';
import styles from './Home.module.css';
import { FontAwesomeIcon } from 'react-icons';
import { NavbarMUI } from "../Components/NavbarMUI";
import { CarouselPhoto } from "../Components/CarouselPhoto";
import { Features } from "../Components/Features";

const Home = () => {
  return (
    <div className="home-container">
      <NavbarMUI />
          <CarouselPhoto />
          <Features />
      <footer>
        <div className={styles["container-footer"]}>
          <p>
            Contacto:+569 999 999
            Hecho por Valentina Madrid
          </p>
          <a>
            <i className="bi bi-house-door"></i>
          </a>

          <i className="bi bi-instagram"></i>
        </div>
        <div className={styles['container-icons']}>




        </div>

      </footer>

    </div>
  );
};

export default Home;

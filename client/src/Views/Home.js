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

const Home = () => {
  return (
    <div className="home-container">
      <NavbarMUI />
          <CarouselPhoto />
      <section className={styles["section-container"]}>
        <h1>Cursos</h1>
        <div className={styles['card']}>
          <img className={styles['images']} src="https://upload.wikimedia.org/wikipedia/commons/f/fc/B-boy_breakdancing.jpg" alt="hip hop">
          </img><div className={styles['card-container']}>
            <h4>Formulario de inscripción para tus alumnos</h4>
            <p>Solo necesitas los datos de tus alumnos!</p>

          </div>
        </div>
        <div className={styles['card']}>
          <img className={styles['images']} src="https://dancemefree.files.wordpress.com/2018/06/house-dance.jpg" alt="house dance">
          </img><div className={styles['card-container']}>
            <h4>Fácil de usar</h4>
            <p>Util herramienta para registar a tus estudiantes en tus clases!</p>
          </div>
        </div>

        <div className={styles['card']}>
          <img className={styles['images']} src="https://i.pinimg.com/736x/1d/b8/6c/1db86c57170c3b120021ad9fe3a99503--bosch.jpg" alt="locking">
          </img><div className={styles['card-container']}>
            <h4>Cursos disponibles</h4>

            <li>Hip-hop</li>
            <li>House</li>
            <li>Locking</li>

          </div>
        </div>


      </section>
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

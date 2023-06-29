import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./Home.module.css";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from 'react-icons'

const Home = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <h1 className={styles['title']}>Dance Studio</h1>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/h">Home</Nav.Link>
            <div className={styles['botones']}>
              <Button href="/sign-up">
              {" "}
              Soy profesor
              <Link to={"/sign-up"}></Link>
            </Button>
            {/* <Button href="/sign-up">
              {" "}
              Soy alumno
              <Link to={"/sign-up"}></Link>
            </Button> */}
            </div>
            
          </Nav>
        </Container>
      </Navbar>
      <div className={styles["container"]}>
        <div className={styles["sub-container"]}>
          <h1>Smart Teacher</h1>
          <h2>Todos tus estudiantes en una sola aplicación</h2>
          
        </div>
        <div>
        <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-200"
          src="https://media.timeout.com/images/103238690/image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Un espacio de movimiento</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-200 "
          src="https://stardanze.com/wp-content/uploads/2016/02/MAG3180.jpg"
          alt="Second slide"
        />
  
        <Carousel.Caption>
          <h3>Creatividad</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200 h-10"
          src='https://i.pinimg.com/originals/32/41/5e/32415e352126af97bfb6ad272b7eb777.jpg'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Expresión</h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        </div>
      </div>
      <section className={styles["section-container"]}>
        <h1>Cursos</h1>
        <div className={styles['card']}>
          <img className={styles['images']}src="https://upload.wikimedia.org/wikipedia/commons/f/fc/B-boy_breakdancing.jpg" alt="hip hop">
          </img><div className={styles['card-container']}>
              <h4>Formulario de inscripción para tus alumnos</h4>
              <p>Solo necesitas los datos de tus alumnos!</p>
              
            </div>
        </div>
        <div className={styles['card']}>
          <img className={styles['images']}src="https://dancemefree.files.wordpress.com/2018/06/house-dance.jpg" alt="house dance">
          </img><div className={styles['card-container']}>
              <h4>Fácil de usar</h4>  
              <p>Util herramienta para registar a tus estudiantes en tus clases!</p>
            </div>
        </div>
        
        <div className={styles['card']}>
          <img className={styles['images']}src="https://i.pinimg.com/736x/1d/b8/6c/1db86c57170c3b120021ad9fe3a99503--bosch.jpg" alt="locking">
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

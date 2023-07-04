import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../Styles/Home.css';
import { FontAwesomeIcon } from 'react-icons';
import { CarouselPhoto } from "../Components/CarouselPhoto";
import { Features } from "../Components/Features";
import { Footer } from "../Components/Footer";

const Home = () => {
  return (
    <div className="home-container">
          <CarouselPhoto />
          <Features />
          <Footer />
    </div>
  );
};

export default Home;

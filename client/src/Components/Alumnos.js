import React, { useEffect, useState } from "react";
import styles from "../Styles/Alumnos.module.css";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { NavbarMUI } from "./NavbarMUI";
import { Table } from "@mui/material";

export const Alumnos = () => {
  const [students, setStudents] = useState([]);
  const getStudentsFromService = async () => {
    try {
      const list = await axios.get(
        "http://localhost:8080/api/students/",
        students
      );
      setStudents(list.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentsFromService();
  }, []);
  return (
  
    <>
      <NavbarMUI />

      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav>

      <button className={styles.button}>
        <Link to="/user-view">Volver</Link>
      </button>

      <h1>Mis alumnos:</h1>

      <Table stickyHeader aria-label="sticky table">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Nombre</th>
          
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Curso</th>
            <th>Ver perfil</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <td>{student.nombre}</td>
              <td>{student.apellidos}</td>
              <td>{student.edad}</td>
              <td>{student.curso}</td>
              <td>
                <button className={styles.botones}>
                  <Link to={`/students/details/${student._id}`}>Ver perfil</Link>
                </button>
              </td>
              <td>
                <button className={styles.botones}>
                  <Link to={`/students/edit/${student._id}`}>Editar</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
          };


export default Alumnos;

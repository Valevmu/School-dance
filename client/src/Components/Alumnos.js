import React, { useEffect, useState } from "react";
import styles from "./Alumnos.module.css";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Alumnos = () => {
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
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <h1 className={styles['title']}>Dance Studio</h1>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {/* <Button onClick={onSubmit}> Sign Out
            </Button> */}
          </Nav>
        </Container>
      </Navbar>
      <button className={styles['button']}>
      <Link to='/user-view'> Volver</Link>
      </button>
      <h1>Mis alumnos:</h1>
      
        <table>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Curso</th>
            <th>Ver perfil</th>
            <th>Editar</th>
          </tr>
          {students?.map((students) => (

          <tr key={students.id}>
            <td>{students.nombre}</td>
            <td>{students.apellidos}</td>
            <td>{students.edad}</td>
            <td>{students.curso}</td>
            <td>
              <button className={styles['botones']}>
              <Link to={`/students/details/${students._id}`}>Ver perfil </Link>
              </button>
            </td>
            <td><button className={styles['botones']}>
              <Link to={`/students/edit/${students._id}`}>Editar</Link>

            </button>
            </td>
          </tr>
          ))}
        </table>
    
    </div>
  );
};

export default Alumnos;

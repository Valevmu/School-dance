import React, { useState, useEffect } from "react";
import styles from "./ViewStudent.module.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavbarMUI } from "../Components/NavbarMUI";

const ViewStudent = () => {
  const [students, setStudents] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getStudentsFromService = async () => {
    try {
      const viewStudentResponse = await axios.get(
        `http://localhost:8080/api/students/${id}`,
        { withCredentials: true }
      );
      console.log(viewStudentResponse.data);
      setStudents(viewStudentResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  const removeStudent = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/students/delete/${id}`,
        { withCredentials: true }
      );
      const newStudentList = students.filter((students) => students._id !== id);
      setStudents(newStudentList);
    } catch (error) {
      console.log(error);
    }
    navigate("/alumnos");
  };
  useEffect(() => {
    getStudentsFromService();
  }, []);

  return (
    <>
      <NavbarMUI />

      <div className={styles["container"]}>
        <button className={styles["button"]}>
          <Link to="/alumnos"> Volver</Link>
        </button>
        <div className={styles["card-profile"]}>
          {students.students && (
            <div className={styles["data"]} key={students.id}>
              <img alt="foto" src={students.students.foto} />
              <h1>{students.students.nombre}</h1>
              <h2>{students.students.apellidos}</h2>
              <p>{students.students.edad}</p>
              <p>{students.students.curso}</p>
            </div>
          )}
          <button
            onClick={() => removeStudent(students.students._id)}
            className={styles["btn-delete"]}
          >
            Eliminar inscripción
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewStudent;

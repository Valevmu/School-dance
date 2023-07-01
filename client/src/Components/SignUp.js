import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../Styles/SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import  Button  from "react-bootstrap/Button";
import axios from 'axios'

const SignUp = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword:""
  });
  const handleForm = (e) => { 
    e.preventDefault();
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async () => {
   
    try {
      const response = await axios.post("http://localhost:8080/api/user/register", newUser);
      console.log(response.data)
      navigate('/user-view')
    }catch(error){
      console.error(error)
    }

  }
  return (
    <div className={styles["signup-container"]}>
      <div className={styles["signup-form"]}>
        <h1>Sign up</h1>
        <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["container-label"]}>
            <label>Email</label>
            <input
              className={styles["input"]}
              {...register("email", { required: true, minLenght: 5,pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Ingresa un email valido"}  })}
              type="email"
              name="email"
              placeholder="email"
              value={newUser.email}
              onChange={handleForm}
            />
            {errors.email?.type === "minLength" && (
              <p role="alert">Minimo de 5 caracteres</p>
            )}
            {errors.email?.type === "required" && (
              <p role="alert">Email es requerido</p>
            )}
             {errors.email?.type === 'pattern' && (
              <p role='alert'>Debes ingresar un email válido</p>
            )}
          </div>
          <div className={styles["container-label"]}>
            <label>Password</label>
            <input
              {...register("password", { required: true, minLenght: 5 })}
              type="password"
              placeholder="password"
              name="password"
              value={newUser.password}
              onChange={handleForm}
            />
            {errors.password?.type === "minLength" && (
              <p role="alert">Minimo de 5 caracteres</p>
            )}
            {errors.password?.type === "required" && (
              <p role="alert">Contraseña es requerida</p>
            )}
          </div>
          <div className={styles["container-label"]}>
            <label>Confirma tu contraseña</label>
            <input
              {...register("confirmPassword", { required: true, minLenght: 5 })}
              type="password"
              placeholder=" confirma password"
              name="confirmPassword"
              value={newUser.confirmPassword}
              onChange={handleForm}
            />
            {errors.confirmPassword?.type === "minLength" && (
              <p role="alert">Minimo de 5 caracteres</p>
            )}
            {errors.confirmPassword?.type === "required" && (
              <p role="alert">Contraseña es requerida</p>
            )}
          </div>
          

          <Button className={styles["btn"]} type="submit">
            Sign up
          </Button>
          <h4>
            ¿Ya eres miembro?
            <Button variant="link">
              <Link to="/sign-in">Sign-in</Link>
            </Button>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

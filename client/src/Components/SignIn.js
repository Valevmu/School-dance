import React, { useState } from 'react'
import styles from './SignIn.module.css'
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import  Button  from "react-bootstrap/Button";


const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async () => {
   
    try {
      const response = await axios.post("http://localhost:8080/api/user/login" , user, {withCredentials: true});
      console.log(response.data)
      console.log(response.data.msg)
      
      navigate('/user-view')
    }catch(error){
    
      console.error(error)

    }

  }
  
  return (
    <div className={styles["signup-container"]}>
    <div className={styles["signup-form"]}>
      <h1>Bienvenido de vuelta!</h1>
      
      <form className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["container-label"]}>
          <label>Email</label>
          <input
            className={styles["input"]}
            {...register("email", { required: true, minLength: 5, pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Ingresa un email valido"} })}
            type="email"
            name="email"
            placeholder="email"
            value={user.email}
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
           {...register("password", { required: true, minLength: 5 })}
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={handleForm}
          />
          {errors.password?.type === "minLength" && (
            <p role="alert">Minimo de 5 caracteres</p>
          )}
          {errors.password?.type === "required" && (
            <p role="alert">Contraseña es requerida</p>
          )}
        </div>

        <Button className={styles["btn"]} type="submit">
          Sign In
        </Button>
        {/* <p>
          ¿Ya eres miembro?
          <Button variant="link">
            <Link to="/sign-in">Sign-in</Link>
          </Button>
        </p> */}
      </form>
    </div>
  </div>
  )
}

export default SignIn
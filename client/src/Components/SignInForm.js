import React, { useState } from 'react'
import styles from '../Styles/SignIn.module.css'
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import  Button  from "react-bootstrap/Button";


export const SignInForm = () => {
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
    const response = await axios.post("http://localhost:8080/api/user/login" , user, {withCredentials: true});
      try {
        // console.log(response.data)
        const userType = (response.data.type);
        const id = (response.data.id);
        localStorage.setItem("userInfo", JSON.stringify({ userType, id }));
        navigate('/dashboard')
      }catch(error){
        console.error(error)
      }

  }
  
  return (
    <div className="signup-form">
      <h1>¡BIENVENIDO DE VUELTA!</h1>
      
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className="container-label">
          <label className='label'>Email</label>
          <input
            className="input"
            {...register("email", { required: true, minLength: 5, pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Ingresa un email valido"} })}
            type="email"
            name="email"
            placeholder="Ingresa tu email"
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
        <div className="container-label">
          <label className='label'>Contraseña:</label>
          <input
           {...register("password", { required: true, minLength: 5 })}
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
            value={user.password}
            onChange={handleForm}
            className='input'
          />
          {errors.password?.type === "minLength" && (
            <p role="alert">Minimo de 5 caracteres</p>
          )}
          {errors.password?.type === "required" && (
            <p role="alert">Contraseña es requerida</p>
          )}
        </div>
        <div className="btn-signup">
          <Button className='btn' type="submit">
            Sign In
          </Button>
        </div>
        {/* <p>
          ¿Ya eres miembro?
          <Button variant="link">
            <Link to="/sign-in">Sign-in</Link>
          </Button>
        </p> */}
      </form>
    </div>
  
  )
}

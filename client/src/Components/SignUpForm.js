import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../Styles/SignUpForm.css'
import { Link, useNavigate } from "react-router-dom";
import  Button  from "react-bootstrap/Button";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { pink } from '@mui/material/colors';
import axios from 'axios';

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword:"",
    userType: "",
  });
  const handleForm = (e) => { 
    // e.preventDefault();
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async () => {
    const response = await axios.post("http://localhost:8080/api/user/register", newUser);
    try {
      const userType = (response.data.User.userType);
      const id = (response.data.User._id);
      localStorage.setItem("userInfo", JSON.stringify({ userType, id }));
      navigate('/sign-in')
    }catch(error){
      console.error(error)
    }

  }
  return (
    <>
      <div className="signup-form">
        <h1>REGÍSTRATE</h1>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className="radio-container">
            <div className="radio-inputs">
            <label className="radio">
              <input type="radio" 
                name="userType" 
                value="teacher"
                {...register("userType", { required: true })} 
                onChange={handleForm}/>
              <span className="name">Soy Profesor</span>
              </label>
              <label className="radio">
                <input type="radio"
                  name="userType"
                  value="student"
                  {...register("userType", { required: true })}
                  onChange={handleForm} />
                <span className="name">Soy Estudiante</span>
              </label>
            </div>
            {errors.userType?.type === "required" && (
            <p role="alert">Debes seleccionar una opción</p>)}
          </div>
          
          <div className="container-label">
            <label className="label">Email:</label>
            <input
              className="input"
              {...register("email", { required: true, minLenght: 5,pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Ingresa un email valido"}  })}
              type="email"
              name="email"
              placeholder="Email"
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
          <div className="container-label">
            <label className="label">Contraseña:</label>
            <input
              {...register("password", { required: true, minLenght: 5 })}
              type="password"
              placeholder="Contraseña"
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
          <div className="container-label">
            <label className="label">Confirma tu contraseña:</label>
            <input
              {...register("confirmPassword", { required: true, minLenght: 5 })}
              type="password"
              placeholder="Confirma tu contraseña"
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
          <div className="btn-signup">
            <Button className="btn" type="submit">
              Registrarse
            </Button>
          </div>
          <h3 className="link-title">
            ¿Ya eres miembro?
          </h3>
          <Link to="/sign-in" className="link-title">Inicia Sesion</Link>
          
        </form>
      </div>
    </>
  );
};



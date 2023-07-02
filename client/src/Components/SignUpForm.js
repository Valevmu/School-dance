import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../Styles/SignUpForm.css'
import { Link, useNavigate } from "react-router-dom";
import  Button  from "react-bootstrap/Button";
import axios from 'axios'

export const SignUpForm = () => {
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
    <>
      <div className="signup-form">
        <h1>REGÍSTRATE</h1>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className="container-label">
            <label>Email:</label>
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
            <label>Contraseña:</label>
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
            <label>Confirma tu contraseña:</label>
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



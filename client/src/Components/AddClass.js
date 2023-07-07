import React, {  useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from '../Styles/AddClass.module.css'
import { Navigate, useNavigate, useParams} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { NavbarMUI } from "./NavbarMUI";


export const AddClass = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const userType = JSON.parse(localStorage.getItem('user')).userType
  const teacherId = JSON.parse(localStorage.getItem('user')).id
  const [classes, setClasses] = useState([])
  const [newClass, setNewClass] = useState({
    name: '',
    description: '',
    stock:'',
    price:'',
    teacher: teacherId,
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();



  const handlerForm = (e) => {
    console.log(e.target.value)
    setNewClass({
      ...newClass,
      [e.target.name]: e.target.value,
    });
  };

  const sendClass = async (data, e) => {
    e.preventDefault();
    const ClassData = {
      ...newClass,
      ...data,
    };
    console.log(ClassData)
    axios.post('http://localhost:8080/api/classes/new', newClass, {withCredentials: true})

    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>Tus clases</h1>
      <form className={styles['form']} onSubmit={handleSubmit(sendClass)}>
        <h1>Formulario de inscripción</h1>
        <label>Nombre de la clase:</label>
        <input
        {...register('name', { required: true, minLength: 3})}
        type='text' 
        name='name' 
        placeholder='Hip Hop'
        value={newClass.name}
        onChange={handlerForm}
        />
        {errors.name?.type === 'minLength' && (
          <p role="alert">Minimo de 3 caracteres</p>
        )}
        {errors.name?.type === 'required' && (
          <p role="alert">Campo requerido</p>
        )}
        <label>Descripcion:</label>
        <textarea
         {...register('description', { required: true, minLength: 3})}
        type='text'
        name='description'
        placeholder='Tipo de clase. | Horario y dias de la semana | Dirección del estudio'
        value={newClass.description}
        onChange={handlerForm}
        />
         {errors.description?.type === 'minLength' && (
          <p role="alert">Minimo de 3 caracteres</p>
        )}
        {errors.description?.type === 'required' && (
          <p role="alert">Campo requerido</p>
        )}
        <label>Cupos:</label>
        <input 
          {...register('stock', { required: true})}
        type="number" 
        placeholder="10"
        onChange={handlerForm}
        value={newClass.stock}
        />
        {errors.edad?.type === 'required' && (
          <p role="alert">Campo requerido</p>
        )}
        <label>Precio de la clase por Persona</label>
        <input
        type="number"
        name='price'
        placeholder="10000"
        value={newClass.price}
        onChange={handlerForm}
        />
        {errors.price?.type === 'required' && (
          <p role="alert">Campo requerido</p>)}
        
        
        <Button type="submit" className='btn'>
          Publicar Clase
        </Button>
      </form>
    </div>
  );
};

export default AddClass;

import React, {  useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from './AddClass.module.css'
import { Navigate, useNavigate, useParams} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'


const AddClass = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newStudent, setNewStudent] = useState({
    nombre: '',
    apellidos: '',
    edad:'',
    curso:'',
    foto: ''
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const getStudentsFromService = async () => {
    try{
      const response = await axios.get(`http://localhost:8080/api/students/${id}`, {withCredentials:true});
      setNewStudent(response.data.students);
    }catch(error){
      console.log(error.response)
    }
  };


  const handlerForm = (e) => {
    console.log(e.target.value)
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileChange = (e) => {
    setNewStudent({
      ...newStudent,
      foto: e.target.files[0],
    });
  };
  const sendStudent = async (data, e) => {
    
    try {
      const StudentData = {
        ...newStudent,
        ...data,
      };
      e.preventDefault();
      const response = !id
      ? await axios.post('http://localhost:8080/api/students/new', StudentData, {withCredentials: true})
      : await axios.put(`http://localhost:8080/api/students/update/${id}`,StudentData, {withCredentials:true})
      console.log(response.data.data)
      setNewStudent(response.data)
     
      navigate('/alumnos')
     } catch (error) {
      console.log(error)

     }

    
  }
  useEffect(() => {
    if (id) getStudentsFromService();
  }, [id]);

  return (
    <div>
 
      <form className={styles['form']} onSubmit={handleSubmit(sendStudent)}>
        <h1>Formulario de inscripción</h1>
        <label>Nombre</label>
        <input
        {...register('nombre', { required: true, minLength: 3})}
        type='text' 
        name='nombre' 
        placeholder='Valentina'
        value={newStudent.nombre}
        onChange={handlerForm}
        />
        {errors.nombre?.type === 'minLength' && (
          <p role="alert">Minimo de 3 caracteres</p>
        )}
        {errors.nombre?.type === 'required' && (
          <p role="alert">Campo requerido</p>
        )}
        <label>Apellidos</label>
        <input
         {...register('apellidos', { required: true, minLength: 3})}
        type='text'
        name='apellidos'
        placeholder='Madrid Urrutia'
        value={newStudent.apellidos}
        onChange={handlerForm}
        />
         {errors.apellidos?.type === 'minLength' && (
          <p role="alert">Minimo de 3 caracteres</p>
        )}
        {errors.apellidos?.type === 'required' && (
          <p role="alert">Campo requerido</p>
        )}
        
        <label>Edad</label>
        <input 
          {...register('edad', { required: true})}
        type="number" 
        placeholder="edad"
        onChange={handlerForm}
        value={newStudent.edad}
        />
        
        {errors.edad?.type === 'required' && (
          <p role="alert">Campo requerido</p>
        )}
        <label>Foto</label>
        <input
        type="text"
        name='foto'
        value={newStudent.foto}
        onChange={handlerForm}
        
      
        />
        <label>Curso que deseas inscribir</label>
        <select 
        name="curso"
        value={newStudent.curso}
        onChange={(e)=>handlerForm(e)}
       
        // {...register('curso', { required: true})}
        >
          <option value="">Selecciona un curso</option>
          <option value="Hip-hop basico">Hip-hop basico </option>
          <option value="Hip-hop avanzado">Hip-hop avanzado </option>
          <option value="Locking basico">Locking basico</option>
          <option value="Locking avanzado">Locking avanzado</option>
          <option value="House dance basico">House dance basico</option>
          <option value="House dance avanzado">House dance avanzado</option>
        </select>
       
        {/* {errors.curso?.type === 'required'  && (
          <p role="alert">Campo requerido</p>
        )} */}
        
        <Button type="submit" className={styles['btn']}>
          Inscribirme
        </Button>
      </form>
    </div>
  );
};

export default AddClass;

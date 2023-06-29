import React from 'react'
import styles from './UserView.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from 'axios'






const UserView = () => {
  const navigate = useNavigate()

  const onSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/user/logout');
      console.log(response.data)
      navigate('/home')
    }catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='fondo'>
     
      <Navbar  bg="primary" variant='dark'>
        <Container>
          
          <Navbar.Brand href="/home">
            <h1 className={styles['title']}>Dance Studio</h1>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Button className={styles['btn']} onClick={onSubmit}> Sign Out
            </Button>
           
          </Nav>
        </Container>
        </Navbar> 
    
      <section className={styles['left-section']}>
        <ul>
          <li><a href='/alumnos'>Alumnos</a></li>
          <li><a href='/my-class'>Mis clases</a></li>
          <li><a href='/add-class'>Inscribir alumno</a></li>
        </ul>
        
       
      </section>
      
    
     
    
     
    </div>
  )
}

export default UserView
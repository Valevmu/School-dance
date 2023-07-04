import React, { useEffect, useState } from 'react'
import styles from '../Styles/UserView.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import { NavbarMUI } from './NavbarMUI';






const UserView = () => {
  const [profile, setProfile] = useState();
  const navigate = useNavigate()

  // const getUsersFromService = async () => {
  //   try {
  //     const list = await axios.post(
  //       'http://localhost:8080/api/user/login'
  //     );
  //     console.log(list.data.profile)
  //     setProfile(list.data.profile)
  //   }catch(error){
  //     console.log(error)
  //   }
  // };
// useEffect(() => {
//   localStorage.setItem('user', JSON.stringify(profile))
// },[profile])

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
      <NavbarMUI />
     
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
      <div className={styles['main-section']}>
        {profile?.map((profile) => {
          <div key={profile.id}>

           
         
            </div>
          

        })} 
        <div>
          <div className={styles['nav-profile']}></div>
    
           <Avatar



           sx={{ width: 170, height: 170,top: -60 ,left: 590}}
            src={JSON.parse(localStorage.getItem('user')).foto}
            />    
             <h1> {JSON.parse(localStorage.getItem('user')).nombre}</h1> 
           <h2> {JSON.parse(localStorage.getItem('user')).email}</h2> 
       
           <h2> {JSON.parse(localStorage.getItem('user')).curso}</h2>  
   
           
           

        </div>
       
      </div>

      
    
     
    
     
    </div>
  )
}

export default UserView
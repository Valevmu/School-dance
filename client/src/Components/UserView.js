import React, { useEffect, useState } from 'react';
import styles from '../Styles/UserView.module.css';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { NavbarMUI } from './NavbarMUI';
import axios from 'axios';


const UserView = (props) => {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('user')).id
    console.log(id)
    axios.get(`http://localhost:8080/api/user/${id}`)
      .then((response) => {
        setProfile(response.data.user);
      } 
      )
      .catch((error) => {
        console.log(error)
      })
}, [])


  return (
    <div className='fondo'>
      <NavbarMUI />
      <section className={styles['left-section']}>
        <ul>
          <li><a href='/alumnos'>Alumnos</a></li>
          <li><a href='/add-class'>Inscribir alumno</a></li>
          <li><a href='/user-profile'>Comentar</a></li>
        </ul>
      </section>
      <div className={styles['main-section']}>
        {/* {profile?.map((profile) => {
          <div key={profile.id}>

           
         
            </div>
          

        })}  */}
        <div>
          <div className={styles['nav-profile']}></div>

          <Avatar
            sx={{ width: 170, height: 170, top: -60, left: 590 }}
            src={profile.foto}
          />
          <h1>{profile.name}</h1>
          <h2>{profile.email}</h2>
          <h2>{profile.curso}</h2>
        </div>
        <div className={styles['card-container']}>
        </div>
      </div>
    </div>
  )
}

export default UserView
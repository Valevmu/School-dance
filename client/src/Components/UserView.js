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

const UserView = (props) => {
  const [profile, setProfile] = useState();
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.getItem('user') && setProfile(JSON.parse(localStorage.getItem('user')))
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
            src={JSON.parse(localStorage.getItem('user')).foto}
          />
          <h1> {JSON.parse(localStorage.getItem('user')).nombre}</h1>
          <h2> {JSON.parse(localStorage.getItem('user')).email}</h2>
          <h2> {JSON.parse(localStorage.getItem('user')).curso}</h2>
        </div>
        <div className={styles['card-container']}>
        </div>
      </div>
    </div>
  )
}

export default UserView
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { NavbarMUI } from './NavbarMUI';
import '../Styles/UserView.css'
import axios from 'axios';
import { UserProfile } from './UserProfile';


const UserView = (props) => {
  const [profile, setProfile] = useState([]);
  const [value, setValue] = useState(0);
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

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className='fondo'>
      <NavbarMUI />
      <section className='left-section'>
        <ul className='sidebar-menu'>
          <li onClick={e => handleChange(0)}>Perfil</li>
          <li onClick={e => handleChange(1)}>Mis clases</li>
          <li onClick={e => handleChange(2)}>Alumnos</li>
        </ul>
      </section>
      <div className='main-section'>
        {value === 0 ? <UserProfile profile={profile}/> : null}
        {value === 1 ? <h1>Mis clases</h1> : null}
        {value === 2 ? <h1>Alumnos</h1> : null}
        
      </div>
    </div>
  )
}

export default UserView
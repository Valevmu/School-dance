import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../Styles/NavbarMUI.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


export const NavbarMUI = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem("user")) ? 
      setLogged(true) : setLogged(false)
  }, [])

  const handleLogout = async() => {
    localStorage.removeItem("userInfo");
    setLogged(false);
    const response = await axios.post('http://localhost:8080/api/user/logout');
      try {
        console.log(response.data)
      }catch (error) {
        console.log(error)
      }
  }

  return (
    <div className='public-navbar'>
        <h1>DANCE STUDIO</h1>
        {logged ?

          <div className='tabs-navbar-group'>
          <Link to='/home' className='tabs-navbar' onClick={handleLogout}>Salir</Link>
          </div> :

          <div className='tabs-navbar-group'>
            <Link to='/home' className='tabs-navbar'>Inicio</Link>
            <Link to='/sign-up' className='tabs-navbar'>Registrarse</Link>
            <Link to='/sign-in' className='tabs-navbar important'>Iniciar sesión</Link>
          </div> 
        }
        
    </div>
  )
}

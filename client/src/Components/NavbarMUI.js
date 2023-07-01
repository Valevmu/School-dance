import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../Styles/NavbarMUI.css'
import { Link } from 'react-router-dom';


export const NavbarMUI = () => {
  return (
    <div className='public-navbar'>
        <h1>DANCE STUDIO</h1>
        <div className='tabs-navbar-group'>
          <Link to='/home' className='tabs-navbar'>Inicio</Link>
          <Link to='/sign-up' className='tabs-navbar'>Registrarse</Link>
          <Link to='/sign-in' className='tabs-navbar important'>Iniciar sesión</Link>
        </div>
    </div>
  )
}

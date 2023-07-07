import React, { useEffect, useState } from 'react';
import { NavbarMUI } from './NavbarMUI';
import '../Styles/UserView.css'
import axios from 'axios';
import { UserProfile } from './UserProfile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import AddClass from './AddClass';


const UserView = (props) => {
  const [profile, setProfile] = useState([]);
  const [value, setValue] = useState(0);
  

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('user')).id
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
          <li
            onClick={e => handleChange(0)}
            className='item-menu'>
              <AccountCircleIcon />
              <span>Perfil</span>
          </li>
          <li 
            onClick={e => handleChange(1)}
            className='item-menu'>
              <CategoryIcon />
              <span>Mis clases</span></li>
          <li 
            onClick={e => handleChange(2)}
            className='item-menu'>
              <GroupIcon />
              <span>Alumnos</span></li>
        </ul>
      </section>
      <div className='main-section'>
        {value === 0 ? <UserProfile profile={profile}/> : null}
        {value === 1 ? <AddClass/> : null}
        {value === 2 ? <h1>Alumnos</h1> : null}
      </div>
    </div>
  )
}

export default UserView
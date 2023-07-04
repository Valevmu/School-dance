import React, {useState} from 'react'
import styles from '../Styles/UserView.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import '../Styles/Dashboard.css';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { set } from 'mongoose';
import { UserProfile } from './UserProfile';
import { AddClass } from './AddClass.js';
import { Alumnos } from './Alumnos.js';




const UserView = (props) => {
  const { userType } = props.userInfo;
  const [value, setValue] = useState(0);
  const navigate = useNavigate()


  return (
    <div className='fondo'>
      <div >
        <div className='invisible-navbar'>
        </div>
        <div className='main-container'>
          <ul className='sidebar'>
            <li className='sidebar-item'>
              <AccountCircleRoundedIcon className='icon'/>
              <a onClick={e => setValue(0)}>Mi Perfil</a>
            </li>
            <li className='sidebar-item'>
              <CategoryRoundedIcon className='icon'/>
              <a onClick={e => setValue(1)}>Mis clases</a>
            </li>
            {userType === 'teacher' ?
              <li className='sidebar-item'>
                <PeopleRoundedIcon className='icon'/>
                <a onClick={e => setValue(2)}>Alumnos</a>
              </li>
            : null}
          </ul>
          <div className='dinamic-content'>
            {value === 0 && <UserProfile />}
            {value === 1 && <AddClass />}
            {value === 2 && <Alumnos />}
          </div>
        </div>
        
       
      </div>
      
    
     
    
     
    </div>
  )
}

export default UserView
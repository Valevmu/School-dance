import React from 'react';
import '../Styles/Home.css';
import {SignUpForm} from '../Components/SignUpForm';
import { Footer } from '../Components/Footer';
import { NavbarMUI } from '../Components/NavbarMUI';

export const SignUp = () => {
  return (
    <>
      <NavbarMUI />
      <div className='signup-container'>
          <SignUpForm />
      </div>
    </>
  )
}

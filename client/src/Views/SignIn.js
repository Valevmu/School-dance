import React from 'react'
import { SignInForm } from '../Components/SignInForm';
import '../Styles/SignUpForm.css';
import '../Styles/Home.css';
import { NavbarMUI } from '../Components/NavbarMUI';

export const SignIn = () => {
  return (
    <>
      <NavbarMUI />
      <div className='signup-container'>
          <SignInForm />
      </div>
    </>
  )
}

import React from 'react';
import '../Styles/Home.css';
import {SignUpForm} from '../Components/SignUpForm';
import { Footer } from '../Components/Footer';

export const SignUp = () => {
  return (
    <div className='signup-container'>
        <SignUpForm />
    </div>
  )
}

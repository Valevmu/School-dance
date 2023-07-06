import React, { useEffect, useState } from 'react';
import UserView from '../Components/UserView';
import { NavbarMUI } from '../Components/NavbarMUI';


export const Dashboard = () => {

  return (
    <>
        <NavbarMUI  />
        <div>
            <UserView />
        </div>
    </>
  )
}




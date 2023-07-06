import React, { useEffect, useState } from 'react';
import UserView from '../Components/UserView';
import { NavbarMUI } from '../Components/NavbarMUI';


export const Dashboard = () => {
    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     const localInfo = JSON.parse(localStorage.getItem("user"));
    //     setUser(localInfo)
    // }, [])

  return (
    <>
        <NavbarMUI  />
        <div>
            <UserView />
        </div>
    </>
  )
}




import React, { useEffect, useState } from 'react';
import UserView from '../Components/UserView';
import { NavbarMUI } from '../Components/NavbarMUI';


export const Dashboard = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const localInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUserInfo(localInfo)
    }, [])

  return (
    <>
        <NavbarMUI  />
        <div>
            <UserView userInfo={userInfo}/>
        </div>
    </>
  )
}




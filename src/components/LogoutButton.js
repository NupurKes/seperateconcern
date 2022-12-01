import React from 'react';
import { LoggedInContext } from "../App";
import { useContext } from 'react';

export default function LogoutButton() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
     const handleOnClick = () => { setIsLoggedIn(false)};


  return (
   <button onClick = {handleOnClick}>Logout</button>
  )
}

import React from 'react'
import DbData from  "../components/DbData";
// import DbData1 from  "../components/DbData1";
// import DbData2 from  "../components/DbData2";
// import DbData3 from  "../components/DbData3";
// import DbData4 from  "../components/DbData4";
// import DbData5 from  "../components/DbData5";
// import DbData6 from  "../components/DbData6";
import DbData7 from  "../components/DbData7";
import DbData8 from "../components/DbData8";
//import Login from "../components/Login";
import LoginForm from '../components/LoginForm';
import { LoggedInContext } from "../App";
import { useContext } from 'react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  return (
    <div className="content">
        {/*<DbData />
        {!isLoggedIn && <LoginForm />} 
        
         {/*<DbData1 />
         // <DbData2 />
        // <DbData3 />
        // <DbData4 />
        // <DbData5 />
        // <DbData6 />
       <DbData7 />
         <Login />  */}
           <LoginForm/>
        <DbData8/><br/>
        
       
    </div>
  )
}

 

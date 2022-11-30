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


export default function Home() {
  return (
    <div className="content">
        <DbData />
        <LoginForm />
         {/*<DbData1 />
         // <DbData2 />
        // <DbData3 />
        // <DbData4 />
        // <DbData5 />
        // <DbData6 />
       
         <Login />  */}
           
        <DbData8/><br/>
        <DbData7 />
       
    </div>
  )
}

 

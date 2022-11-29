import React from "react";

function DbData7() {
return (
<>
<button onClick={callDeleteParams}>Delete User</button>
</>
)}

function callDeleteParams() {
    fetch("http://localhost:3001/users/aryan",
    { method: "DELETE" })
    .then((data) => data.json())
    .then((json) =>
    alert(JSON.stringify(json)));
    }
    
    


    export default DbData7;
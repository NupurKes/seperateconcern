import React from "react";

function DbData6() {
return (
<>
<button onClick={callPatchBodyUsername}>Update User Using Patch</button>
</>
)}

function callPatchBodyUsername() {
    fetch("http://localhost:3001/users/Nupur/password", {
    method: "PATCH",
    body: JSON.stringify({
    password: "126"
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) =>
    alert(JSON.stringify(json)));
    }
    
    


    export default DbData6;
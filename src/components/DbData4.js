import React from "react";

function DbData4() {
return (
<>
<button onClick={callGetBody}>Get User Using Body</button>
</>
)}

function callGetBody() {
    fetch("http://localhost:3001/users/get",
    {
    method: "POST",
    body: JSON.stringify({
    username: "Nupur",
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) =>
    alert(JSON.stringify(json)));
    }

    export default DbData4;
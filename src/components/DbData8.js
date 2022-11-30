import React from "react";

function DbData8() {
return (
<>
<button onClick={registerUserTemp}>Register User</button>
</>
)}

async function registerUserTemp() {
    fetch("http://localhost:3001/users/register", {
    method: "POST",
    body: JSON.stringify({
    username: "thussainz",
    password: "Abcd1234!",
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
    }
    export default DbData8;
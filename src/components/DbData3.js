import React from "react";

function DbData3() {
return (
<>
<button onClick={callGetParams}>Get specific User</button>
</>
)}

function callGetParams() {
    fetch("http://localhost:3001/users/Nupur",
    { method: "GET" })
    .then((data) => data.json())
    .then((json) =>
    alert(JSON.stringify(json)));
    }


    export default DbData3;
    
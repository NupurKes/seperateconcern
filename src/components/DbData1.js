import React from "react";

function DbData1() {
return (
<>
<button onClick={callPostBody}>Create User</button>
</>
)}
/* Function that will make an API call to get all users, and then pop-up an alert with the results.
*/
function callPostBody() {
    fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify({
    username: "nupur",
     password: "nupur121",
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) =>
    alert(JSON.stringify(json)));
    }
    

export default DbData1;
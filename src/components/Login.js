import React from "react";

function Login() {
return (
<>
<button onClick={signing}>Login</button>
</>
)}
/* Function that will make an API call to get all users, and then pop-up an alert with the results.
*/
function signing() {
    fetch("http://localhost:3001/users/login", {
    method: "POST",
    body: JSON.stringify({
    username: "nupurkes",
     password: "Nupur@123",
    }),
    headers: {
    "Content-type": "application/json;charset=UTF-8",
    },
    })
    .then((data) => data.json())
    .then((json) =>
    alert(JSON.stringify(json)));
    }
    

export default Login;
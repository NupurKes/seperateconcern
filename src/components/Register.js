import React from "react";

function Register() {
return (
<>
<button onClick={registering}>Registering User</button>
</>
)}
/* Function that will make an API call to get all users, and then pop-up an alert with the results.
*/
function registering() {
    fetch("http://localhost:3001/users/register", {
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
    

export default Register;
import React from "react";

function DbData2() {
return (
<>
<button onClick={callGetQuery}>Get specific User</button>
</>
)}
/* Function that will make an API call to get all users, and then pop-up an alert with the results.
*/
function callGetQuery() {
    fetch("http://localhost:3001/user?username=nupur", { method: "GET" })
    .then((data) => data.json())
    .then((json) =>
    alert(JSON.stringify(json)));
    }
    
    export default DbData2;
import React, { useRef } from "react";
import { LoggedInContext } from "../App";

function LoginForm() {
   const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (event) => { 
    event.preventDefault(); // prevent page reload
    fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        }),
        headers: {
        "Content-type": "application/json;charset=UTF-8",
        },
        })
        .then((data) => data.json())
        //  .then((json) =>
        //  alert(JSON.stringify(json)));
             .then((json) => {
            alert(JSON.stringify(json));
            json.success ? setIsLoggedIn(true) : setIsLoggedIn(false);
            });
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2> Login</h2>
        <label htmlFor="username">Username</label><br/>
        <input id="username" type="text" ref={usernameRef} required /><br/>
        <label htmlFor="password">Password</label><br/>
        <input id="password" type="password" ref={passwordRef} required /><br/><br/>
        <button type="submit">Login</button>
        </form>
        );
        
    }

    export default LoginForm;
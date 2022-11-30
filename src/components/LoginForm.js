import React, { useRef } from "react";

function LoginForm() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    fetch("http://localhost:3001/users/get", {
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
        .then((json) =>
        alert(JSON.stringify(json)));
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <h1> Registration and Login</h1>
        <label htmlFor="username">Username</label><br/>
        <input id="username" type="text" ref={usernameRef} required /><br/>
        <label htmlFor="password">Password</label><br/>
        <input id="password" type="password" ref={passwordRef} required /><br/>
        <button type="submit">Login</button>
        </form>
        );
        
    }

    export default LoginForm;
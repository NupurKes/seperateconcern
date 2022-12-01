import React, { useRef } from "react";

function DbData8() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const registerUserTemp = () => {
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }
    return (
      <form onSubmit={registerUserTemp}>
        <h2> Registration </h2>
        <label htmlFor="username">Username</label>
        <br />
        <input id="username" type="text" ref={usernameRef} required />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input id="password" type="password" ref={passwordRef} required />
        <br /><br/>
        <button type="submit">Register</button>
      </form>
    );
  };

export default DbData8;

import React, { useState } from "react";
import Axios from "axios";
import "./login.css";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  Axios({
    method: "GET",
    url: "http://localhost:5000/user",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => setData(res.data));

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      [name]: value,
    });
  }

  function handleSubmit(event) {
    alert("A name was submitted: " + data.username + data.password);
    event.preventDefault();
  }

  return (
    <div className="form-class">
      <h4>
        hi {data.username} your password is {data.password}
      </h4>
      <h1> Login </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="assword"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

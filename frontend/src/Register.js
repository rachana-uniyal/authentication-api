import React, { useState } from "react";
import "./login.css";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      [name]: value,
    });
  }

  function handleSubmit(event) {
    if (this.state.password !== this.state.confirmpassword)
      alert("Password does not match");
    else event.preventDefault();
  }

  return (
    <div className="form-class">
      <h1> Register </h1>
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
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

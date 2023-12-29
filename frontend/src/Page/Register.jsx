import React from "react";
import { useState } from "react";
import { style } from "../components/style";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [message, setMessage] = useState(null);

  const { name, email, password, phone, username } = formData;

  const register = () => {
    const payload = {
      name,
      email,
      password,
      phone,
      username,
    };
    console.log(payload);
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res?.message);
        console.log("res", res);
      })
      .catch((err) => console.log("err", err));
    setTimeout(() => {
      setMessage(null);
    }, 10000);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={style.formDiv}>
      <h3>Register Page</h3>
      <input
        style={style.input}
        type="text"
        name="name"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <input
        style={style.input}
        type="text"
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => handleChange(e)}
      />
      <input
        style={style.input}
        type="email"
        required={true}
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => handleChange(e)}
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
      />
      <input
        style={style.input}
        type="password"
        name="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => handleChange(e)}
      />
      <input
        style={style.input}
        type="text"
        name="phone"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) => handleChange(e)}
      />
      <div style={style.errDiv}>{message}</div>
      <button style={style.btn} onClick={register}>
        Submit
      </button>
    </div>
  );
};

export default Register;

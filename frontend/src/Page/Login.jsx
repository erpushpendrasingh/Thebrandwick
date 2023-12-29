import React, { useState, useEffect } from "react";
import { style } from "../components/style";
import { jwtDecode } from "jwt-decode";

const Login = () => {
     const [loginData, setLoginData] = useState({
          email: "",
          password: "",
     });
     const [token, setToken] = useState(null);
     const [message, setMessage] = useState(null);

     const { email, password } = loginData;

     useEffect(() => {
          const storedToken = localStorage.getItem("token");

          if (storedToken && !isTokenExpired(storedToken)) {
               setToken(storedToken);
          }
     }, []);

     const isTokenExpired = (token) => {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;
          return decodedToken.exp < currentTime;
     };

     const register = () => {
          const payload = {
               email,
               password,
          };

          fetch("http://localhost:8080/user/login", {
               method: "POST",
               body: JSON.stringify(payload),
               headers: {
                    "Content-type": "application/json",
               },
          })
               .then((res) => res.json())
               .then((res) => {
                    setToken(res?.token);
                    setMessage(res?.message);
                    localStorage.setItem("token", res.token);
               })
               .catch((err) => console.log(err));

          setTimeout(() => {
               setMessage(null);
          }, 10000);
     };

     const handleChange = (e) => {
          setLoginData({ ...loginData, [e.target.name]: e.target.value });
     };

     const handleLogout = () => {
          setToken(null);
          localStorage.removeItem("token");
     };

     return (
          <div style={style.formDiv}>
               <h3>Login Page</h3>
               <input
                    style={style.input}
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    name="email"
                    onChange={(e) => handleChange(e)}
               />
               <input
                    style={style.input}
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    name="password"
                    onChange={(e) => handleChange(e)}
               />
               <div style={style.errDiv}>{message}</div>
               {token ? (
                    <div>
                         <p style={style.successMsg}>
                              User Logged in successfully
                         </p>
                         <button style={style.btn} onClick={handleLogout}>
                              Logout
                         </button>
                    </div>
               ) : (
                    <button style={style.btn} onClick={register}>
                         Submit
                    </button>
               )}
          </div>
     );
};

export default Login;

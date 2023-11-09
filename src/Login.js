import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { plantList } from "./planlist";

function Login() {
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsConnected(true);
      navigate("/home");
    } else {
      setIsConnected(false);
    }
  }, []);

  async function login(event) {
    event.preventDefault();
    if (usernameInput === "" || passwordInput === "") {
      toast.error("please fill all fields");
    } else {
      const user = {
        email: usernameInput,
        password: passwordInput,
      };
      try {
        await axios.post("http://localhost:5000/user/login", user).then(
          (res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", user.email);
            navigate("/home");
            window.location.reload();
          },
          (fail) => {
            console.error("error : " + fail);
            toast.error("Wrong Credentials !");
            setUsername("");
            setPassword("");
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="login-container">
      <Toaster position="top-center" reverseOrder={false} />
      <form className="login-form">
        <h1>Login Account</h1>
        <input
          type="text"
          placeholder="username"
          required
          className="username_input"
          value={usernameInput}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={passwordInput}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className="password_input"
        />
        <button type="submit" onClick={login}>
          login
        </button>
        <Link to="/register">don't have account ? create one</Link>
      </form>
    </div>
  );
}

export default Login;

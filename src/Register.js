import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  async function register(event) {
    event.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      usernameInput === "" ||
      passwordInput === ""
    ) {
      toast.error("please fill all fields");
    } else {
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: usernameInput,
        password: passwordInput,
      };
      try {
        await axios.post("http://localhost:5000/user/register", user).then(
          (res) => {
            console.log(res);
            toast.success("successfully registered");
            setFirstName("");
            setLastName("");
            setUsername("");
            setPassword("");
          },
          (fail) => {
            if (fail.status === 401) {
              toast.error("email already registered");
            } else {
              toast.error("email already registered");
            }
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
        <h1>Register Account</h1>
        <input
          type="text"
          placeholder="first name"
          required
          className="firstname_input"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="last name"
          required
          className="lastname_input"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
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
        <button type="submit" onClick={register}>
          register
        </button>

        <Link to="/">already registered ? sign in</Link>
      </form>
    </div>
  );
}

export default Register;

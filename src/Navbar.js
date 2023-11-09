import React from "react";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken == null) {
      setIsConnected(false);
    } else {
      const user = localStorage.getItem("user");
      if (user != null) {
        setEmail(user);
      }
      setIsConnected(true);
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsConnected(false);
    window.location.reload();
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" alt="logo" src={logo} />
        <label>La maison Jungle</label>
      </div>
      {isConnected ? (
        <>
          <h3 className="connected-user">{email}</h3>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;

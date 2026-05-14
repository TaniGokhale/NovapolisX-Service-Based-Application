import { useState } from "react";

import API from "../services/api";

import "../styles/modal.css";

function Login({ closeModal, openRegister }) {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      window.location.href = "/home";

    } catch (error) {

      alert(error.response.data.msg);

    }
  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <button
          className="close-btn"
          onClick={closeModal}
        >
          ×
        </button>

        <h2>
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="submit-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="switch-text">

          New User ?

          <span
            onClick={() => {
              closeModal();
              openRegister();
            }}
          >
            Register
          </span>

        </p>

      </div>

    </div>
  );
}

export default Login;
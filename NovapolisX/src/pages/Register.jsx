import { useState } from "react";
import API from "../services/api";
import "../styles/modal.css";

function Register({ closeModal, openLogin }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert(res.data.msg);

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

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="submit-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="switch-text">
          Already Registered?

          <span
            onClick={() => {
              closeModal();
              openLogin();
            }}
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Register;
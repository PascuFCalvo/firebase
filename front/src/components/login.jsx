import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Configuración Firebase (la misma que usaste antes)
const firebaseConfig = {
  apiKey: "AIzaSyBuynxBdyLhwnK0QxKfaHq1w9T5bcg5NhU",
  authDomain: "pascual-b0683.firebaseapp.com",
  projectId: "pascual-b0683",
  storageBucket: "pascual-b0683.appspot.com",
  messagingSenderId: "750412678509",
  appId: "1:750412678509:web:0b1391483bdb2c3fca4664",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("token", token);
      setError("");
      window.dispatchEvent(new Event("login")); // Notificar a otros componentes
      navigate("/homepage"); 
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Iniciar sesión</h2>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "8px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", background: "#3b82f6", color: "white" }}
        >
          Ingresar
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

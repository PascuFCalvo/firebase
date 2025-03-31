import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();

      // Guardar usuario en Firestore por medio de tu backend
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // por si luego quieres proteger la ruta
        },
        body: JSON.stringify({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          createdAt: new Date(),
        }),
      });

      localStorage.setItem("token", token);
      setError("");
      window.dispatchEvent(new Event("register"));
      navigate("/login");
    } catch (err) {
      console.error(err.code, err.message);
      setError("Error al registrar el usuario: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Registrar</h2>
      <form
        onSubmit={handleRegister}
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ padding: "10px" }}>
          Registrar
        </button>
      </form>
    </div>
  );
}

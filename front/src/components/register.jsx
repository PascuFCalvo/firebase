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
      alert("Usuario registrado con éxito, vamos al login...");
      setTimeout(() => {}, 1000);
      window.dispatchEvent(new Event("login"));
      navigate("/login");
    } catch (err) {
      console.error(err.code, err.message);
      setError("Error al registrar el usuario: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-background dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-primary dark:text-white">
        Registrar
      </h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border border-border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 border border-border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
        />
        {error && (
          <p className="text-sm text-error text-center mt-2">{error}</p>
        )}
        <button
          type="submit"
          className="p-3 bg-primary text-white rounded-md hover:bg-button-hover transition"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

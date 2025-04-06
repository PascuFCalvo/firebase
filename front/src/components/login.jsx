import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useGlobalStore } from "../zustand/globalState";
import { showLoginFailed, showLoginSuccess } from "./toast";

// Configuración Firebase
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

  const setIsLoggedIn = useGlobalStore((state) => state.setIsLoggedIn);
  const setUser = useGlobalStore((state) => state.setUser);
  const isLoggedIn = useGlobalStore((state) => state.isLoggedIn);

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

      setIsLoggedIn(true);
      setUser({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      });

      window.dispatchEvent(new Event("login"));
      showLoginSuccess();
      navigate("/homepage");
    } catch (err) {
      showLoginFailed();
      console.error("Error en login:", err);
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-background dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-primary dark:text-white">
        Iniciar sesión
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
        <button
          type="submit"
          className="p-3 bg-primary text-white rounded-md hover:bg-button-hover transition"
        >
          Ingresar
        </button>
        <div className="text-center">
          <p className="text-sm text-text dark:text-gray-300">
            ¿Aún no tienes cuenta?
          </p>
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new Event("register"));
              navigate("/register");
            }}
            className="mt-2 p-3 bg-primary text-white rounded-md hover:bg-button-hover transition"
          >
            Registrarse
          </button>
        </div>
        {error && (
          <p className="text-sm text-error text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  );
}

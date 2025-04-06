import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useGlobalStore } from "./zustand/globalState"; // Traemos el estado global

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { mode, setMode } = useGlobalStore(); // Usamos Zustand para el modo
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);

    const handleLogin = () => setLoggedIn(true);
    const handleLogout = () => setLoggedIn(false);

    window.addEventListener("login", handleLogin);
    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("login", handleLogin);
      window.removeEventListener("logout", handleLogout);
    };
  }, []);

  // Cambiar el tema (modo claro / oscuro) usando Zustand
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark"); // Esto aplica la clase 'dark' globalmente
    } else {
      document.documentElement.classList.remove("dark"); // Esto elimina la clase 'dark' cuando está en modo claro
    }
  }, [mode]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-text">
      {/* Header */}
      <header className="bg-border text-white px-6 py-4 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-primary">Mi Aplicación</h1>
          <nav className="space-x-4">
            <Link to="/mainview" className="hover:text-primary transition">
              Home
            </Link>
            {loggedIn ? (
              <Link to="/logout" className="hover:text-primary transition">
                <span className="text-red-500">Logout</span>
              </Link>
            ) : (
              <Link to="/login" className="hover:text-primary transition">
                Login
              </Link>
            )}
            <Link to="/register" className="hover:text-primary transition">
              Register
            </Link>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")} // Cambiar el estado global
              className="p-2 rounded-full bg-border hover:bg-primary transition duration-300"
              aria-label={
                mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {/* Botón de Dark Mode */}
              {mode === "dark" ? "🌙" : "☀️"}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto bg-background">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-border text-white text-center py-4">
        <p>© 2025 Mi Aplicación</p>
      </footer>
    </div>
  );
}

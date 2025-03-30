import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);

    // Escuchar evento login
    const handleLogin = () => setLoggedIn(true);

    // Escuchar evento logout
    const handleLogout = () => setLoggedIn(false);

    window.addEventListener("login", handleLogin);
    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("login", handleLogin);
      window.removeEventListener("logout", handleLogout);
    };
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          background: "#1e293b",
          color: "white",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Mi Aplicación</h1>
        <nav>
          <Link to="/homepage" style={{ color: "white", marginRight: "1rem" }}>
            Home
          </Link>
          {loggedIn ? (
            <Link to="/logout" style={{ color: "white" }}>
              Logout
            </Link>
          ) : (
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>
          )}
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>

      <footer
        style={{
          background: "#1e293b",
          color: "white",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        © 2025 Mi Aplicación
      </footer>
    </div>
  );
}

import React from "react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold text-primary">
        Bienvenido a la página principal
      </h2>
      <p className="mt-4 text-lg text-text">
        Ya has iniciado sesión correctamente.
      </p>

      {/* Botón de Logout */}
      <div className="mt-6">
        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-button-hover transition">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function Mainview() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold text-primary">
        Página principal pública antes del registro
      </h2>
      <p className="mt-4 text-lg text-text">Loguéate para más features.</p>

      {/* Botón de Login */}
      <div className="mt-6">
        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-button-hover transition">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

import React from "react";
import EmbedMap from "../components/EmbedMap"; // Asegúrate de que la ruta sea correcta
import DraggableComponent from "@/components/DraggableComponent";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold text-primary">
        Bienvenido a la página principal
      </h2>
      <p className="mt-4 text-lg text-text">
        Ya has iniciado sesión correctamente.
      </p>

      <EmbedMap />
      <DraggableComponent />
    </div>
  );
}

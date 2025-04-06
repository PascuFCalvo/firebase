import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
const key = import.meta.env.VITE_MAPS_KEY; // Use Vite's environment variable system
console.log(key); // Check if the key is being loaded correctly

export default function EmbedMap() {
  const [width] = useState(600);
  const [height] = useState(450);
  const [place, setPlace] = useState("Space Needle,Seattle+WA");
  const [src, setSrc] = useState(
    `https://www.google.com/maps/embed/v1/place?key=${key}&q=${place}`
  );

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setSrc(`https://www.google.com/maps/embed/v1/place?key=${key}&q=${place}`);
  }, [place]);

  const onSubmit = (data) => {
    setPlace(data.place); // Actualiza el lugar dinámicamente
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center text-primary dark:text-white">
        Mapa de la ubicación
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Lugar (ej: Space Needle,Seattle+WA)"
          {...register("place", { required: true })}
          className="p-3 border border-border dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-button-hover transition"
        >
          Actualizar Mapa
        </button>
        {place && (
          <p className="text-sm text-text dark:text-gray-300">
            Mapa actualizado para: {place}
          </p>
        )}
      </form>

      <iframe
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        title="Google Maps Embed"
      ></iframe>
    </div>
  );
}

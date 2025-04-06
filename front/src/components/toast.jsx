import { toast } from "sonner";

// Toast de login exitoso
export const showLoginSuccess = () => {
  toast.success("Login exitoso", {
    description: "Bienvenido, vamos a la página principal...",
    duration: 5000,
    action: {
      label: "Cerrar",
      onClick: () => toast.dismiss(),
    },
    // Estilos personalizados
    style: {
      backgroundColor: "#3B82F6",
      color: "#fff",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  });
};

// Toast de login fallido
export const showLoginFailed = () => {
  toast.error("Error en login", {
    description: "Credenciales incorrectas",
    duration: 5000,
    action: {
      label: "Cerrar",
      onClick: () => toast.dismiss(),
    },
    style: {
      backgroundColor: "#EF4444",
      color: "#fff",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  });
};

// Toast de desconexión exitoso
export const showLogoutSuccess = () => {
  toast.success("Logout exitoso", {
    description: "Has cerrado sesión correctamente",
    duration: 5000,
    action: {
      label: "Cerrar",
      onClick: () => toast.dismiss(),
    },
    style: {
      backgroundColor: "#10B981",
      color: "#fff",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  });
};

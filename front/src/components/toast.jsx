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
  });
}



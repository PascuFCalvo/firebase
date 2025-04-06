import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../zustand/globalState";

export default function Logout() {
  const setIsLoggedIn = useGlobalStore((state) => state.setIsLoggedIn);
  const setUser = useGlobalStore((state) => state.setUser);

  const navigate = useNavigate();
  alert("Has cerrado sesión correctamente. Vamos a la página principal...");
  setTimeout(() => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    console.log("Logout exitoso:", setIsLoggedIn, setUser);
    window.dispatchEvent(new Event("logout"));
    navigate("/mainview", { replace: true });
  }, 1000);

  return null; // This component doesn't need to render anything
}

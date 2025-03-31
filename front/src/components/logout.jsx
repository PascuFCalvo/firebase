import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  alert("Has cerrado sesión correctamente. Vamos a la página principal...");
  setTimeout(() => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("logout"));
    navigate("/mainview", { replace: true });
  }, 1000);

  return null; // This component doesn't need to render anything
}

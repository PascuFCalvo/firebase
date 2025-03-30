import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  localStorage.removeItem("token");
  window.dispatchEvent(new Event("logout")); // Notificar a otros componentes
  navigate("/login", { replace: true });

  return null; // This component doesn't need to render anything
}

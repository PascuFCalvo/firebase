import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../zustand/globalState";
import { showLogoutSuccess } from "./toast";

export default function Logout() {
  const setIsLoggedIn = useGlobalStore((state) => state.setIsLoggedIn);
  const setUser = useGlobalStore((state) => state.setUser);
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false); // 👈 bandera

  useEffect(() => {
    if (hasLoggedOut.current) return;
    hasLoggedOut.current = true;

    showLogoutSuccess();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    console.log("Logout exitoso");
    window.dispatchEvent(new Event("logout"));
    navigate("/mainview", { replace: true });
  }, [setIsLoggedIn, setUser, navigate]);

  return null;
}

import { auth } from "../firebase/firabase_admin.js";

export const verificarToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Espera: "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const decoded = await auth.verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

import express from "express";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js";
import { verificarToken } from "./middlewares/auth.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

// Middleware de autenticación aplicado a todas las rutas de usuarios
app.use("/usuarios", verificarToken, usuariosRoutes);

app.listen(3000, () => {
  console.log("Servidor Express corriendo en puerto 3000");
});

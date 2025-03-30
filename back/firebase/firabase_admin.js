import admin from "firebase-admin";

// Inicializar Firebase Admin con configuración default
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // Para desarrollo local, usará tus credenciales de Google Cloud
});

const auth = admin.auth();

export { auth };

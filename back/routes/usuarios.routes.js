import express from "express";
import { db } from "../firebase/firebase_sdk.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

const router = express.Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const snapshot = await getDocs(collection(db, "usuarios"));
    const usuarios = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un usuario
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const docRef = await addDoc(collection(db, "usuarios"), data);
    res.status(201).json({ id: docRef.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

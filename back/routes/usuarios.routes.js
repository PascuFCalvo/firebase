import express from "express";
import { db } from "../firebase/firebase_sdk.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

const router = express.Router();


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

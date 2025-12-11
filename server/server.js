//required imports

import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server! GET comfy!" });
});

//==============================================initial set up finished===============================================

//==============================================Getting Data from the client==========================================

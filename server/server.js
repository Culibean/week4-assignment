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

app.post("new-skylog", (req, res) => {
  const newSkyLog = req.body.formValues;
  console.log(newSkyLog);
  const query = db.query(
    `INSERT INTO skylog (username, date, departure, arrival, airline, aircraft) VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      newSkyLog.username,
      newSkyLog.date,
      newSkyLog.departure,
      newSkyLog.arrival,
      newSkyLog.airline,
      newSkyLog.aircraft,
    ]
  );
  res.json({ status: "success, values: newSkyLog" });
});

import { db } from "./dbConnection.js";

app.get("/skylog", async function (request, response) {
  const query = await db.query(
    `SELECT username, flight_date, departure, arrival, airline, aircraft FROM skylog; `
  );
  console.log(query);
  response.json(query.rows);
});

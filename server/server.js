//required imports

import express, { response } from "express";
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

app.post("/new-skylog", async (req, res) => {
  const newSkyLog = req.body.formValues;
  console.log(newSkyLog);
  const query = await db.query(
    `INSERT INTO skylog (username, flight_date, departure, arrival, airline, aircraft) VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      newSkyLog.username,
      newSkyLog.date,
      newSkyLog.departure,
      newSkyLog.arrival,
      newSkyLog.airline,
      newSkyLog.aircraft,
    ]
  );
  res.json({ status: "success", values: newSkyLog });
});

app.get("/skylog", async function (request, response) {
  const query = await db.query(
    `SELECT username, flight_date, departure, arrival, airline, aircraft FROM skylog; `
  );
  console.log(query);
  response.json(query.rows);
});

//TODO: have GET methods so the server can grab the inidivdiual databases for the client to fetch and fill in drop downs

app.get("/airports", async (req, res) => {
  const query = await db.query(
    `SELECT iata_code, name FROM iata ORDER BY name; `
  );
  console.log(query);
  res.json(query.rows);
});

app.get("/aircrafts", async (req, res) => {
  const query = await db.query(
    `SELECT aircraft FROM aircraft ORDER BY aircraft; `
  );
  console.log(query);
  res.json(query.rows);
});

app.get("/airlines", async (req, res) => {
  const query = await db.query(
    `SELECT airline FROM airline ORDER BY airline; `
  );
  console.log(query);
  res.json(query.rows);
});

import dotenv from "dotenv";
import express from "express";
import leaderboard from "./leaderboard";
dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT is not set");
}

if (!process.env.MQTT_HOST) {
  throw new Error("MQTT_HOST is not set");
}

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/", leaderboard);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

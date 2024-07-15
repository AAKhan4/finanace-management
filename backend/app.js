const express = require("express");
const { connectToDatabase, closeDatabaseConnection } = require("./db/conn.mjs");

const userRoutes = require("./routes/users.js");

const app = express();
const Router = express.Router();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(async (req, res, next) => {
  try {
    const db = await connectToDatabase(MONGO_URI);
    req.db = db;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send("An error occurred while connecting to the database");
  }
});

app.use(express.json());
app.use("/users", userRoutes);

process.on("SIGINT", async () => {
  await closeDatabaseConnection();
  process.exit();
});

process.on("SIGTERM", async () => {
  await closeDatabaseConnection();
  process.exit();
});

app.listen(PORT, (e) => {
  if (!e) console.log(`Server is running on port ${PORT}`);
  else console.log(e);
});

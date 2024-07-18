const express = require("express");
const { connect, closeConnect } = require("./db/conn.js");

const userRoutes = require("./routes/userRoutes/user");

const app = express();
const PORT = process.env.PORT || 3000;

connect();

app.use(express.json());
app.use("/user", userRoutes);

process.on("SIGINT", async () => {
  await closeConnect();
  process.exit();
});

process.on("SIGTERM", async () => {
  await closeConnect();
  process.exit();
});

app.listen(PORT, (e) => {
  if (!e) console.log(`Server is running on port ${PORT}`);
  else console.log(e);
});

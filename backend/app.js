const express = require("express");
const { connect, closeConnect } = require("./db/conn.js");

const userRoutes = require("./routes/userRoutes.js");
const walletRoutes = require("./routes/walletRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const budgetRoutes = require("./routes/budgetRoutes.js");
const transactionRoutes = require("./routes/transactionRoutes.js");
const cacheRoutes = require("./routes/cacheRoutes.js");
const queueRoutes = require("./routes/queueRoutes.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", userRoutes);
app.use("/wallet", walletRoutes);
app.use("/category", categoryRoutes);
app.use("/budget", budgetRoutes);
app.use("/transaction", transactionRoutes);
app.use("/cache", cacheRoutes);
app.use("/queue", queueRoutes);

process.on("SIGINT", async () => {
  closeConnect();
  process.exit();
});

process.on("SIGTERM", async () => {
  closeConnect();
  process.exit();
});

app.listen(PORT, (e) => {
  if (!e) console.log(`Server is running on port ${PORT}`);
  else console.log(e);
});

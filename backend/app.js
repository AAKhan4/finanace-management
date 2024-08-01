const express = require("express");
const { connect, closeConnect } = require("./db/conn.js");

const userRoutes = require("./routes/userRoutes/user");
const walletRoutes = require("./routes/walletRoutes/wallet");
const categoryRoutes = require("./routes/walletRoutes/category");
const budgetRoutes = require("./routes/walletRoutes/budget");
const transactionRoutes = require("./routes/walletRoutes/transaction");
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

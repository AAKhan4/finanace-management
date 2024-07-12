const express = require("express");

const app = express();
const Router = express.Router();
const port = 3000;

app.use(express.json());
Router.route("/")
  .get("/", (res) => {
    res.status(200).send("Hello World!");
  })
  .post("/", (req, res) => {
    res.status(200);
    const { name } = req.body;
    res.status(200).send(`Hi ${name}!`);
  });

app.listen(port, (e) => {
  if (!e) console.log(`Server is running on port ${port}`);
  else console.log(e);
});

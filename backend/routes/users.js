const express = require("express");
const router = express.Router();

// Error Check Logic To Be Added Here
router.post("/", async (req, res) => {
  try {
    await req.db.collection("users").insertOne(req.body);
    res.status(201).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res
      .status(200)
      .json(
        await req.db
          .collection("users")
          .findOne({ _id: ObjectId(req.params.id) })
      );
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Error Check Logic To Be Added Here
router.put("/:id", async (req, res) => {
  try {
    await req.db
      .collection("users")
      .updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await req.db
      .collection("users")
      .deleteOne({ _id: ObjectId(req.params.id) });
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// Update the Code Below for Proper Authentication
router.post("/login", async (req, res) => {
  try {
    const user = await req.db
      .collection("users")
      .findOne({ email: req.body.username, password: req.body.password });
    if (user) res.status(200).send();
    else res.status(401).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/logout", async (req, res) => {
    try {
        
    } catch (e) {
        res.status(500).send(e.message);
    }
});

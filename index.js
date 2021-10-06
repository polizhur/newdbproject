const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;

app.use(express.json());

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(400).send("User not found");
    } else {
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT);

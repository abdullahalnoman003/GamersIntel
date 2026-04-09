const express = require("express");
const cors = require("cors");

const { getCollections } = require("./config/database");
const { createUserController } = require("./controllers/user.controller");
const { createUserRouter } = require("./routes/user.routes");

function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const collections = getCollections();
  const userController = createUserController(collections);

  app.use("/", createUserRouter(userController));

  app.get("/", (req, res) => {
    res.send("Gamers Intel Server is running");
  });

  return app;
}

module.exports = {
  createApp,
};

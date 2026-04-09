const express = require("express");

function createUserRouter(controllers) {
  const router = express.Router();

  router.post("/users", controllers.createUser);
  router.get("/users", controllers.getUsers);

  return router;
}

module.exports = {
  createUserRouter,
};

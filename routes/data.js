const express = require("express");

const server = require("../controller/data");

const dataRouter = express.Router();

dataRouter
  .route("/api")

  .get(server.API);
module.exports = dataRouter;

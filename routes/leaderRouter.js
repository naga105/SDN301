var express = require("express");
var router = express.Router();

router.all("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  next();
});

router.get("/", (req, res, next) => {
  res.end("Will send all the leader to you");
});

router.post("/", (req, res, next) => {
  res.end(
    "Will add the leader: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});

router.put("/", (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation is not supported on /leader");
});

router.delete("/", (req, res, next) => {
  res.end("Deleting all leaders");
});

router.get("/:leaderId", (req, res, next) => {
  res.end(
    "Will send details of the leaders: " + req.params.leaderId + " to you!"
  );
});

router.post("/:leaderId", (req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation is not supported on /leaders/" + req.params.leaderId);
});

router.put("/:leaderId", (req, res, next) => {
  res.write("Updating the leaders: " + req.params.leaderId + "\n");
  res.end(
    "Will update the dish: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});

router.delete("/:leaderId", (req, res, next) => {
  res.end("Deleting the leaders: " + req.params.leaderId);
});

module.exports = router;

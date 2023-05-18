var express = require("express");
var router = express.Router();

router.all("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  next();
});

router.get("/", (req, res, next) => {
  res.end("Will send all the promotions to you");
});

router.post("/", (req, res, next) => {
  res.end(
    "Will add the promotion: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});

router.put("/", (req, res, next) => {
  res.statusCode = 403;
  res.end("PUT operation is not supported on /promotion");
});

router.delete("/", (req, res, next) => {
  res.end("Deleting all promotions");
});

router.get("/:promoId", (req, res, next) => {
  res.end(
    "Will send details of the promotions: " + req.params.promoId + " to you!"
  );
});

router.post("/:promoId", (req, res, next) => {
  res.statusCode = 403;
  res.end(
    "POST operation is not supported on /promotions/" + req.params.promoId
  );
});

router.put("/:promoId", (req, res, next) => {
  res.write("Updating the promotions: " + req.params.promoId + "\n");
  res.end(
    "Will update the dish: " +
      req.body.name +
      " with details: " +
      req.body.description
  );
});

router.delete("/:promoId", (req, res, next) => {
  res.end("Deleting the promotions: " + req.params.promoId);
});

module.exports = router;

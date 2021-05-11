const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).send({
    title: "Cavalo Mangalarga Marchador API",
    version: "v1"
  });
});

module.exports = router;
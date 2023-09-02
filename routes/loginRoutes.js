var express = require('express');
var router = express.Router();
var logModel = require("../models/loginModels");

/** Router de login */
router.post('/login', function (req, res, next){
  logModel.login(req.body, function (status, result) {
    if (status.code == 200)
    res.send(result);
  else {
    res.statusMessage = status.status;
    res.status(status.code).send({});
  }
  });
});




module.exports = router;
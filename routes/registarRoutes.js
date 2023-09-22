var express = require('express');
var router = express.Router();

var registModel = require("../models/registarModel");



/** Router de Registar */
router.post('/registar', function(req, res, next){
    registModel.registar(req.body, function(status, result){
        if(status.code == 200)
        res.send(result);
    else {
        res.statusMessage = status.status;
        res.status(status.code).send({});
      }
    });
});



module.exports = router;
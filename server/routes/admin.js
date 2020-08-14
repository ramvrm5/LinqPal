var express = require('express');
var router = express.Router();
var adminHandler = require("../handler/adminpanel/adminHandler.js");


/* ADMIN LOGIN */
router.post('/adminlogin', function(req, res, next) {
    adminHandler.adminlogin(req.body, (error, obj) => {
      if (error) {
        res.json(error);
      } else {
        res.json(obj);
      }
    });
});

module.exports = router;

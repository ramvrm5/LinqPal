var express = require('express');
var router = express.Router();
var userHandler = require("../handler/externalUser/userHandler.js");
var middleware = require("../middleware.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* ADD USER INFO */
router.post('/userInfo', function(req, res, next) {
  userHandler.userInfo(req.body, (error, obj) => {
      if (error) {
        res.json(error);
      } else {
        res.json(obj);
      }
    });
});

/* GET USER LIST */
router.get('/userList',middleware.checkToken, function(req, res, next) {
  userHandler.userList(req.body, (error, obj) => {
      if (error) {
        res.json(error);
      } else {
        res.json(obj);
      }
    });
});

module.exports = router;

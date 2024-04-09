var express = require('express');
var router = express.Router();

/* GET hiragana listing. */
router.get('/', function(req, res, next) {
  res.send(`hiragana "/" route`);
});

module.exports = router;

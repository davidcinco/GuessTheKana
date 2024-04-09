var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('index');
});

router.get('/play', (req, res, next) => {
  res.send(`home's "/play" route`);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET katakana listing. */
router.get('/', (req, res, next) => {
    res.send(`katakana "/" route`);
});

module.exports = router;
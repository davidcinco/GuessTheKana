var express = require('express');
var router = express.Router();

/* GET about listing. */
router.get('/', (req, res, next) => {
    res.send(`about "/" route`);
});

module.exports = router;
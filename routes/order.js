const express = require('express');
const router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.send('orders');
});

module.exports = router;

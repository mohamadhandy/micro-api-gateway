const express = require('express');
const router = express.Router();

/* GET courses listing. */
router.get('/', function(req, res, next) {
  res.send('courses');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET item's id (for testing). */
router.get('/item/:id', function(req, res, next) {
  res.send('item: ' + req.params.id);
});

module.exports = router;

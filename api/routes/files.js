var express = require('express');
var router = express.Router();
var Grid = require("gridfs-stream");

router.get('/:id', function(req, res) {

  var readstream = Grid.current.createReadStream({
    _id: req.params.id
  });

  readstream.pipe(res);

});

module.exports = router;

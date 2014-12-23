var express = require('express');
var router = express.Router();

var Comicstype = require("../models/comicstype");

var extractResponseFields = function(comicstype) {
  return {
    id: comicstype._id,
    name: comicstype.name,
    url: comicstype.url
  };
}

router.get('/', function(req, res) {
  Comicstype.find({}, function(err, comicstypes) {
    res.json(comicstypes.map(extractResponseFields));
  });
});

router.post("/", function(req, res) {
  var comicstype = new Comicstype({name: req.body.name, url: req.body.url});

  comicstype.save(function(err) {
    res.json(extractResponseFields(comicstype));
  });

});

router.put("/:id", function(req, res) {
  Comicstype.findOne({_id: req.params.id}, function(err, comicstype) {
    comicstype.name = req.body.name;
    comicstype.url = req.body.url;

    comicstype.save(function(err) {
      res.json(extractResponseFields(comicstype));
    });
  });
});

router.delete("/:id", function(req, res) {
  Comicstype.find({_id: req.params.id}, function(err, comicstypes) {
    comicstypes.map(function(comicstype) {
      comicstype.remove();
    });
    res.send("");
  });
});



module.exports = router;

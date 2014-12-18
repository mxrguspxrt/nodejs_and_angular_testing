var express = require('express');
var router = express.Router();

var Comicstype = require("../models/comicstype");

/* GET comicstypes listing. */
router.get('/', function(req, res) {
  Comicstype.find({}, function(err, comicstypes) {
    res.render('comicstypes/index', { comicstypes: comicstypes });
  });
});

/* POST create comicstype */
router.post("/", function(req, res) {
  var comicstype = new Comicstype({name: "tere"});

  comicstype.save(function(err) {
    res.writeHead(302, {"Location": "/comicstypes"});
    res.end();
  });

});

module.exports = router;

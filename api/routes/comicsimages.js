var express = require('express');
var router = express.Router();

var Comicsimage = require("../models/comicsimage");
var Comicstype = require("../models/comicstype");

var extractResponseFields = function(comicsimage) {
  return {
    id: comicsimage["_id"],
    date: comicsimage["date"],
    url: comicsimage["url"],
    type_name: comicsimage["type_name"]
  };
};

router.get('/', function(req, res) {
  var date = req.query.date;
  if (!date) {
    return res.json([]);
  }

  var ymd = date.split("-");

  Comicstype.find({}, function(err, comicstypes) {
    if (err) {
      console.log("got error", err);
      return res.status(500).send("");
    }

    var comicsimages = comicstypes.map(function(comicstype) {
      return {
        _id: comicstype._id,
        type_name: comicstype.name,
        date: date,
        url: comicstype.url.replace("%YYYY", ymd[0]).replace("%MM", ymd[1]).replace("%DD", ymd[2])
      };
    });

    return res.json(comicsimages.map(extractResponseFields));
  });

});

module.exports = router;

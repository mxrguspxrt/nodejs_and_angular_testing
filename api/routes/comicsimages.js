var express = require('express');
var router = express.Router();

var Comicsimage = require("../models/comicsimage");
var Comicstype = require("../models/comicstype");

var extractResponseFields = function(comicsimage) {
  return {
    id: comicsimage["_id"],
    day: comicsimage["day"],
    typeId: comicsimage["typeId"],
    typeName: comicsimage["typeName"],
    filePath: "/api/files/"+comicsimage["fileId"]
  };
};

router.get('/', function(req, res) {
  Comicsimage.remove({}, function() {});

  var date = req.query.date;
  if (!date) {
    return res.json([]);
  }

  var ymd = date.split("-");

  Comicstype.find({}, function(err, comicstypes) {

    var onComicsimagesLoad = function(comicsimages) {
      console.log("Comicsimages loaded", comicsimages);
      return res.json(comicsimages.map(extractResponseFields));
    }

    var onComicsimagesLoadFail = function(error) {
      console.log("Comicsimages not loaded", error);
      return res.status(500).json({error: "Problem loading images"});
    }

    Comicsimage.loadFor(ymd, comicstypes).then(onComicsimagesLoad, onComicsimagesLoadFail);

  });

});

module.exports = router;

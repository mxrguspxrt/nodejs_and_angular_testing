var mongoose = require("mongoose");
var Promise = require("promise");

var ComicsimageSchema = mongoose.Schema({
  typeId: mongoose.Schema.Types.ObjectId, // mongoose.Types.ObjectId,
  typeName: String,
  day: Date,
  fileId: mongoose.Schema.Types.ObjectId
});

ComicsimageSchema.statics.loadFor = function(ymd, comicstypes) {

  var comicsimagesPromises = comicstypes.map(function(comicstype) {
    return comicstype.getComicsimage(ymd);
  });

  return new Promise(function(resolve, reject) {
    var images = [];
    var loadCount = 0;

    var checkIfDone = function() {
      if (loadCount == comicsimagesPromises.length) {
        resolve(images);
      }
    }

    var whenLoaded = function(comicsimage) {
      images.push(comicsimage);
      loadCount++;
      checkIfDone();
    };

    var whenFailed = function(error) {
      loadCount++;
      checkIfDone();
    };

    comicsimagesPromises.map(function(comicsimagePromise) {
      comicsimagePromise.then(whenLoaded, whenFailed);
    });

    checkIfDone(); // we might have no images
  });
};

var Comicsimage = mongoose.model("Comicsimage", ComicsimageSchema);
module.exports = Comicsimage;

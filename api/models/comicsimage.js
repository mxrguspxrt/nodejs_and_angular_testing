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
  return Promise.all(comicsimagesPromises);
};

var Comicsimage = mongoose.model("Comicsimage", ComicsimageSchema);
module.exports = Comicsimage;

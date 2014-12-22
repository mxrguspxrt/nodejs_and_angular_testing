var mongoose = require("mongoose");
var Promise = require("promise");
var http = require("http");
var Comicsimage = require("../models/comicsimage");
var Grid = require("gridfs-stream");

var ComicstypeSchema = mongoose.Schema({
  name: String,
  url: String
});

ComicstypeSchema.methods.getComicsimage = function(ymd) {
  var self = this;

  return new Promise(function(resolve, reject) {
    self.model("Comicsimage").findOne({day: new Date(ymd), typeId: self.id}, function(err, result) {

      if (err) {
        console.log("Error on loading files from DB")
        return reject(err);
      }

      if (result) {
        console.log("Found files from DB")
        return resolve(result);
      }

      if (!result) {
        var imagePath = self.url.
          replace("https", "http").
          replace("%YYYY", ymd[0]).
          replace("%MM", ymd[1]).
          replace("%DD", ymd[2]);

        console.log("File not found, loading from: " + imagePath);

        var onImageStoredInGfs = function(file) {
          console.log("File stored");
          var comicsimage = new Comicsimage({
            day: new Date(ymd),
            typeId: self.id,
            typeName: self.name,
            fileId: file._id
          });

          comicsimage.save(function(error) {
            if (error) {
              return reject(error);
            }
            resolve(comicsimage);
          });
        };

        var onFileDownloaded = function(response) {
          if (response.statusCode==200) {
            var gridWriteStream = Grid.current.createWriteStream({
              _id: mongoose.Types.ObjectId(),
              filename: "comics.jpg",
              mode: "w"
            });

            gridWriteStream.on("close", onImageStoredInGfs);
            response.pipe(gridWriteStream);
          } else {
            reject("Image file for comics not found");
          }
        }

        http.get(imagePath, onFileDownloaded).on("error", function(error) {
          reject(error);
        });
      }

    });
  });

};

var Comicstype = mongoose.model("Comicstype", ComicstypeSchema);

module.exports = Comicstype;

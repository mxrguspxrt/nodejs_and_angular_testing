var mongoose = require("mongoose");

var ComicstypeSchema = mongoose.Schema({
    name: String,
    url: String
});

var Comicstype = mongoose.model("Comicstype", ComicstypeSchema);

module.exports = Comicstype;

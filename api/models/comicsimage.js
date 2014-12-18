var mongoose = require ("mongoose");

var ComicsimageSchema = mongoose.Schema({
    name: String,
    url: String
});

var Comicsimage = mongoose.model("Comicsimage", ComicsimageSchema);

module.exports = Comicsimage;

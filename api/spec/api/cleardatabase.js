var mongoose = require("mongoose");

before(function(done) {
  var connection = mongoose.createConnection('mongodb://localhost/comics');
  connection.on("open", function() {
    connection.db.dropDatabase(function(){
      done();
    });
  });

});

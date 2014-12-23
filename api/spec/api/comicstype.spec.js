var request = require('supertest');
var should = require("should");
var app = require("../../app");
var Comicstype = require("../../models/comicstype");
require("../support/cleardatabase");

describe("/api/comicstypes", function() {

  describe('GET /api/comicstypes when no comicstypes', function(){
    it('responds empty array if no comicstypes defined', function(done){
      request(app)
        .get('/api/comicstypes')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [], done);
    });
  });

  describe('GET /api/comicstypes when no comicstypes', function(){
    var comicstypeJson;
    before(function(done) {
      var comicstype = Comicstype.create({
        name: "Garfield",
        url: "https://garfield.com/uploads/strips/%YYYY-%MM-%DD.jpg"
      }, function(err, comicstype) {
        comicstypeJson = {
          id: comicstype.id,
          name: "Garfield",
          url: "https://garfield.com/uploads/strips/%YYYY-%MM-%DD.jpg"
        };
        done();
      });
    });
    it('responds empty array if no comicstypes defined', function(done){
      request(app)
        .get('/api/comicstypes')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [comicstypeJson], done);
    });
  });

  describe('POST /api/comicstypes', function(){
    it('creates a comicstype', function(done){
      var comicstype = {
        name: "Garfield",
        url: "https://garfield.com/uploads/strips/%YYYY-%MM-%DD.jpg"
      };
      request(app)
        .post('/api/comicstypes')
        .send(comicstype)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          res.body.should.have.property("id").with.lengthOf(24);
          res.body.should.have.property("name", comicstype.name);
          res.body.should.have.property("url", comicstype.url);
          done();
        });
    });
  });

});
var AppControllers = angular.module('AppControllers', []);


AppControllers.controller('ComicsimagesIndexController', ['$routeParams', 'Comicsimage', function($routeParams, Comicsimage) {

  var dateFormat = "YYYY-MM-DD";
  var today = moment();
  var currentDate = $routeParams.date == "today" ? moment() : moment($routeParams.date, dateFormat);
  var previousDate = moment(currentDate).subtract(1, "day");
  var nextDate = moment(currentDate).add(1, "day");

  this.currentDateString = currentDate.format(dateFormat);
  this.previousDateString = previousDate.format(dateFormat);
  if (nextDate <= today) {
    this.nextDateString = nextDate.format(dateFormat);
  }

  this.comicsimages = Comicsimage.query({date: this.currentDateString});

}]);


AppControllers.controller('ComicstypesIndexController', ['$routeParams', 'Comicstype', function($routeParams, Comicstype) {

  var self = this;

  this.comicstypes = Comicstype.query();
  this.newComicstype = new Comicstype();

  this.save = function(newComicstype) {
    this.comicstypes.push(newComicstype);
    newComicstype.$save();
    self.newComicstype = new Comicstype();
  };

  this.delete = function(comicstype) {
    Comicstype.delete({id: comicstype.id});
    var index = this.comicstypes.indexOf(comicstype);
    this.comicstypes.splice(index, 1);
  };

}]);

AppControllers.controller('ComicstypeController', ['$routeParams', 'Comicstype', function($routeParams, Comicstype) {

  this.isInEditMode = false;

  this.edit = function(comicstype) {
    this.isInEditMode = true;
  };

  this.update = function(comicstype) {
    comicstype.$update();
    this.isInEditMode = false;
  };

}]);

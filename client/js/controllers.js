var AppControllers = angular.module('AppControllers', []);


AppControllers.controller('ComicimagesIndexController', ['$routeParams', 'Comicimage', function($routeParams, Comicimage) {

  this.comicimages = Comicimage.query({date: $routeParams.date});

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

}]);


AppControllers.controller('ComictypesIndexController', ['$routeParams', 'Comictype', function($routeParams, Comictype) {

  this.comictypes = Comictype.query();

}]);


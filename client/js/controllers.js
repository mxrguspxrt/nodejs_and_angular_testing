var AppControllers = angular.module('AppControllers', []);


AppControllers.controller('ComicimagesIndexController', ['$scope', '$routeParams', 'Comicimage', function($scope, $routeParams, Comicimage) {

  $scope.comicimages = Comicimage.query({date: $routeParams.date});

  var dateFormat = "YYYY-MM-DD";
  var today = moment();
  var currentDate = $routeParams.date == "today" ? moment() : moment($routeParams.date, dateFormat);
  var previousDate = moment(currentDate).subtract(1, "day");
  var nextDate = moment(currentDate).add(1, "day");

  $scope.currentDateString = currentDate.format(dateFormat);
  $scope.previousDateString = previousDate.format(dateFormat);
  if (nextDate <= today) {
    $scope.nextDateString = nextDate.format(dateFormat);
  }

}]);


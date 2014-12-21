var AppControllers = angular.module('AppControllers', []);

AppControllers.controller('PhonesIndexController', ['$scope', 'Phone', function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
}]);


AppControllers.controller('PhonesShowController', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);

AppControllers.controller('ComicimagesIndexController', ['$scope', '$routeParams', 'Comicimage', function($scope, $routeParams, Comicimage) {

  $scope.comicimages = Comicimage.query({date: $routeParams.date});

  var dateFormat = "YYYY-MM-DD";
  var today = moment();
  var currentDate = $routeParams.date == "today" ? moment() : moment($routeParams.date, dateFormat);
  var previousDate = moment(currentDate).subtract(1, "day");
  var nextDate = moment(currentDate).add(1, "day");

  alert(currentDate);
  alert(previousDate);

  $scope.currentDateString = currentDate.format(dateFormat);
  $scope.previousDateString = previousDate.format(dateFormat);
  if (nextDate <= today) {
    $scope.nextDateString = nextDate.format(dateFormat);
  }

}]);


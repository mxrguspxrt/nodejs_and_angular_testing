var App = angular.module('App', [
  'ngRoute',
  'angularMoment',
  'AppControllers',
  'AppFilters',
  'AppServices'
  ]
);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when("/images/:date", {
        templateUrl: "templates/comicimages/index.html",
        controller: "ComicimagesIndexController"
      }).
      otherwise({
        redirectTo: '/images/today'
      });
  }
]);

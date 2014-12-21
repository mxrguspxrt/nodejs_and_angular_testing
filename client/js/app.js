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
        templateUrl: "templates/comicsimages/index.html",
        controller: "ComicsimagesIndexController",
        controllerAs: "self"
      }).
      when("/settings", {
        templateUrl: "templates/comicstypes/index.html",
        controller: "ComicstypesIndexController",
        controllerAs: "self"
      }).
      otherwise({
        redirectTo: '/images/today'
      });
  }
]);

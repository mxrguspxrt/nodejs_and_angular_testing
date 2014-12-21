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
      when('/phones', {
        templateUrl: 'templates/phones/index.html',
        controller: 'PhonesIndexController'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'templates/phones/show.html',
        controller: 'PhonesShowController'
      }).
      when("/images/:date", {
        templateUrl: "templates/comicimages/index.html",
        controller: "ComicimagesIndexController"
      }).
      otherwise({
        redirectTo: '/images/today'
      });
  }
]);

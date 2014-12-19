var App = angular.module('App', [
  'ngRoute',
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
      otherwise({
        redirectTo: '/phones'
      });
  }
]);

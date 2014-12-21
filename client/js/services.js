var AppServices = angular.module('AppServices', ['ngResource']);

AppServices.factory('Comicsimage', function($resource) {
  return $resource('/api/comicsimages/:id');
});

AppServices.factory('Comicstype', function($resource) {
  return $resource('/api/comicstypes/:id');
});

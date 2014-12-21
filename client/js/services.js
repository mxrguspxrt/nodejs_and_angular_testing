var AppServices = angular.module('AppServices', ['ngResource']);

AppServices.factory('Comicimage', function($resource) {
  return $resource('/api/comicimages/:id');
});

AppServices.factory('Comicstype', function($resource) {
  return $resource('/api/comicstypes/:id');
});

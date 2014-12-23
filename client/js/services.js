var AppServices = angular.module('AppServices', ['ngResource']);

AppServices.factory('Comicsimage', function($resource) {
  return $resource('/api/comicsimages/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
  return $resource('/api/comicsimages/:id');
});

AppServices.factory('Comicstype', function($resource) {
  return $resource('/api/comicstypes/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
});

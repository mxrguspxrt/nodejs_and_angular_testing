var AppServices = angular.module('AppServices', ['ngResource']);

AppServices.factory('Comicimage', ['$resource',
  function($resource){
    return $resource('data/comicimages.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }
]);

AppServices.factory('Comictype', ['$resource',
  function($resource){
    return $resource('data/comictypes.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }
]);

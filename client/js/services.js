var AppServices = angular.module('AppServices', ['ngResource']);

AppServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('data/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }
]);

AppServices.factory('Comicimage', ['$resource',
  function($resource){
    return $resource('data/comicimages.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }
]);
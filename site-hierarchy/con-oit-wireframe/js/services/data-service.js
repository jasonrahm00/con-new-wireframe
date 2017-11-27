angular.module('conWireframe').service('dataService', function($http, $q){

  'use strict';

  this.getData = function(url) {
    
    var deferred = $q.defer();
    
    return $http.get(url)
      .then(function(response) {
        deferred.resolve(response.data.sort(function(a,b) {
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
        }));
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
  };
  
});
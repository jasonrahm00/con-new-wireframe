angular.module('conWireframe').service('dataService', function($http, $q){

  'use strict';

  //Service function accepts url input and performs http get request
  this.getData = function(url) {
    
    var deferred = $q.defer();
    
    //If request is successful, datapoints are sorted alphabetically by name and promise is returned
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
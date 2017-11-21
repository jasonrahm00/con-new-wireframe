angular.module('conWireframe').factory('degreeFactory', function($q, dataService){

  'use strict';
  
  var degreeObject = {
    "degrees": []
  };
  
  degreeObject.getDegrees = function() {
    var deferred = $q.defer();
    return dataService.getData('/js/data/degrees.json')
      .then(function(response) {
        degreeObject.programs = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };

  return degreeObject;
  
});
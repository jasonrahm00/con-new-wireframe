angular.module('conWireframe').factory('degreeFactory', function($q, dataService){

  'use strict';
  
  var degreeObject = {
    "degrees": [],
    "chosenDegree": undefined
  };
  
  degreeObject.getDegrees = function() {
    var deferred = $q.defer();
    return dataService.getData('con-oit-wireframe/js/data/degrees.json')
      .then(function(response) {
        degreeObject.degrees = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };
  
  degreeObject.setDegree = function(x) {
    
    degreeObject.degrees.forEach(function(item) {
      if(item.key === x) {
        degreeObject.chosenDegree = item;
      }
    });
    
    return this;
    
  };

  return degreeObject;
  
});
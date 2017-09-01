angular.module('conWireframe').factory('programFactory', function($q, dataService){

  'use strict';
  
  var programObject = {
    "programs": [],
    "sortedPrograms": []
  };
  
  programObject.getPrograms = function() {
    var deferred = $q.defer();
    return dataService.getData('/js/data/programs.json')
      .then(function(response) {
        programObject.programs = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };

  return programObject;
  
});
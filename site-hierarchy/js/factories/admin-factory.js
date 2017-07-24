angular.module('conWireframe').factory('adminFactory', function($q, dataService){

  'use strict';
  
  var adminObject = {
    "allTeams": [],
    "selectedTeam": {}
  };
  
  adminObject.getAllTeams = function() {
    var deferred = $q.defer();
    return dataService.getData('/js/data/administration.json')
      .then(function(response) {
        adminObject.allTeams = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };

  return adminObject;
  
});
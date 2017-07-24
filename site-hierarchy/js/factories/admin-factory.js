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
  
  adminObject.selectTeam = function(x) {
    for(var i = 0; i < adminObject.allTeams.length; i++) {
      if(adminObject.allTeams[i].office.toLowerCase().indexOf(x) > -1) {
        adminObject.selectedTeam = adminObject.allTeams[i];
      }
    }
    return this;
  }

  return adminObject;
  
});
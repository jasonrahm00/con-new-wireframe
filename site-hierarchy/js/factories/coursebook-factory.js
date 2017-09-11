angular.module('conWireframe').factory('coursebookFactory', function($q, dataService){

  'use strict';
  
  var coursebook = {
    "courses": []
  };
  
  coursebook.getCoursebook = function() {
    var deferred = $q.defer();
    return dataService.getData('/js/data/coursebook.json')
      .then(function(response) {
        response.sort(function(a,b) {
          return (a.number > b.number) ? 1 : ((b.number > a.number) ? -1 : 0);
        });
        coursebook.courses = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.log(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };

  return coursebook;
  
});
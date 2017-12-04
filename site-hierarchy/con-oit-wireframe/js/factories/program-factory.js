angular.module('conWireframe').factory('programFactory', function($q, dataService){

  'use strict';
  
  var programObject = {
    "programs": [],
    "filteredPrograms": [],
    "selectedProgram": {}
  };
  
  programObject.getPrograms = function() {
    var deferred = $q.defer();
    return dataService.getData('con-oit-wireframe/js/data/programs.json')
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
  
  programObject.selectProgram = function(program) {
    this.selectedProgram = program;
    return this;
  }
  
  programObject.filterPrograms = function(x) {
    
    programObject.filteredPrograms = [];
    
    if(x !== 'reset') {
      programObject.programs.forEach(function(item) {
        if(item.degree === x.key) {
          programObject.filteredPrograms.push(item);
        }
      });
    }

    return this;
    
  }

  return programObject;
  
});
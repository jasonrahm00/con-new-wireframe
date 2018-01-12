angular.module('conWireframe').factory('programFactory', function($q, dataService){

  'use strict';
  
  var programObject = {
    "programs": [],
    "filteredPrograms": [],
    "selectedProgram": undefined
  };
  
  //Sends program.json data file URL to dataService
  programObject.getPrograms = function() {
    var deferred = $q.defer();
    return dataService.getData('con-oit-wireframe/js/data/programs.json')
      //If dataService resolves, response (which contains the program object array) is assigned to the programObject.programs property
      .then(function(response) {
        programObject.programs = response;
        deferred.resolve(response);
        return deferred.promise;
    }, function(response) {
        console.error(response);
        deferred.reject(response);
        return deferred.promise;
    });
    return this;
  };
  
  //Called whenever program link is clicked on
    //That function call passes the individual program data object into this function
    //That data object is then assigned to the selectedProgram property
    //That property is used in the degreeCtrl to fill out degree-page data
  programObject.selectProgram = function(program) {
    this.selectedProgram = program;;
    return this;
  }
  
  //Called by the $watcher in programCtrl whenever the Choose Degree selector is changed
  programObject.filterPrograms = function(x) {
    
    //Auto-resets filteredPrograms to empty array so the 'reset' button works and cleans out the filt
    programObject.filteredPrograms = [];
    
    if(x !== 'reset') {
      //Iterates over the programs array and pushes any programs with matching degree key into filteredPrograms array
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
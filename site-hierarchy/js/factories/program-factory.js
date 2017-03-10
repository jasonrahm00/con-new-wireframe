angular.module('conWireframe').factory('programFactory', function(dataFactory){

  'use strict';
  
  var programObject = {
    "programs": [],
    "selectedProgram": {},
    "sortedPrograms": [],
    "programChoice": {}
  };
  
  dataFactory.getData('programs')
    .then(function(response) {
      programObject.programs.push(response.data.sort(function (a,b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      }));
    }, function(error) {
      console.log(error.message);
  });
  
  programObject.setProgramLevel = function(x) {
    this.programLevel = x;
    return this;
  };
  
  programObject.setProgramChoice = function(x) {
    this.programChoice = x;
    return this;
  };
  
  return programObject;
  
});
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
      var dataArray = response.data.sort(function (a,b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
      dataArray.forEach(function (x) {
        programObject.programs.push(x);
      });
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
angular.module('conWireframe').controller('mainCtrl', function ($scope, $q, programFactory) {
  
  'use strict';

  var degreeKeys = [
    {
      "key": "dnp",
      "name": "Doctor of Nursing Practice"
    },
    {
      "key": "bs",
      "name": "Bachelors"
    },
    {
      "key": "ms",
      "name": "Masters"
    },
    {
      "key": "phd",
      "name": "PhD"
    },
    {
      "key": "cert",
      "name": "Professional Development and Certificates"
    }
  ]
  
  programFactory.getPrograms().then(function() {
    $scope.programs = programFactory.programs;
  });
  
  function setProgram(x) {
    $scope.chosenProgram = x;  
  }
  
  $scope.setDegree = function(x) {
    
    setProgram(x);
    
    degreeKeys.forEach(function(elem) {
      if(elem.key === x) {
        $scope.degree = elem.name;
      }
    });
  }
  
});
angular.module('conWireframe').controller('degreeCtrl', function ($scope, defaultFactory, degreeFactory, programFactory) {
  
  'use strict';
  
  $scope.chosenPathway = programFactory.selectedProgram;
  $scope.degreeDates = degreeFactory.dates;
  $scope.appOpen = degreeFactory.appOpen;

  /*
  programFactory.getPrograms()
    .then(degreeFactory.getDegrees)
    .then(function() {
    
      $scope.allPrograms = programFactory.programs;
      $scope.chosenDegree = degreeFactory.chosenDegree;
    
      degreeFactory.degrees.forEach(function(item) {
        $scope.degreeKeys.push(item);
      });
    
  });
  */

  /*
  $scope.$watch('chosenDegree', function(newVal, oldVal) {
    if(newVal !== oldVal) {
      if(newVal !== undefined) {
        degreeFactory.setDegree(newVal.key);
        programFactory.filterPrograms(newVal);

        $scope.chosenDegree = degreeFactory.chosenDegree;
        $scope.filteredPrograms = programFactory.filteredPrograms;
      }
    }
  });
  */

});
angular.module('conWireframe').controller('programCtrl', function ($scope, degreeFactory, programFactory) {
  
  'use strict';

  $scope.chosenPathway = programFactory.selectedProgram;
  $scope.filteredPrograms = programFactory.filteredPrograms;
  $scope.degreeKeys = [];
  
  programFactory.getPrograms()
    .then(degreeFactory.getDegrees)
    .then(function() {
    
      $scope.allPrograms = programFactory.programs;
      $scope.chosenDegree = degreeFactory.chosenDegree;
    
      degreeFactory.degrees.forEach(function(item) {
        $scope.degreeKeys.push(item);
      });
    
  });
  
  $scope.choosePathway = function(x) {
    if(!$scope.chosenDegree) {
      degreeFactory.setDegree(x.degree);
      $scope.chosenDegree = degreeFactory.chosenDegree;
    }
    programFactory.selectProgram(x);
  };
  
  $scope.setDegree = function(x) {
    degreeFactory.setDegree(x);
    programFactory.filterPrograms(degreeFactory.chosenDegree);
    $scope.chosenDegree = degreeFactory.chosenDegree;
  };

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
  
  $scope.resetFilters = function() {
    degreeFactory.setDegree('reset');
    programFactory.filterPrograms('reset');
    $scope.chosenDegree = degreeFactory.chosenDegree;
    $scope.filteredPrograms = programFactory.filteredPrograms;
  }

});
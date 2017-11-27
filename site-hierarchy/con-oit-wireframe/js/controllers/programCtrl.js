angular.module('conWireframe').controller('programCtrl', function ($scope, degreeFactory, programFactory) {
  
  'use strict';

  $scope.chosenPathway = programFactory.selectedProgram;
  $scope.filteredPrograms = programFactory.filteredPrograms;
  $scope.degreeKeys = [];
  $scope.chosenDegree = degreeFactory.chosenDegree;
  $scope.changeDegree = null;
  
  degreeFactory.getDegrees().then(function(){
    
    degreeFactory.degrees.forEach(function(item) {
      $scope.degreeKeys.push(item);
    });
    
  });
  
  programFactory.getPrograms();
  
  $scope.choosePathway = function(x) {
    programFactory.selectProgram(x);
  };
  
  $scope.setDegree = function(x) {
    degreeFactory.setDegree(x);
    programFactory.filterPrograms(degreeFactory.chosenDegree);
  };

  /*
  $scope.$watch('changeDegree', function(newVal, oldVal) {
    if(newVal !== oldVal) {
      $scope.setDegree(newVal.key);
      $scope.selectedPathways = [];
      
      programFactory.programs.forEach(function(item) {
        if(item.degree === degreeFactory.chosenDegree.key) {
          $scope.selectedPathways.push(item)
        }
      });
      
      $scope.degreesFiltered = true;      
    }
  });
  */

});
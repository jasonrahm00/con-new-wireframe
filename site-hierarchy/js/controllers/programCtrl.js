angular.module('conWireframe').controller('programCtrl', function ($scope, degreeFactory, programFactory) {
  
  'use strict';

  $scope.selectedPathways = [];
  
  programFactory.getPrograms().then(function() {
    var programs = programFactory.programs;
    
    programs.forEach(function(item) {

      if(item.degree === degreeFactory.chosenDegree.key) {
        $scope.selectedPathways.push(item)
      }
      
    });
          
    if($scope.selectedPathways.length === 0) {
      $scope.selectedPathways = programs;
      $scope.degreesFiltered = false;
    } else {
      $scope.degreesFiltered = true;
    }
    
  });

  $scope.changeDegree = null;
  
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

});
angular.module('conWireframe').controller('programCtrl', function ($scope, $q, programFactory) {
  
  'use strict';

  $scope.selectedPathways = [];
  
  var allPrograms = [];
  
  programFactory.getPrograms().then(function() {
    var programs = programFactory.programs;
    
    programs.forEach(function(item) {
      
      allPrograms.push(item);
      
      if(item.degree === $scope.chosenDegree) {
        $scope.selectedPathways.push(item)
      }
      
    });
          
    if($scope.selectedPathways.length === 0) {
      $scope.selectedPathways = allPrograms;
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
      
      allPrograms.forEach(function(item) {
        if(item.degree === $scope.chosenDegree) {
          $scope.selectedPathways.push(item)
        }
      });
      
      $scope.degreesFiltered = true;
      
    }
  });
  
    
  
  
});
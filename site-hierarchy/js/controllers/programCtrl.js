angular.module('conWireframe').controller('programCtrl', function ($scope, $q, programFactory) {
  
  'use strict';

  $scope.selectedPathways = [];
  
  programFactory.getPrograms().then(function() {
    var programs = programFactory.programs;
    
    programs.forEach(function(item) {
      if(item.degree === $scope.chosenDegree) {
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
  
});
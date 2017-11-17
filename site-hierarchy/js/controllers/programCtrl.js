angular.module('conWireframe').controller('programCtrl', function ($scope, $q, programFactory) {
  
  'use strict';

  $scope.selectedPathways = [];
  
  $scope.availableOptions = 0;
  
  programFactory.getPrograms().then(function() {
    var programs = programFactory.programs;
    
    programs.forEach(function(elem) {
      if(elem.degree === $scope.chosenDegree) {
        $scope.selectedPathways.push(elem)
      }
    });
          
    if($scope.selectedPathways.length === 0) {
      $scope.selectedPathways = programs;
      $scope.degreesFiltered = false;
    } else {
      $scope.degreesFiltered = true;
    }

    $scope.availableOptions = $scope.selectedPathways.length;    
    
  });
  
});
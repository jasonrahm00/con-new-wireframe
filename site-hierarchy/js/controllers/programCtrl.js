angular.module('conWireframe').controller('programCtrl', function ($scope, $q, programFactory) {
  
  'use strict';

  $scope.selectedPrograms = [];
  
  programFactory.getPrograms().then(function() {
    var programs = programFactory.programs;
    
    programs.forEach(function(elem) {
      if(elem.degree === $scope.chosenProgram) {
        $scope.selectedPrograms.push(elem)
      }
    });
    
    if($scope.selectedPrograms.length === 0) {
      $scope.selectedPrograms = programs;
    }
    
  });
  
});
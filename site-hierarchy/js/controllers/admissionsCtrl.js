angular.module('conWireframe').controller('admissionsCtrl', function ($scope) {
  
  'use strict';
    
  $scope.programLevel;
  
  $scope.programChoices = [];
  
  $scope.getPrograms = function() {
    $scope.programChoices = [];
    var programs = $scope.programs;
    for(var i = 0; i < programs.length; i++) {
      if(programs[i].level === $scope.programLevel) {
        $scope.programChoices.push(programs[i]);
      }
    }
    console.log($scope.programChoices);
  };
    
});
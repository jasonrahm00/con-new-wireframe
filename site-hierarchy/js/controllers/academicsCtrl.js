angular.module('conWireframe').controller('academicsCtrl', function ($scope, programFactory) {
  
  'use strict';
  
  $scope.programLevel = 'all';
  $scope.sortedPrograms = [];
  $scope.programChoice = programFactory.programChoice;
  
  $scope.programSort = function(x) {
    var programs = $scope.programs;
    $scope.sortedPrograms = [];
    $scope.programLevel = x;
    for (var i = 0; i < programs.length; i++) {
      if(programs[i].level === x) {
        $scope.sortedPrograms.push(programs[i]);
      }
    }
    
  };
    
});
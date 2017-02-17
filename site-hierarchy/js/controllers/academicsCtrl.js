angular.module('conWireframe').controller('academicsCtrl', function ($scope) {
  
  'use strict';
  
  $scope.programLevel = 'all';
  $scope.sortedPrograms = [];
  $scope.specialtyChoice;
  
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
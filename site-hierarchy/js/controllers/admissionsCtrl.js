angular.module('conWireframe').controller('admissionsCtrl', function ($scope) {
  
  'use strict';
    
  $scope.programLevel;
  $scope.programChoices = [];
  $scope.exposeButtons;
  $scope.programChoice;
  
  $scope.getPrograms = function() {
    $scope.programChoices = [];
    var programs = $scope.programs;
    for(var i = 0; i < programs.length; i++) {
      if(programs[i].level === $scope.programLevel) {
        $scope.programChoices.push(programs[i]);
      }
    }
  };
  
  $scope.showButtons = function() {
    if($scope.programChoice === null) {
      $scope.exposeButtons = false;
    } else {
      $scope.exposeButtons = true;
      jQuery('.flex-container-around').slideUp().slideDown();
    }
  };
    
});
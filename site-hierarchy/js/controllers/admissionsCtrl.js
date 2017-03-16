angular.module('conWireframe').controller('admissionsCtrl', function ($scope, programFactory) {
  
  'use strict';
    
  $scope.programs = programFactory.programs;
  $scope.programChoice = programFactory.programChoice;
    
});
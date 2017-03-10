angular.module('conWireframe').controller('admissionsCtrl', function ($scope, programFactory) {
  
  'use strict';
    
  $scope.programs = programFactory.programs[0];
  $scope.programChoice = programFactory.programChoice;
    
});
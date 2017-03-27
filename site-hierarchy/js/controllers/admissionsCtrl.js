angular.module('conWireframe').controller('admissionsCtrl', function ($scope, programFactory) {
  
  'use strict';
    
  $scope.programChoice = programFactory.programChoice;
    
});
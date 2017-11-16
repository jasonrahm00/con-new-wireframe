angular.module('conWireframe').controller('mainCtrl', function ($scope, $q, programFactory) {
  
  'use strict';

  programFactory.getPrograms().then(function() {
    $scope.programs = programFactory.programs;
  });
  
  $scope.setProgram = function(program) {
    programFactory.selectProgram(program);
    $scope.selectedProgram = programFactory.selectedProgram;
  };
    
});
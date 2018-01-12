angular.module('conWireframe').controller('degreeCtrl', function ($scope, degreeFactory, programFactory) {
  
  'use strict';
  
  $scope.appOpen = degreeFactory.appOpen !== null ? degreeFactory.appOpen : degreeFactory.degreeDefaults.appOpen;
  $scope.chosenDegree = degreeFactory.chosenDegree;
  $scope.chosenPathway = programFactory.selectedProgram;
  $scope.defaultName = degreeFactory.degreeDefaults.name;
  $scope.degreeDates = degreeFactory.dates ? degreeFactory.dates : degreeFactory.degreeDefaults.dates;
  
  //Makes watcher available if no degree data is set
  if($scope.chosenPathway === undefined) {
    
    //Calls setDefaults() whenever Choose Default selector is changed
    $scope.$watch('defaultName', function(newVal, oldVal) {
      
      if(newVal !== oldVal) {
        degreeFactory.setDefaults(newVal);
        $scope.degreeDates = degreeFactory.degreeDefaults.dates;
        $scope.appOpen = degreeFactory.degreeDefaults.appOpen;
      }
    });
  }

});
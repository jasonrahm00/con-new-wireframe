angular.module('conWireframe').controller('programCtrl', function ($scope, defaultFactory, degreeFactory, programFactory) {
  
  'use strict';
  
  $scope.chosenPathway = programFactory.selectedProgram;
  $scope.filteredPrograms = programFactory.filteredPrograms;
  $scope.degreeKeys = [];
  $scope.degreeDates = degreeFactory.dates;
  $scope.appOpen = degreeFactory.appOpen;
  
  /*
  $scope.defaultProgramData = "Application Open";

  (function loadDefaultData() {
    if($scope.chosenPathway) {
      return
    } else {
      defaultFactory.setProgramDefaults($scope.defaultProgramData);
      console.log(defaultFactory.defaultProgram);
      $scope.defaultName = defaultFactory.defaultProgram.name;
      $scope.degreeDates = defaultFactory.defaultProgram.dates;
      $scope.appOpen = defaultFactory.defaultProgram.appOpen;
    }
  })()
  
  $scope.$watch('defaultProgramData', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      defaultFactory.setProgramDefaults(newVal);
      $scope.defaultName = defaultFactory.defaultProgram.name;
      $scope.degreeDates = defaultFactory.defaultProgram.dates;
      $scope.appOpen = defaultFactory.defaultProgram.appOpen;
    }
  });
  */

  programFactory.getPrograms()
    .then(degreeFactory.getDegrees)
    .then(function() {
    
      $scope.allPrograms = programFactory.programs;
      $scope.chosenDegree = degreeFactory.chosenDegree;
    
      degreeFactory.degrees.forEach(function(item) {
        $scope.degreeKeys.push(item);
      });
    
  });
  
  $scope.choosePathway = function(x) {
    if(!$scope.chosenDegree) {
      degreeFactory.setDegree(x.degree);
      $scope.chosenDegree = degreeFactory.chosenDegree;
    }
    degreeFactory.getDates(x);
    programFactory.selectProgram(x);
  };
  
  $scope.setDegree = function(x) {
    degreeFactory.setDegree(x);
    programFactory.filterPrograms(degreeFactory.chosenDegree);
    $scope.chosenDegree = degreeFactory.chosenDegree;
  };

  $scope.$watch('chosenDegree', function(newVal, oldVal) {
    if(newVal !== oldVal) {
      if(newVal !== undefined) {
        degreeFactory.setDegree(newVal.key);
        programFactory.filterPrograms(newVal);

        $scope.chosenDegree = degreeFactory.chosenDegree;
        $scope.filteredPrograms = programFactory.filteredPrograms;
      }
    }
  });
  
  $scope.resetFilters = function() {
    degreeFactory.setDegree('reset');
    programFactory.filterPrograms('reset');
    $scope.chosenDegree = degreeFactory.chosenDegree;
    $scope.filteredPrograms = programFactory.filteredPrograms;
  }

});
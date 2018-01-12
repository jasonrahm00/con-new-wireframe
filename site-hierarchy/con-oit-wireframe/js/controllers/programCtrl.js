angular.module('conWireframe').controller('programCtrl', function ($scope, degreeFactory, programFactory) {
  
  'use strict';
  
  $scope.filteredPrograms = programFactory.filteredPrograms;
  $scope.degreeKeys = [];
  
  //Calls getPrograms() in factory whenever controller is loaded
  programFactory.getPrograms()
    .then(degreeFactory.getDegrees)
    .then(function() {
    
      $scope.allPrograms = programFactory.programs;
      $scope.chosenDegree = degreeFactory.chosenDegree;
    
      degreeFactory.degrees.forEach(function(item) {
        $scope.degreeKeys.push(item);
      });
    
  });
  
  //Triggered whenever degree option link is clicked on
    //Expectes single degree object as dependency
  $scope.choosePathway = function(x) {
    //If the program doesn't fall under the currently chosen degree category (cert, bs, ms, dnp, phd)
      //Sends object into degree factory to reassign that property
    if(!$scope.chosenDegree) {
      degreeFactory.setDegree(x.degree);
      $scope.chosenDegree = degreeFactory.chosenDegree;
    }
    //Retrieves any dates assigned to the specific program
    degreeFactory.getDates(x);
    //Sends the object into programFactory to reassign the selectedProgram property for use in degreeCtrl
    programFactory.selectProgram(x);
  };

  //Watches for changes to html option selector and refilters program options accordingly
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
  
  //Passes 'reset' into degree and program factories to reset the program filters and chosen degree
  $scope.resetFilters = function() {
    degreeFactory.setDegree('reset');
    programFactory.filterPrograms('reset');
    $scope.chosenDegree = degreeFactory.chosenDegree;
    $scope.filteredPrograms = programFactory.filteredPrograms;
  }

});
angular.module('conWireframe').controller('degreeCtrl', function ($scope, degreeFactory, programFactory) {
  
  'use strict';
  
var defaultDegreeData = [
    {
      "appOpen": false,
      "name": "Application Closed",
      "dates": {
        "open": "September 1, 2017",
        "close": "December 15, 2017",
        "interview": "February, 2018",
        "decision": "April 1, 2018",
        "start": "August"
      }
    },
    {
      "appOpen": true,
      "name": "Application Open",
      "dates": {
        "open": "January 1, 2018",
        "close": "December 31, 2018",
        "interview": "February, 2018",
        "decision": "April 1, 2018",
        "start": "August"
      }
    }
  ];
  
  $scope.chosenDefault = null;
  $scope.chosenDegree = degreeFactory.chosenDegree;
  $scope.chosenPathway = programFactory.selectedProgram;
  $scope.degreeDates = degreeFactory.dates;
  $scope.appOpen = degreeFactory.appOpen;
  
  function setDefaults(x) {
    for(var i = 0; i < defaultDegreeData.length; i++) {
      var dataSet = defaultDegreeData[i];
      if(dataSet.name === x) {
        $scope.chosenDefault = dataSet.name;
        $scope.degreeDates = dataSet.dates;
        $scope.appOpen = dataSet.appOpen;
        $scope.defaultName = dataSet.name;
      }
    }
  }
  
  if($scope.chosenPathway === undefined) {
    $scope.$watch('chosenDefault', function(newVal, oldVal) {
      if(newVal !== oldVal) {
        setDefaults(newVal)
      }
    });
  }

});
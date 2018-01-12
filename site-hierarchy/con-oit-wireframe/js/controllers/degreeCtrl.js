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
        "start": "TBD"
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
  
  //Used to set default data if there is no data assigned by programCtrl
    //Used to demo proposed dynamic features of degree-page
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

  //Makes watcher available if no degree data is set
  if($scope.chosenPathway === undefined) {
    
    //Calls setDefaults() whenever Choose Default selector is changed
    $scope.$watch('chosenDefault', function(newVal, oldVal) {
      
      if(newVal !== oldVal) {
        setDefaults(newVal)
      }
    });
  }

});
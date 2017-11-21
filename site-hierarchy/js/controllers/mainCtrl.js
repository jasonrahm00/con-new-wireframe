angular.module('conWireframe').controller('mainCtrl', function ($scope, $window) {
  
  'use strict';

  $scope.degreeKeys = [
    {
      "key": "dnp",
      "name": "Doctor of Nursing Practice"
    },
    {
      "key": "bs",
      "name": "Bachelors"
    },
    {
      "key": "ms",
      "name": "Masters"
    },
    {
      "key": "phd",
      "name": "PhD"
    },
    {
      "key": "cert",
      "name": "Professional Development and Certificates"
    }
  ];
  
  $scope.degreesFiltered = false;
  
  $scope.choosePathway = function(x) {
    $scope.chosenDegree !== x.degree ? chooseDegree(x.degree) : '';
    $scope.chosenPathway = x;
  }
  
  function chooseDegree(x) {
    $scope.chosenDegree = x;  
  }
  
  $scope.setDegree = function(x) {
    
    chooseDegree(x);
    
    $scope.degreeKeys.forEach(function(item) {
      if(item.key === x) {
        $scope.degree = item.name;
      }
    });
  }
  
  $scope.$watch(function() {
    return location.hash
  }, function(value) {
    $scope.breadcrumbLinks = value.split('/').splice(1, value.length);
  });
  
});
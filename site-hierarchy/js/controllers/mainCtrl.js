angular.module('conWireframe').controller('mainCtrl', function ($scope) {
  
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
    $scope.chosenPathway = x;
  }
  
  function setDegree(x) {
    $scope.chosenDegree = x;  
  }
  
  $scope.setDegree = function(x) {
    
    setDegree(x);
    
    $scope.degreeKeys.forEach(function(elem) {
      if(elem.key === x) {
        $scope.degree = elem.name;
      }
    });
  }
  
  $scope.$watch(function() {
    return location.hash
  }, function(value) {
    $scope.breadcrumbLinks = value.split('/').splice(1, value.length);
    console.log($scope.breadcrumbLinks + ' ' + $scope.breadcrumbLinks.length);
  })
  
});
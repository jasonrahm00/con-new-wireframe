angular.module('conWireframe').controller('mainCtrl', function ($scope, $window, degreeFactory) {
  
  'use strict';
  
  $scope.degreesFiltered = false;
  
  degreeFactory.getDegrees().then(function() {
    $scope.degreeKeys = degreeFactory.degrees;
  });

  $scope.choosePathway = function(x) {
    $scope.chosenDegree !== x.degree ? chooseDegree(x.degree) : '';
    $scope.chosenPathway = x;
  }
  
  function chooseDegree(x) {
    var chosenDegree = x;    
    $scope.chosenDegree = chosenDegree;  
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
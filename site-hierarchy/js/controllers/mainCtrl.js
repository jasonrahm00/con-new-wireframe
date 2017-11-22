angular.module('conWireframe').controller('mainCtrl', function ($scope, $window, degreeFactory) {
  
  'use strict';
  
  $scope.degreesFiltered = false;
  $scope.degreeKeys = [];
  
  degreeFactory.getDegrees().then(function(){
    
    degreeFactory.degrees.forEach(function(item) {
      $scope.degreeKeys.push(item);
    });
    
    $scope.setDegree = function(x) {
      degreeFactory.setDegree(x);
      $scope.chosenDegree = degreeFactory.chosenDegree;
    };

  });
  
  $scope.choosePathway = function(x) {
    $scope.chosenDegree !== x.degree ? degreeFactory.chooseDegree = x.degree : '';
    $scope.chosenPathway = x;
  };
  
  $scope.$watch(function() {
    return location.hash
  }, function(value) {
    $scope.breadcrumbLinks = value.split('/').splice(1, value.length);
  });
  
});
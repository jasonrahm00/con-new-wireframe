angular.module('conWireframe').controller('mainCtrl', function ($scope, $window) {
  
  'use strict';

  $scope.$watch(function() {
    return location.hash
  }, function(value) {
    $scope.breadcrumbLinks = value.split('/').splice(1, value.length);
  });

});